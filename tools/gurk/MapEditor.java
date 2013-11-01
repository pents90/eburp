package gurk;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.ClipboardOwner;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * @author John Watkinson
 */
public class MapEditor {

    private static class Tile {
        char key;
        String name;
        BufferedImage icon;

        private Tile(char key, String name, BufferedImage icon) {
            this.key = key;
            this.name = name;
            this.icon = icon;
        }
    }

    private static final int TILE_SIZE = 16;
    private static final int MARGIN_SIZE = 4;
    private static final int CURSOR_SIZE = 2;

    // Per cent
    private static final int ZOOM_SIZE = 50;

    private static final Color CURSOR_COLOR = new Color(255, 255, 255);
    private static final Color SELECT_COLOR = new Color(128, 128, 255);

    private int width;
    private int height;
    private JFrame frame;
    private HashMap<Character, Tile> tiles;
    private char[][] map;
    private char[][] undo = null;
    private int cursorX, cursorY;
    private int selectX1, selectY1, selectX2, selectY2;
    private boolean showCursor = true;
    private boolean showSelect = false;
    private boolean selectMode = false;

    private boolean zoomOut = false;

    private String name;

    private JPanel panel = new JPanel() {
        @Override
        protected void paintComponent(Graphics graphics) {
            Graphics2D g = (Graphics2D) graphics;

            g.setColor(Color.BLACK);
            g.fillRect(0, 0, panel.getWidth(), panel.getHeight());

            if (zoomOut) {
                g.scale(ZOOM_SIZE / 100f, ZOOM_SIZE / 100f);
            }

            g.translate(MARGIN_SIZE, MARGIN_SIZE);
            {
                for (int y = 0; y < height; y++) {
                    for (int x = 0; x < width; x++) {
                        Tile tile = tiles.get(map[y][x]);
                        g.drawImage(tile.icon, x * TILE_SIZE, y * TILE_SIZE, null);
                    }
                }

                if (showCursor) {
                    g.setColor(CURSOR_COLOR);
                    g.fillRect(cursorX * TILE_SIZE - CURSOR_SIZE, cursorY * TILE_SIZE - CURSOR_SIZE, TILE_SIZE + 2 * CURSOR_SIZE, CURSOR_SIZE);
                    g.fillRect(cursorX * TILE_SIZE - CURSOR_SIZE, cursorY * TILE_SIZE - CURSOR_SIZE, CURSOR_SIZE, TILE_SIZE + 2 * CURSOR_SIZE);
                    g.fillRect((cursorX + 1) * TILE_SIZE, cursorY * TILE_SIZE - CURSOR_SIZE, CURSOR_SIZE, TILE_SIZE + 2 * CURSOR_SIZE);
                    g.fillRect(cursorX * TILE_SIZE - CURSOR_SIZE, (cursorY + 1) * TILE_SIZE, TILE_SIZE + 2 * CURSOR_SIZE, CURSOR_SIZE);
                } else if (showSelect) {
                    int x1 = Math.min(selectX1, selectX2);
                    int x2 = Math.max(selectX1, selectX2);
                    int w = x2 - x1 + 1;
                    int y1 = Math.min(selectY1, selectY2);
                    int y2 = Math.max(selectY1, selectY2);
                    int h = y2 - y1 + 1;
                    g.setColor(SELECT_COLOR);
                    g.fillRect(x1 * TILE_SIZE - CURSOR_SIZE, y1 * TILE_SIZE - CURSOR_SIZE, TILE_SIZE * w + 2 * CURSOR_SIZE, CURSOR_SIZE);
                    g.fillRect(x1 * TILE_SIZE - CURSOR_SIZE, y1 * TILE_SIZE - CURSOR_SIZE, CURSOR_SIZE, TILE_SIZE * h + 2 * CURSOR_SIZE);
                    g.fillRect((x2 + 1) * TILE_SIZE, y1 * TILE_SIZE - CURSOR_SIZE, CURSOR_SIZE, TILE_SIZE * h + 2 * CURSOR_SIZE);
                    g.fillRect(x1 * TILE_SIZE - CURSOR_SIZE, (y2 + 1) * TILE_SIZE, TILE_SIZE * w + 2 * CURSOR_SIZE, CURSOR_SIZE);
                }

            }
            g.translate(-CURSOR_SIZE, -CURSOR_SIZE);

        }
    };

    private int boundX(int x) {
        if (x < 0) {
            return 0;
        } else if (x >= width) {
            return width - 1;
        }
        return x;
    }

    private int boundY(int y) {
        if (y < 0) {
            return 0;
        } else if (y >= height) {
            return height - 1;
        }
        return y;
    }

    private int getX(int mx) {
        if (zoomOut) {
            return boundX((mx - CURSOR_SIZE * ZOOM_SIZE / 100) / (TILE_SIZE * ZOOM_SIZE / 100));
        } else {
            return boundX((mx - CURSOR_SIZE) / TILE_SIZE);
        }
    }

