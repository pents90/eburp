package gurk;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author John Watkinson
 */
public class ImageCompiler {

    public static final int LIMIT = 300;
    public static final int COLUMNS = 15;
    public static final int ICON_SIZE = 16;
    public static final int[] RENDER_SIZES =
            {
                    1, 2, 3, 4, 5, 6, 7, 8
            };

    public static final Pattern PATTERN_IMAGE = Pattern.compile("\\\"\\w+.png\\\"");

    public static final String ICONS_DIR = "icons";

    private static class Cell {
        public String name;
        public int block;
        public int x, y;
        public int frames;

        private Cell(String name, int block, int x, int y, int frames) {
            this.name = name;
            this.block = block;
            this.x = x;
            this.y = y;
            this.frames = frames;
        }
    }

    public static BufferedImage getImage(String iconName) throws Exception {
        String fileName = ICONS_DIR + File.separator + iconName;
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

    public static void main(String[] args) throws Exception {
        boolean scrub = args.length > 2 && "scrub".equalsIgnoreCase(args[2]);
        String dest = args[1];
        if ("android".equalsIgnoreCase(dest)) {
            dest = "android/assets";
        } else if ("ios".equalsIgnoreCase(dest)) {
            dest = "ios/Gurk/Gurk";
        }
        File dir = new File(dest);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        HashMap<String, Cell> cells = new HashMap<String, Cell>();
        ArrayList<ArrayList<String[]>> rows = new ArrayList<ArrayList<String[]>>();
        int lastNumRows;
        int numBlocks;
        //// 1) Parse the game file for the images
        {
            BufferedReader in = new BufferedReader(new FileReader(args[0]));
            String line = in.readLine();
            int block = 0;
            int x = 0;
            int y = -1;
            int count = 0;
            String[] row = null;
            rows.add(new ArrayList<String[]>());
            while (line != null) {
                Matcher matcher = PATTERN_IMAGE.matcher(line);
                while (matcher.find()) {
                    String image = matcher.group();
                    image = image.substring(1, image.length() - 1);
                    System.out.println("Found : '" + image + "'");
                    if (cells.containsKey(image)) {
                        System.out.println(" - Already added.");
                    } else {
                        System.out.println(" - Adding.");
                        if (row == null) {
                            row = new String[COLUMNS];
                            rows.get(block).add(row);
                            y++;
                        }
                        BufferedImage icon = getImage(image);
                        int frames = icon.getWidth() / ICON_SIZE;
                        cells.put(image, new Cell(image, block, x, y, frames));
                        row[x] = image;
                        for (int i = 0; i < frames; i++) {
                            if (row == null) {
                                row = new String[COLUMNS];
                                rows.get(block).add(row);
                                y++;
                            }
                            x++;
                            if (x == COLUMNS) {
                                x = 0;
                                row = null;
                            }
                            count++;
                        }
                        if (count == LIMIT) {
                            count = 0;
                            x = 0;
                            y = -1;
                            row = null;
                            rows.add(new ArrayList<String[]>());
                            block++;
                        }
                    }
                }
                line = in.readLine();
            }
            in.close();
            lastNumRows = y + 1;
            numBlocks = block + 1;
        }
        int fullNumRows = (int) Math.ceil(LIMIT / (float) COLUMNS);
        //// 2) Build the tile image
        for (int k = 0; k < numBlocks; k++) {
            ArrayList<String[]> r = rows.get(k);
            int numRows = (k + 1 < numBlocks) ? fullNumRows : lastNumRows;
            int width = COLUMNS * ICON_SIZE;
            int height = numRows * ICON_SIZE;
            if (height > 0) {
                BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
                Graphics2D g = (Graphics2D) image.getGraphics();
                int i = 0;
                BufferedImage icon = null;
                for (int y = 0; y < r.size(); ) {
                    String[] row = r.get(y);
                    for (int x = 0; x < row.length; ) {
                        String iconName = row[x];
                        if (iconName != null) {
                            icon = getImage(iconName);
                            i = 0;
                        }
                        g.drawImage(icon, x * ICON_SIZE, y * ICON_SIZE, (x + 1) * ICON_SIZE, (y + 1) * ICON_SIZE, i * ICON_SIZE, 0, (i + 1) * ICON_SIZE, ICON_SIZE, null);
                        i++;
                        x++;
                        if (x == row.length) {
                            y++;
                            break;
                        }
                    }
                }
                for (int n : RENDER_SIZES) {
                    BufferedImage tile = new BufferedImage(width * n, height * n, BufferedImage.TYPE_INT_ARGB);
                    Graphics2D graphics = (Graphics2D) tile.getGraphics();
                    graphics.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_NEAREST_NEIGHBOR);
                    graphics.drawImage(image, 0, 0, n * width, n * height, 0, 0, width, height, null);
                    File out = new File(dest, "icons" + k + "-" + n + ".png");
                    ImageIO.write(tile, "png", out);
                }
            }
        }
        //// 3) Build the look-up JS file.
        {
            PrintWriter out = new PrintWriter(new File(dest, "icons.js"));
            out.println("var Icons = {");
            boolean first = true;
            for (int k = 0; k < numBlocks; k++) {
                for (int y = 0; y < rows.get(k).size(); y++) {
                    String[] row = rows.get(k).get(y);
                    for (int x = 0; x < row.length; x++) {
                        String name = row[x];
                        if (name != null) {
                            Cell cell = cells.get(name);
                            if (!first) {
                                out.println(",");
                            } else {
                                first = false;
                            }
                            out.print("\t\"" + name + "\" : {block : " + k + ", x : " + cell.x + ", y : " + cell.y);
                            if (cell.frames > 1) {
                                out.print(", frames : " + cell.frames);
                            }
                            out.print("}");
                        }
                    }
                }
            }
            out.println("\n}");
            out.close();
        }
        //// 4) Optionally build a scrub list for all image files that aren't used.
        if (scrub) {
            System.out.println("# Scrub list");
            File iconDir = new File("icons");
            File[] files = iconDir.listFiles();
            for (File file : files) {
                String name = file.getName();
                if (name.toLowerCase().endsWith(".png")) {
                    if (!cells.containsKey(name)) {
                        System.out.println("rm " + file.getPath());
                    } else {
                        System.out.println("# KEEP " + file.getPath());
                    }
                }
            }
        }
    }
}
