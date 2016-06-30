import java.lang.reflect.Array;
import java.util.*;

/**
 * Created by carriellindeman on 6/30/2016.
 */
public class Tree {

    ArrayList<Node> outputNodes = new ArrayList<Node>();
    ArrayList<Link> outputLinks = new ArrayList<Link>();
    HashMap<Node, ArrayList<Node>> multCopies = new HashMap<Node, ArrayList<Node>>();

    public Tree(ArrayList<Node> inputNodes, ArrayList<Link> inputLinks) {
        run(inputNodes, inputLinks);
    }

    public ArrayList<Node> getOutputNodes() { return outputNodes; }

    public ArrayList<Link> getOutputLinks() { return outputLinks; }

    /***
     * takes the previous node name and creates the next node name
     * @param prevName String
     * @return nextName String
     */
    public static String makeName(String prevName) {
        String[] nameList = prevName.split("");
        String name = "";
        String num = "";
        for (int i = 0; i < nameList.length; i++) {
            try{
                Integer.parseInt(nameList[i]);
                num+=nameList[i];
            } catch (NumberFormatException e) {
                name += nameList[i];
            }
        }
        if(num.equals("")) {
            return name+"1";
        }else {
            int number = Integer.parseInt(num);
            number += 1;
            name += number;
            return name;
        }
    }

    /***
     *  calls makeName with the last item in the array from multCopies
     * @param topicIn
     * @return newName String
     */
    public String getNextName(Node topicIn) {
        String newName ="";

        try {
            ArrayList<Node> tempList = this.multCopies.get(topicIn);
            newName = makeName(tempList.get(tempList.size()-1).getName());
        } catch( NullPointerException e){
            newName = makeName(topicIn.getName());
            //ArrayList<String> tempArr = new ArrayList<String>();
            //tempArr.add(newName);
            //multCopies.put(topicIn,tempArr);
        }
        return newName;
    }

    /***
     * checks whether a node is in the multCopies HashMap
     * @param topic node name to check
     * @return boolean
     */
    public boolean isInMultCopies(Node topic) {
        Set set = this.multCopies.entrySet();
        Iterator iterator = set.iterator();
        while(iterator.hasNext()) {
            Map.Entry mentry = (Map.Entry)iterator.next();
            if(mentry.getKey().equals(topic)){
                return true;
            }
        }
        return false;
    }

    /***
     * finds the index at which the node appears
     * @param nodeArr the node array to search
     * @param topic the node name you are searching for
     * @return int index at which the node appears
     */
    public static int getNodeIndex(ArrayList<Node> nodeArr, Node topic){
        for (int i = 0; i < nodeArr.size(); i++) {
            if(topic.equals(nodeArr.get(i))){
                return i;
            }
        }
        return -1;
    }

    /***
     * checks if the topic passed is in output nodes
     * @param topic
     * @return returns true or false
     */
    public boolean isInOutputNodes(Node topic){
        for (int i = 0; i < this.outputNodes.size(); i++) {
            if(this.outputNodes.get(i).equals(topic)){
                return true;
            }
        }
        return false;
    }

    /***
     * adds a node name to the correct entry in multCopies or makes a new entry if it doesn't already exist
     * @param key key to add to
     * @param toAdd item to add
     * @return returns updated multCopies Array
     */
    public void addToMultCopies(Node key, Node toAdd){
        try{
            ArrayList<Node> temp = this.multCopies.get(key);
            temp.add(toAdd);
            this.multCopies.put(key, temp);
        } catch (NullPointerException e){
            ArrayList<Node> temp = new ArrayList<Node>();
            temp.add(toAdd);
            this.multCopies.put(key, temp);
        }
    }
    /***
     * makes a new node with new name based on input
     * @param child
     * @return new node with new name
     */
    public Node makeNewNode(Node child){
        Node newChild = child.makeCopy();
        newChild.changeName(getNextName(child));
        return newChild;
    }

