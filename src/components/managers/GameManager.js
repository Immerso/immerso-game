import handManager from './HandManager';
import boardManager from './BoardManager';
import deckManager from './DeckManager';
import sceneManager from './SceneManager';

class GameManager {
    constructor() {
      if (!GameManager.instance) {
        this._data = [];
        this.boardManager = boardManager;
        this.handManager = handManager;
        this.deckManager = deckManager;
        this.sceneManager = sceneManager;
        this.selectedCard = null;
        this.gameState = "none";
      }
      return GameManager.instance;
    }

    get selectedCard() {
      return this._selectedCard;
    }

    set selectedCard(value) {
      this._selectedCard = value;
    }

    get gameState() {
      return this._gameState;
    }

    set gameState(value) {
      this._gameState = value;
    }

    init() {
        handManager.init(["1","2","3"],["1","2","3"]);
        deckManager.init();
        this.gameState = "player turn: grab a card";
    }
  }
  
  const gameManager = new GameManager();
  
  export default gameManager;