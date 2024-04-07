public class GameBoard {
    private static final int Rows = 8;
    private static final int Columns = 4;

    private int[][] board;

    public GameBoard() {
        this.board = new int[Rows][Columns];
    }

    public void printBoard() {
        for (int i = 0; i < Rows; i++) {
            for (int j = 0; j < Columns; j++) {
                System.out.print(board[i][j] + " ");
            }
           // System.out.println();
        }
    }
}