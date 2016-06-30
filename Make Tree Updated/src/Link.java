/**
 * Created by carriellindeman on 6/23/2016.
 */
public class Link {

    Node child;
    Node parent;

    public Link(Node childIn, Node parentIn) {
        this.child = childIn;
        this.parent = parentIn;
    }

    public Node getChild() {
        return this.child;
    }

    public Node getParent(){
        return this.parent;
    }
    public void changeChild(Node childIn){
        this.child = childIn;
    }

    public void changeParent(Node parentIn){
        this.parent = parentIn;
    }

    public String toString(){
        return "Link [child: "+this.child.getName()+", parent: "+this.parent.getName()+"]\n";
    }
    public static void main(String[] args) {
        Node n1 = new Node("N1", 55);
        Node n2 = new Node("N2", 80);
        Link myLink = new Link(n1, n2);
        System.out.println(myLink);
        System.out.println(myLink.getChild());
        System.out.println(myLink.getParent());
    }
}
