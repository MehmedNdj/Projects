import java.awt.*;
import javax.swing.*;

public class GameView {
    private JFrame frame;
    private JPanel panel;

    public GameView() {
        frame = new JFrame("Candy Crush");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        panel = new JPanel();
        panel.setPreferredSize(new Dimension(400, 300));

        frame.getContentPane().add(panel);

        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }


    public void updateBoard(Candy[][] board) {
        // Clear the existing components from the panel
        panel.removeAll();

        // Iterate over the board array to add new components for each candy
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                Candy candy = board[i][j];
                if (candy != null) {
                    // Create a JLabel to represent the candy
                    JLabel label = new JLabel();

                    // Set the size and color of the label based on the candy type
                    label.setPreferredSize(new Dimension(50, 50)); // Example size
                    label.setOpaque(true); // Ensure label is opaque to show background color
                    label.setHorizontalAlignment(SwingConstants.CENTER); // Center text horizontally
                    label.setVerticalAlignment(SwingConstants.CENTER); // Center text vertically

                    if (candy instanceof CircleCandy) {
                        label.setBackground(Color.BLUE);
                        label.setText("O"); // Placeholder text for circle candy
                    } else if (candy instanceof RectangleCandy) {
                        label.setBackground(Color.GREEN);
                        label.setText("R"); // Placeholder text for rectangle candy
                    } else if (candy instanceof TriangleCandy) {
                        label.setBackground(Color.RED);
                        label.setText("T"); // Placeholder text for triangle candy
                    }

                    // Add the label to the panel at the appropriate position
                    panel.add(label);
                }
            }
        }

        // Repaint the panel to reflect the changes
        panel.revalidate();
        panel.repaint();
    }
}
