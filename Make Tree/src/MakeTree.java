import java.lang.reflect.Array;
import java.util.*;

/**
 * Created by carriellindeman on 6/23/2016.
 */
public class MakeTree {

    ArrayList<Node> myOutputNodes;
    ArrayList<Link> myOutputLinks;

    public MakeTree(ArrayList<Node> nodesIn, ArrayList<Link> linksIn){
        HashMap<String, ArrayList<String>> copiesIn = new HashMap<String, ArrayList<String>>();
        run(nodesIn,linksIn,copiesIn);
    }

    public ArrayList<Node> getOutputNodes(){
        return myOutputNodes;
    }

    public ArrayList<Link> getOutputLinks(){
        return myOutputLinks;
    }
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
     * @param multCopies
     * @param topicIn
     * @return newName String
     */
    public static String getNextName(HashMap<String,ArrayList<String>> multCopies, String topicIn) {
        String newName ="";

        try {
            ArrayList<String> tempList = multCopies.get(topicIn);
            newName = makeName(tempList.get(tempList.size()-1));
        } catch( NullPointerException e){
            newName = makeName(topicIn);
            //ArrayList<String> tempArr = new ArrayList<String>();
            //tempArr.add(newName);
            //multCopies.put(topicIn,tempArr);
        }
        return newName;
    }

    /***
     * checks if the topic passed is in output nodes
     * @param outputNodes
     * @param topic
     * @return returns true or false
     */
    public static boolean isInOutputNodes(ArrayList<Node> outputNodes, String topic){
        for (int i = 0; i < outputNodes.size(); i++) {
            if(outputNodes.get(i).getName().equals(topic)){
                return true;
            }
        }
        return false;
    }

    /***
     * checks whether a node is in the multCopies HashMap
     * @param multCopies array to check
     * @param topic node name to check
     * @return boolean
     */
    public static boolean isInMultCopies(HashMap<String,ArrayList<String>> multCopies, String topic) {
        Set set = multCopies.entrySet();
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
    public static int getNodeIndex(ArrayList<Node> nodeArr, String topic){
        for (int i = 0; i < nodeArr.size(); i++) {
            if(topic.equals(nodeArr.get(i).getName())){
                return i;
            }
        }
        return -1;
    }

    /***
     * adds a node name to the correct entry in multCopies or makes a new entry if it doesn't already exist
     * @param multCopiesIn
     * @param key key to add to
     * @param toAdd item to add
     * @return returns updated multCopies Array
     */
    public static HashMap<String, ArrayList<String>> addToMultCopies(HashMap<String, ArrayList<String>> multCopiesIn, String key, String toAdd){
        try{
            ArrayList<String> temp = multCopiesIn.get(key);
            temp.add(toAdd);
            multCopiesIn.put(key,temp);
        } catch (NullPointerException e){
            ArrayList<String> temp = new ArrayList<String>();
            temp.add(toAdd);
            multCopiesIn.put(key,temp);
        }
        return multCopiesIn;
    }

    /***
     * makes a new node with new name based on input
     * @param outNodes
     * @param cName
     * @param multCop
     * @return new node with new name
     */
    public static Node makeNewNode(ArrayList<Node> outNodes, String cName, HashMap<String, ArrayList<String>> multCop){
        int indx = getNodeIndex(outNodes,cName);
        Node newChild = outNodes.get(indx).makeCopy();
        newChild.changeName(getNextName(multCop,cName));
        return newChild;
    }

    public static ArrayList<Link> addLink(ArrayList<Link> outLinks, String cName, String pName, String replace){
        if(replace == null) {
            outLinks.add(new Link(cName, pName));
        }else {
            outLinks.add(new Link(replace, pName));
        }
        return outLinks;
    }

    public void run(ArrayList<Node> inputNodes, ArrayList<Link> inputLinks, HashMap<String,ArrayList<String>> multCopies) {
        //initializes empty outputNodes and outputLinks
        ArrayList<Node> outputNodes = new ArrayList<Node>();
        ArrayList<Link> outputLinks = new ArrayList<Link>();

        //iterates through every input link
        for (int i = 0; i < inputLinks.size(); i++) {
            //declares the initial child name and parent name
            String childName = inputLinks.get(i).getChild();
            String parentName = inputLinks.get(i).getParent();
            //sets this value to null and only changes if the child node gets replaced with a copy and a new name
            String replacementName = null;
            //if the child is already in outputnodes
            if(isInOutputNodes(outputNodes, childName)){
                Node newChild = makeNewNode(outputNodes,childName,multCopies);
                outputNodes.add(newChild);
                replacementName = newChild.getName();
                //adds the new child to multCopies
                multCopies = addToMultCopies(multCopies,childName,newChild.getName());
            }

            //if the parent is not already in ouputNodes
            if(!isInOutputNodes(outputNodes, parentName) && parentName != null){
                outputNodes.add(inputNodes.get(getNodeIndex(inputNodes, parentName)));
            }

            //if the child is not already in outputNodes
            if(!isInOutputNodes(outputNodes, childName)) {
                outputNodes.add(inputNodes.get(getNodeIndex(inputNodes, childName)));
            }

            //adds link to outputLinks
            outputLinks = addLink(outputLinks, childName, parentName, replacementName);

            //if the parent has multiple copies
            if(isInMultCopies(multCopies, parentName)){
                //assign the value to the parent name key to a temp array
                ArrayList<String> tempParentMultCopies = multCopies.get(parentName);

                for (int j = 0; j < tempParentMultCopies.size(); j++) {
                    //make a new node to be attached to this parent copy
                    Node newChild = makeNewNode(outputNodes,childName,multCopies);
                    //add this node to output nodes
                    outputNodes.add(newChild);
                    //add a link between the parent copy and the new node to output links
                    outputLinks = addLink(outputLinks,newChild.getName(),tempParentMultCopies.get(j),null);
                    //add the newChild name to mult copies
                    multCopies = addToMultCopies(multCopies, childName, newChild.getName());

                }
            }
        }
        this.myOutputNodes = outputNodes;
        this.myOutputLinks = outputLinks;
    }

    public static void main(String[] args) {
        ArrayList<Node> inputNodes = new ArrayList<Node>();
        inputNodes.add(new Node("A",1));
        inputNodes.add(new Node("B",5));
        inputNodes.add(new Node("C",7));
        inputNodes.add(new Node("D",9));
        inputNodes.add(new Node("E",11));
        inputNodes.add(new Node("F",13));
        inputNodes.add(new Node("G",15));

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

        //ArrayList<String> tempMultCopiesValue = new ArrayList<String>();
        //tempMultCopiesValue.add("A1");
        //tempMultCopiesValue.add("A2");
        //multCopies.put("A",tempMultCopiesValue);

        //run(inputNodes, inputLinks, multCopies);

        //System.out.println(getNextName(multCopies, "A"));
        //System.out.println(isInOutputNodes(inputNodes,"e"));
        //System.out.println(isInMultCopies(multCopies,"E"));

        MakeTree myTree = new MakeTree(inputNodes,inputLinks);
        System.out.println(myTree.getOutputNodes());
        System.out.println(myTree.getOutputLinks());
    }
}