    private int getY(int my) {
        if (zoomOut) {
            return boundY((my - CURSOR_SIZE * ZOOM_SIZE / 100) / (TILE_SIZE * ZOOM_SIZE / 100));
        } else {
            return boundY((my - CURSOR_SIZE) / TILE_SIZE);
        }
    }

    private void moveCursor(int dx, int dy) {
        cursorX = boundX(cursorX + dx);
        cursorY = boundY(cursorY + dy);
    }

    private void setUndo() {
        undo = new char[height][width];
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                undo[y][x] = map[y][x];
            }
        }
    }

    private void setTile(int x, int y, Tile tile) {
        setUndo();
        map[y][x] = tile.key;
        panel.repaint();
    }

    private void fillTile(Tile tile) {
        setUndo();
        int x1 = Math.min(selectX1, selectX2);
        int x2 = Math.max(selectX1, selectX2);
        int y1 = Math.min(selectY1, selectY2);
        int y2 = Math.max(selectY1, selectY2);
        for (int y = y1; y <= y2; y++) {
            for (int x = x1; x <= x2; x++) {
                map[y][x] = tile.key;
            }
        }
        showSelect = false;
        showCursor = true;
        panel.repaint();
    }

    private void backToCursor() {
        showCursor = true;
        showSelect = false;
        panel.repaint();
    }

    private void copyCoords() {
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        String text = "x : " + cursorX + ",\ny : " + cursorY + ",\n";
        System.out.print(text);
        StringSelection stringSelection = new StringSelection(text);
        clipboard.setContents(stringSelection, stringSelection);
    }

    private KeyListener keyListener = new KeyAdapter() {

        @Override
        public void keyPressed(KeyEvent keyEvent) {
            int code = keyEvent.getKeyCode();
            switch (code) {
                case KeyEvent.VK_RIGHT: {
                    moveCursor(1, 0);
                    backToCursor();
                    return;
                }
                case KeyEvent.VK_LEFT: {
                    moveCursor(-1, 0);
                    backToCursor();
                    return;
                }
                case KeyEvent.VK_UP: {
                    if ((keyEvent.getModifiers() & KeyEvent.META_MASK) != 0) {
                        if (zoomOut) {
                            zoomOut = false;
                            panel.repaint();
                        }
                        return;
                    }
                    moveCursor(0, -1);
                    backToCursor();
                    return;
                }
                case KeyEvent.VK_DOWN: {
                    if ((keyEvent.getModifiers() & KeyEvent.META_MASK) != 0) {
                        if (!zoomOut) {
                            zoomOut = true;
                            panel.repaint();
                        }
                        return;
                    }
                    moveCursor(0, 1);
                    backToCursor();
                    return;
                }
                case KeyEvent.VK_SPACE: {
                    showCursor = !showCursor;
                    panel.repaint();
                    return;
                }
                case KeyEvent.VK_ESCAPE: {
                    backToCursor();
                    return;
                }
                case KeyEvent.VK_ENTER: {
                    copyCoords();
                    return;
                }
                case KeyEvent.VK_Z: {
                    if ((keyEvent.getModifiers() & KeyEvent.META_MASK) != 0) {
                        map = undo;
                        panel.repaint();
                        return;
                    }
                }
                case KeyEvent.VK_S: {
                    if ((keyEvent.getModifiers() & KeyEvent.META_MASK) != 0) {
                        if (name != null) {
                            try {
                                saveMap(map, name);
                                System.out.println(" - Saved.");
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                            return;
                        } else {
                            System.out.println("No name specified, use command line.");
                        }
                    }
                }
                case KeyEvent.VK_C: {

                }
            }
            Tile tile = tiles.get(keyEvent.getKeyChar());
            if (tile != null) {
                if (showSelect) {
                    fillTile(tile);
                } else {
                    setTile(cursorX, cursorY, tile);
                }
            }
        }

    };

    private MouseMotionListener mouseMotionListener = new MouseMotionAdapter() {
        @Override
        public void mouseDragged(MouseEvent mouseEvent) {
            int mx = mouseEvent.getX();
            int my = mouseEvent.getY();
            selectX2 = getX(mx);
            selectY2 = getY(my);
            panel.repaint();
        }
    };

    private MouseListener mouseListener = new MouseAdapter() {

        @Override
        public void mousePressed(MouseEvent mouseEvent) {
            int mx = mouseEvent.getX();
            int my = mouseEvent.getY();
            selectX1 = getX(mx);
            selectY1 = getY(my);
            selectX2 = selectX1;
            selectY2 = selectY1;
            showCursor = false;
            showSelect = true;
            selectMode = true;
            panel.repaint();
        }

        @Override
        public void mouseDragged(MouseEvent mouseEvent) {
            int mx = mouseEvent.getX();
            int my = mouseEvent.getY();
            selectX2 = getX(mx);
            selectY2 = getY(my);
            panel.invalidate();
        }

        @Override
        public void mouseReleased(MouseEvent mouseEvent) {
            int mx = mouseEvent.getX();
            int my = mouseEvent.getY();
            selectX2 = getX(mx);
            selectY2 = getY(my);
            cursorX = selectX1;
            cursorY = selectY1;
            if (selectX1 == selectX2 && selectY1 == selectY2) {
                showSelect = false;
                showCursor = true;
            }
            panel.repaint();
            selectMode = false;
        }

    };

    public static BufferedImage loadImage(String iconName) throws Exception {
        String fileName = "icons/" + iconName + ".png";
        BufferedImage icon = null;
        try {
            icon = ImageIO.read(new File(fileName));
        } catch (IOException ioe) {
            // Ignore, we'll have a null icon
        }
        if (icon == null) {
            throw new Exception("Could not find icon image file: " + fileName);
        }
        return icon;
    }

    public MapEditor(int width, int height) throws Exception {
        this.width = width;
        this.height = height;
        map = new char[height][width];
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                map[y][x] = '.'; // Hard code to floor
            }
        }

        tiles = new HashMap<Character, Tile>();
        {
            BufferedReader in = new BufferedReader(new FileReader("maps/tiles.txt"));
            String line = in.readLine();
            while (line != null) {
                String[] tokens = line.split(" ");
                char key = tokens[0].charAt(0);
                String iconName = tokens[2];
                BufferedImage icon = loadImage(iconName);
                Tile tile = new Tile(key, tokens[1], icon);
                /*
                if (Character.isLetter(key)) {
                    tiles.put(Character.toUpperCase(key), tile);
                    tiles.put(Character.toLowerCase(key), tile);
                } else {
                    tiles.put(key, tile);
                }
                */
                tiles.put(key, tile);
                line = in.readLine();
            }
            in.close();
        }

        int panelWidth = width * TILE_SIZE + 2 * MARGIN_SIZE;
        int panelHeight = height * TILE_SIZE + 2 * MARGIN_SIZE;

        panel.setPreferredSize(new Dimension(panelWidth, panelHeight));
        panel.addMouseListener(mouseListener);
        panel.addMouseMotionListener(mouseMotionListener);

        frame = new JFrame("Map Editor");
        frame.setContentPane(new JScrollPane(panel, JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED, JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED));
        frame.setSize(panelWidth, panelHeight + 22);
        frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        frame.addKeyListener(keyListener);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    public void close() {
        frame.dispose();
    }

    public char[][] getMap() {
        return map;
    }

    public void setMap(char[][] map) {
        this.map = map;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static char[][] loadMap(String name) throws Exception {
        BufferedReader in = new BufferedReader(new FileReader(new File("maps", name + ".txt")));
        String line = in.readLine();
        int n = line.length();
        ArrayList<char[]> list = new ArrayList<char[]>();
        while (line != null) {
            char[] row = new char[n];
            for (int i = 0; i < n; i++) {
                row[i] = line.charAt(i);
            }
            list.add(row);
            line = in.readLine();
        }
        in.close();
        int m = list.size();
        char[][] result = new char[m][];
        for (int i = 0; i < m; i++) {
            result[i] = list.get(i);
        }
        return result;
    }

    public static void saveMap(char[][] map, String name) throws Exception {
        PrintWriter out = new PrintWriter(new FileWriter(new File("maps", name + ".txt")));
        for (int y = 0; y < map.length; y++) {
            for (int x = 0; x < map[y].length; x++) {
                out.print(map[y][x]);
            }
            out.println();
        }
        out.close();
    }

    public static void main(String[] args) throws Exception {
        MapEditor editor = null;
        System.out.println("Ready.");
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String line = in.readLine();
        while (line != null) {
            line = line.trim();
            if ("quit".equalsIgnoreCase(line)) {
                System.exit(0);
            } else {
                String[] tokens = line.split(" ");
                String command = tokens[0];
                if ("new".equalsIgnoreCase(command)) {
                    if (editor != null) {
                        editor.close();
                    }
                    int width = Integer.parseInt(tokens[1]);
                    int height = Integer.parseInt(tokens[2]);
                    editor = new MapEditor(width, height);
                    System.out.println("- Created.");
                } else if ("save".equalsIgnoreCase(command)) {
                    if (editor != null) {
                        String name = tokens[1];
                        saveMap(editor.getMap(), name);
                        editor.setName(name);
                        System.out.println("- Saved.");
                    } else {
                        System.out.println("* No editor!");
                    }
                } else if ("load".equalsIgnoreCase(command)) {
                    if (editor != null) {
                        editor.close();
                    }
                    String name = tokens[1];
                    char[][] map = loadMap(name);
                    int width = map[0].length;
                    int height = map.length;
                    editor = new MapEditor(width, height);
                    editor.setMap(map);
                    editor.setName(name);
                    System.out.println(" - '" + name + "' (" + width + ", " + height + ") Loaded.");
                }
            }
            line = in.readLine();
        }
    }

}
