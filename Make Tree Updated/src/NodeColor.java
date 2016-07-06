/**
 * Created by carriellindeman on 7/1/2016.
 */
public class NodeColor {

    int red;
    int green;
    int blue;
    String hex;

    public NodeColor(int r, int g, int b){
        this.red = r;
        this.green = g;
        this.blue = b;
        calcHex();
    }

    public int getRed(){
        return this.red;
    }

    public int getGreen(){
        return this.green;
    }

    public int getBlue(){
        return this.blue;
    }

    public String getHex(){
        return this.hex;
    }

    public void calcHex(){
        this.hex =  String.format("#%02x%02x%02x", this.red, this.green, this.blue);
    }

    public String toString(){
        return "Color: R" + this.red +" G" + this.green + " B" + this.blue;
    }
    public static void main(String[] args) {
        NodeColor myColor = new NodeColor(55,64,84);
        System.out.println(myColor.getHex());
    }
}
