import java.awt.*;

public abstract class Candy {
    protected Color color;

    public Candy(Color color) {
        this.color = color;
    }

    public abstract void draw(Graphics2D g, int x, int y, int size);
}

class CircleCandy extends Candy {
    public CircleCandy(){
            super(Color.BLUE);
        }

    public void draw(Graphics2D g, int x, int y, int size){
            g.setColor(color);
            g.fillOval(x, y, size, size);
        }
    }


class RectangleCandy extends Candy {

    public RectangleCandy() {
        super(Color.GREEN); // Set color to green
    }

    public void draw(Graphics2D g, int x, int y, int size) {
        g.setColor(color);
        g.fillRect(x, y, size, size);
    }
}

class TriangleCandy extends Candy {
    public TriangleCandy() {
        super(Color.RED); // Set color to red
    }

    public void draw(Graphics2D g, int x, int y, int size) {
        int[] xPoints = {x + size / 2, x, x + size};
        int[] yPoints = {y, y + size, y + size};
        g.setColor(color);
        g.fillPolygon(xPoints, yPoints, 3);
    }
}