    public void addLink(Node child, Node parent, Node replace){
        if(replace.getName() == null){
            this.outputLinks.add(new Link(child, parent));
        }else{
            this.outputLinks.add(new Link(replace, parent));
        }
    }

    public void run(ArrayList<Node> inputNodes, ArrayList<Link> inputLinks){
        //iterates through every input link
        for (int i = 0; i < inputLinks.size(); i++) {
            Node child = inputLinks.get(i).getChild();
            Node parent = inputLinks.get(i).getParent();
            Node replacement = new Node(null,0.0);

            if(isInOutputNodes(child)){
                Node newChild = makeNewNode(child);
                this.outputNodes.add(newChild);
                replacement.setNode(newChild);
                addToMultCopies(child,newChild);
            }

            if(!isInOutputNodes(parent) && parent != null){
                this.outputNodes.add(parent);
            }

            if(!isInOutputNodes(child)){
                outputNodes.add(child);
            }

            addLink(child,parent,replacement);

            if(isInMultCopies(parent)){

                ArrayList<Node> tempParentMultCopies = multCopies.get(parent);
                Node tempReplace = new Node(null,0.0);
                for (int j = 0; j < tempParentMultCopies.size(); j++) {
                    Node newChild = makeNewNode(child);
                    this.outputNodes.add(newChild);
                    addLink(newChild,tempParentMultCopies.get(j),tempReplace);
                    addToMultCopies(child,newChild);
                }//end for
            }//end if
        }//end for
    }


    public static void main(String[] args) {
     /*ArrayList<Node> inputNodes = new ArrayList<Node>();
        inputNodes.add(new Node("A",10));
        inputNodes.add(new Node("B",50));
        inputNodes.add(new Node("C",80));
        inputNodes.add(new Node("D",73));
        inputNodes.add(new Node("E",22));

     ArrayList<Link> inputLinks = new ArrayList<Link>();
        inputLinks.add(new Link(inputNodes.get(1),inputNodes.get(0)));
        inputLinks.add(new Link(inputNodes.get(2),inputNodes.get(0)));
        inputLinks.add(new Link(inputNodes.get(3),inputNodes.get(1)));
        inputLinks.add(new Link(inputNodes.get(3),inputNodes.get(2)));
        inputLinks.add(new Link(inputNodes.get(4),inputNodes.get(3)));
        */


        ArrayList<Node> inputNodes = new ArrayList<Node>();
        inputNodes.add(new Node("A",1));//0
        inputNodes.add(new Node("B",5));//1
        inputNodes.add(new Node("C",7));//2
        inputNodes.add(new Node("D",9));//3
        inputNodes.add(new Node("E",11));//4
        inputNodes.add(new Node("F",13));//5
        inputNodes.add(new Node("G",15));//6

        ArrayList<Link> inputLinks = new ArrayList<Link>();
        inputLinks.add(new Link(inputNodes.get(1),inputNodes.get(0)));//A -> B
        inputLinks.add(new Link(inputNodes.get(2),inputNodes.get(0)));//A -> C
        inputLinks.add(new Link(inputNodes.get(3),inputNodes.get(1)));//B -> D
        inputLinks.add(new Link(inputNodes.get(4),inputNodes.get(1)));//B -> E
        inputLinks.add(new Link(inputNodes.get(3),inputNodes.get(2)));//C -> D
        inputLinks.add(new Link(inputNodes.get(5),inputNodes.get(2)));//C -> F
        inputLinks.add(new Link(inputNodes.get(4),inputNodes.get(3)));//D -> E
        inputLinks.add(new Link(inputNodes.get(5),inputNodes.get(3)));//D -> F
        inputLinks.add(new Link(inputNodes.get(5),inputNodes.get(4)));//E -> F
        inputLinks.add(new Link(inputNodes.get(6),inputNodes.get(4)));//E -> G
        inputLinks.add(new Link(inputNodes.get(6),inputNodes.get(5)));//F -> G

        Tree myTree = new Tree(inputNodes, inputLinks);
        System.out.println(myTree.getOutputNodes());
        System.out.println(myTree.getOutputLinks());
    }

}
