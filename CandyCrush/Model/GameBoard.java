import java.util.Random;

public class GameBoard {
    private static final int Rows = 8;
    private static final int Columns = 4;
    private static final int CandySize = 50;

    private Candy[][] board;

    public GameBoard() {
        this.board = new Candy[Rows][Columns];
        generateRandomCandies();
    }

    private void generateRandomCandies(){
        Random random = new Random();

        for (int i = 0; i < Rows; i++){
            for (int j = 0; j < Columns; j++){
                int candyType = random.nextInt(3);

                switch (candyType){
                    case 0:
                        board[i][j] = new CircleCandy();
                        break;
                    case 1:
                        board[i][j] = new RectangleCandy();
                        break;
                    case 2:
                        board[i][j] = new TriangleCandy();
                        break;
                }
            }
        }
    }

    public void printBoard() {
        for (int i = 0; i < Rows; i++) {
            for (int j = 0; j < Columns; j++) {
                System.out.print(board[i][j] != null ? "0 ": "-");
            }
           // System.out.println();
        }
    }
}