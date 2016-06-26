import java.lang.reflect.Array;
import java.util.*;

/**
 * Created by carriellindeman on 6/23/2016.
 */
public class MakeTree {
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

    public static int getNodeIndex(ArrayList<Node> nodeArr, String topic){
        for (int i = 0; i < nodeArr.size(); i++) {
            if(topic.equals(nodeArr.get(i).getName())){
                return i;
            }
        }
        return -1;
    }

    public static void run(ArrayList<Node> inputNodes, ArrayList<Link> inputLinks, HashMap<String,ArrayList<String>> multCopies) {
        ArrayList<Node> outputNodes = new ArrayList<Node>();
        ArrayList<Link> outputLinks = new ArrayList<Link>();

        for (int i = 0; i < inputLinks.size(); i++) {
            String childName = inputLinks.get(i).getChild();
            String parentName = inputLinks.get(i).getParent();
            if(isInOutputNodes(outputNodes, childName)){
                int indx = getNodeIndex(outputNodes, childName);
                Node newChild = outputNodes.get(indx).makeCopy();
                newChild.changeName(getNextName(multCopies, childName));
                outputNodes.add(newChild);
                if(!isInMultCopies(multCopies, childName)){
                    ArrayList<String> temp = new ArrayList<String>();
                    temp.add(newChild.getName());
                    multCopies.put(childName,temp);
                }else{
                    multCopies.get(childName).add(newChild.getName());
                }
            }

            if(!isInOutputNodes(outputNodes, parentName)){
                int indx = getNodeIndex(inputNodes, parentName);
                outputNodes.add(inputNodes.get(indx));
            }

            if(!isInOutputNodes(outputNodes, childName)) {
                int indx = getNodeIndex(inputNodes, childName);
                outputNodes.add(inputNodes.get(indx));
            }

            if(!isInMultCopies(multCopies, parentName)){
                outputLinks.add(inputLinks.get(i));
            }else{
                outputLinks.add(inputLinks.get(i));
                ArrayList<String> tempMultCopies = multCopies.get(parentName);
                ArrayList<String> tempNodeNames = new ArrayList<String>();
                for (int j = 0; j < tempMultCopies.size(); j++) {
                    int tempIndx = getNodeIndex(outputNodes, childName);
                    Node newChild = outputNodes.get(tempIndx).makeCopy();
                    newChild.changeName(getNextName(multCopies, childName));

                    outputNodes.add(newChild);
                    Link tempLink = new Link(newChild.getName(), tempMultCopies.get(j));
                    outputLinks.add(tempLink);
                    tempNodeNames.add(newChild.getName());
                }
                multCopies.put(childName,tempNodeNames);
            }
        }

        System.out.println(outputLinks);
        System.out.println(outputNodes);
        System.out.println(multCopies);

    }

    public static void main(String[] args) {
        ArrayList<Node> inputNodes = new ArrayList<Node>();
        inputNodes.add(new Node("A",1));
        inputNodes.add(new Node("B",5));
        inputNodes.add(new Node("C",7));
        inputNodes.add(new Node("D",9));
        inputNodes.add(new Node("E",11));
        inputNodes.add(new Node("F",13));

        ArrayList<Link> inputLinks = new ArrayList<Link>();
        inputLinks.add(new Link("B","A"));
        inputLinks.add(new Link("C","A"));
        inputLinks.add(new Link("D","B"));
        inputLinks.add(new Link("D","C"));
        inputLinks.add(new Link("E","D"));
        inputLinks.add(new Link("F","E"));
        inputLinks.add(new Link("F","C"));

        HashMap<String, ArrayList<String>> multCopies = new HashMap<String, ArrayList<String>>();
        //ArrayList<String> tempMultCopiesValue = new ArrayList<String>();
        //tempMultCopiesValue.add("A1");
        //tempMultCopiesValue.add("A2");
        //multCopies.put("A",tempMultCopiesValue);

        run(inputNodes, inputLinks, multCopies);

        //System.out.println(getNextName(multCopies, "A"));
        //System.out.println(isInOutputNodes(inputNodes,"e"));
        //System.out.println(isInMultCopies(multCopies,"A"));
    }
}
