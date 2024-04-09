import java.util.Random;

public class GameManager {
    private static final int ROWS = 8;
    private static final int COLUMNS = 4;

    private Candy[][] board;
    private int score;

    public GameManager() {
        board = new Candy[ROWS][COLUMNS];
        initializeBoard();
        score = 0;
    }

    private void initializeBoard(){
       Random random = new Random();

       for (int i = 0; i< ROWS; i++){
           for (int j = 0; j < COLUMNS; j++){
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

    private void checkAndRemoveMatches(){
        for (int i = 0; i < ROWS; i++){
            for (int j = 0; j < COLUMNS - 2; j++){
                Candy currentCandy = board[i][j];
                if (currentCandy != null) {
                    if(currentCandy.equals(board[i][j]) && currentCandy.equals(board[i][j + 1]) && currentCandy.equals(board[i][j + 2])) {
                        board[i][j] = null;
                        board[i][j + 1] = null;
                        board[i][j + 2] = null;
                    }
                }
            }
        }

        for (int j = 0; j < COLUMNS; j++) {
            for (int i = 0; i < ROWS - 2; i++) {
                Candy currentCandy = board[i][j];
                if (currentCandy != null) {
                    if (currentCandy.equals(board[i+1][j]) && currentCandy.equals(board[i + 2][j])) {
                        board[i][j] = null;
                        board[i + 1][j] = null;
                        board[i + 2][j] = null;
                    }
                }
            }
        }
    }

    private void generateNewCandies(){

    }

    private void updateScore(){

    }
}
