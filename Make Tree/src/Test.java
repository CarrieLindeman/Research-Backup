import java.util.ArrayList;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/**
 * Created by carriellindeman on 6/27/2016.
 */
public class Test {

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

    public static String formatLinks(String linkVar, ArrayList<Link> links){
        String output = linkVar + " = [";
        for (int i = 0; i < links.size(); i++) {
            String temp = "{child:'" + links.get(i).getChild() + "',";
            temp += "parent:'" + links.get(i).getParent() + "'},";
            output += temp;
        }
        output = output.substring(0, output.length()-1);
        output += "]; \n";
        return output;
    }
    public static String formatNodes(String nodeVar, ArrayList<Node> nodes){
        String output = nodeVar + " = [";
        for (int i = 0; i < nodes.size(); i++) {
            String temp = "{name:'"+nodes.get(i).getName()+"',";
            temp += "value:"+nodes.get(i).getValue()+"},";
            output += temp;
        }
        output = output.substring(0, output.length()-1);
        output += "]; \n";
        return output;
    }

    public static void main(String[] args) {
        ArrayList<Node> inputNodes = new ArrayList<Node>();
        inputNodes.add(new Node("A",10));
        inputNodes.add(new Node("B",50));
        inputNodes.add(new Node("C",70));
        inputNodes.add(new Node("D",90));
        inputNodes.add(new Node("E",65));
        inputNodes.add(new Node("F",35));
        inputNodes.add(new Node("G",47));

        ArrayList<Link> inputLinks = new ArrayList<Link>();
        inputLinks.add(new Link("B","A"));
        inputLinks.add(new Link("C","A"));
        inputLinks.add(new Link("D","B"));
        inputLinks.add(new Link("E","B"));
        inputLinks.add(new Link("D","C"));
        inputLinks.add(new Link("F","C"));
        inputLinks.add(new Link("E","D"));
        inputLinks.add(new Link("F","D"));
        inputLinks.add(new Link("F","E"));
        inputLinks.add(new Link("G","E"));
        inputLinks.add(new Link("G","F"));

        MakeTree myMakeTree = new MakeTree(inputNodes,inputLinks);

        String nodeVar = "nodeList";
        String linkVar = "linkList";
        String input = formatNodes(nodeVar, myMakeTree.getOutputNodes());
        input += formatLinks(linkVar, myMakeTree.getOutputLinks());
        writeStuff(input);

    }
}
