package gurk;

import java.io.BufferedReader;
import java.io.FileReader;

/**
 * @author John Watkinson
 */
public class FontConverter {

    public static void main(String[] args) throws Exception {
        System.out.println("  font: {");
        BufferedReader in = new BufferedReader(new FileReader(args[0]));
        String line = in.readLine();
        boolean first = true;
        while (line != null) {
            if (!first) {
                System.out.println(",");
            } else {
                first = false;
            }
            String[] tokens = line.split("\\|");
            char c = tokens[0].charAt(0);
            int x1 = Integer.parseInt(tokens[1]);
            int x2 = Integer.parseInt(tokens[2]);
            int y1 = Integer.parseInt(tokens[3]);
            int y2 = Integer.parseInt(tokens[4]);
            int width = x2 - x1 + 1;
            int height = y2 - y1 + 1;
            System.out.print("    '" + c + "' : {x : " + x1 + ", y : " + y1 + ", width: " + width + ", height: " + height + "}");
            line = in.readLine();
        }
        System.out.println("\n  }");
    }

}
