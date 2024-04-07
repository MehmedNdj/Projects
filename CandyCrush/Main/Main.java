public class Main {
    public static void main(String[] args){
        GameBoard model = new GameBoard();
        GameView view = new GameView();
        GameController controller = new GameController(model, view);

        view.SetController(controller);
        view.initUI();
    }
}
