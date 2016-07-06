import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by carriellindeman on 7/1/2016.
 */
public class FormatTree {

    Tree fullTree;
    ArrayList<Link> formatedLinks = new ArrayList<Link>();
    double rangeScore;
    NodeColor minColor = new NodeColor(222,20,0);
    NodeColor maxColor = new NodeColor(0,50,222);

    public FormatTree(Tree treeIn) {
        fullTree = treeIn;
        rangeScore = treeIn.getMax() - treeIn.getMin();
        for (int i = 0; i < fullTree.outputNodes.size(); i++) {
            setNodeColor(i);
        }

    }

    public void setNodeColor(int indx){
        double scorePer = ((fullTree.outputNodes.get(indx).getValue()- fullTree.getMin()) * 100) / this.rangeScore;
        int r = getNewColorValue(maxColor.getRed(), minColor.getRed(), scorePer);
        int g = getNewColorValue(maxColor.getGreen(), minColor.getGreen(), scorePer);
        int b = getNewColorValue(maxColor.getBlue(), minColor.getBlue(), scorePer);

        fullTree.outputNodes.get(indx).setColor(r,g,b);
    }

    public static int getNewColorValue(int maxC, int minC, double scorePer){
        double cRange = maxC - minC;
            double newC = 0;
            if (cRange < 0){
                cRange = cRange * -1;
                scorePer = 100 - scorePer;
                newC = (scorePer * cRange) / 100;
                newC = maxC + newC;

            }else{
                newC = (scorePer * cRange) / 100;
                newC = minC + newC;

            }
            return (int) newC;

    }

    public static void writeStuff(String input){
        try {

            String content = input;

            File file = new File("test.txt");

            // if file doesnt exists, then create it
            if (!file.exists()) {
                file.createNewFile();
            }

            FileWriter fw = new FileWriter(file.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(content);
            bw.close();

            System.out.println("Done");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String formatLinks(String linkVar){
        ArrayList<Link> links = this.fullTree.getOutputLinks();
        String output = "var " + linkVar + " = [";
        for (int i = 0; i < links.size(); i++) {
            String temp = "{child:'" + links.get(i).getChild().getName() + "',";
            if(links.get(i).getParent().getName() == null){
                temp += "parent:" + links.get(i).getParent().getName() + ",";
            }else{
                temp += "parent:'" + links.get(i).getParent().getName() + "',";
            }
            temp += "value:" + links.get(i).getChild().getValue() + ",";
            temp += "color:'" + links.get(i).getChild().getColor().getHex() + "'},";
            output += temp;
        }
        output = output.substring(0, output.length()-1);
        output += "]; \n";
        return output;
    }


    public static void main(String[] args) {

    }


}
