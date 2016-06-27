/**
 * Created by carriellindeman on 6/23/2016.
 */
public class Link {

    String child;
    String parent;

    public Link(String childIn, String parentIn) {
        this.child = childIn;
        this.parent = parentIn;
    }

    public String getChild() {
        return this.child;
    }

    public String getParent(){
        return this.parent;
    }
    public void changeChild(String childIn){
        this.child = childIn;
    }

    public void changeParent(String parentIn){
        this.parent = parentIn;
    }

    public String toString(){
        return "Link [child: "+this.child+", parent: "+this.parent+"]\n";
    }
    public static void main(String[] args) {
        Link myLink = new Link("A","B");
        myLink.changeChild("A1");
        myLink.changeParent("B1");
        System.out.println(myLink);
    }
}
