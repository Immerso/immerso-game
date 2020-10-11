import handManager from './HandManager';
import boardManager from './BoardManager';
import deckManager from './DeckManager';
import sceneManager from './SceneManager';

class GameManager {
    constructor() {
      if (!GameManager.instance) {
        this._data = [];
        this.initiated = false;
        this.boardManager = boardManager;
        this.handManager = handManager;
        this.deckManager = deckManager;
        this.sceneManager = sceneManager;
        this.selectedCard = null;
        this.gameState = "p1-start";
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

    hide() {
      handManager.hand.forEach(element => {
        if(element.card) element.card.visible = false;
      });

      handManager.enemyHand.forEach(element => {
        if(element.card) element.card.visible = false;
      });

      boardManager.cells.forEach(element => {
        if(element.cell) element.cell.visible = false;
      });

      if(deckManager.deck.deck) deckManager.deck.deck.visible = false;

    }

    show() {
      if(!this.initiated) {
        this.init();
      }
      else {
        handManager.hand.forEach(element => {
          if(element.card) element.card.visible = true;
        });
  
        handManager.enemyHand.forEach(element => {
          if(element.card) element.card.visible = true;
        });

        boardManager.cells.forEach(element => {
          if(element.cell) element.cell.visible = true;
        });
  
        if(deckManager.deck.deck) deckManager.deck.deck.visible = true;
      }
    }

    init() {
        handManager.init(["1","2","3"],["1","2","3"]);
        deckManager.init();
        this.gameState = "p1-start";
        boardManager.createBoard();
    }
  }
  
  const gameManager = new GameManager();
  
  export default gameManager;