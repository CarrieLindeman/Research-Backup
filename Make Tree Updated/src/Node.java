
/**
 * Created by carriellindeman on 6/23/2016.
 */
public class Node {

    String name;
    double value;
    double prevalue;
    NodeColor color;
    double range;


    public Node(String nameIn, double valueIn) {
        name = nameIn;
        value = valueIn;
        prevalue = valueIn;
    }

    public String getName() {
        return this.name;
    }

    public double getValue(){
        return this.value;
    }

    public double getPreValue() { return this.prevalue; }

    public NodeColor getColor() { return this.color; }

    public void setColor(int r, int g, int b){
        this.color = new NodeColor(r,g,b);
    }

    public void setNode(Node inputNode){
        this.name = inputNode.getName();
        this.value = inputNode.getValue();
        this.prevalue = inputNode.getPreValue();
        this.color = inputNode.getColor();
    }

    public void changeName(String nameIn){
        this.name = nameIn;
    }

    public void changeValue(double valueIn){
        this.value = valueIn;
    }

    public void changePrevalue(double valueIn) { this.prevalue = valueIn;}

    public Node makeCopy(){
        return new Node(this.name, this.value);
    }

    public String toString(){
        return "Node [name: "+this.name+", value: "+this.value+"]";//", preValue: "+this.prevalue+"]";
    }

    public static void main(String[] args) {
        Node myNode = new Node("A", 65);
        System.out.println(myNode);
        myNode.changeName("A1");
        myNode.changeValue(85);
        System.out.println(myNode);
        Node mySecondNode = myNode.makeCopy();
        mySecondNode.changePrevalue(15);
        mySecondNode.changeName("test");
        System.out.println(mySecondNode);
    }
}
