package gurk;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.PrintWriter;

/**
 * @author John Watkinson
 */
public class GameCompiler {

    public static void main(String[] args) throws Exception {
        String input = "game/" + args[0];
        String output = args[1] + "/game.js";
        BufferedReader in = new BufferedReader(new FileReader(input));
        PrintWriter out = new PrintWriter(output);
        String line = in.readLine();
        while (line != null) {
            if (line.contains("map : \"@") || line.contains("map: \"@") || line.contains("map:\"@") || line.contains("map :\"@")) {
                int startIndex = line.indexOf("\"@") + 2;
                int endIndex = line.lastIndexOf("\"");
                String mapFile = line.substring(startIndex, endIndex);
                out.println("\t\t\tmap : \"\\");
                BufferedReader mapIn = new BufferedReader(new FileReader("maps/" + mapFile));
                String row = mapIn.readLine();
                int width = row.length();
                int height = 0;
                while (row != null) {
                    height++;
                    out.println(row + "\\");
                    row = mapIn.readLine();
                }
                out.println("\",");
                out.println("\t\t\twidth : " + width + ",");
                out.println("\t\t\theight : " + height + ",");
                System.out.println("Adding map '" + mapFile + "' with width=" + width + ", height=" + height + ".");
                mapIn.close();
            } else {
                out.println(line);
            }
            line = in.readLine();
        }
        in.close();
        out.close();
    }
}
