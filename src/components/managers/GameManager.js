import handManager from './HandManager';
import boardManager from './BoardManager';
import deckManager from './DeckManager';
import sceneManager from './SceneManager';
import PowerSpace from '../three/powerSpace/PowerSpace';

class GameManager {
    constructor() {
      if (!GameManager.instance) {
        this._data = [];
        this.GAME_STATES = {
          TAKE: "Take a card",
          PLAY: "Play a card",
          NEXT: "Opponent turn"
        };
        this.initiated = false;
        this.boardManager = boardManager;
        this.handManager = handManager;
        this.deckManager = deckManager;
        this.sceneManager = sceneManager;
        this.selectedCard = null;
        this.gameState = this.GAME_STATES.TAKE;
        this.gameUI = null;
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

    get gameUI() {
      return this._gameUI;
    }

    set gameUI(value) {
      this._gameUI = value;
    }

    hide() {
      handManager.hand.forEach(element => {
        if(element.card) element.card.visible = false;
      });

      handManager.enemyHand.forEach(element => {
        if(element.card) element.card.visible = false;
      });

      boardManager.playerCells.forEach(element => {
        if(element.cell) element.cell.visible = false;
      });

      boardManager.enemyCells.forEach(element => {
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

        boardManager.playerCells.forEach(element => {
          if(element.cell) element.cell.visible = true;
        });

        boardManager.enemyCells.forEach(element => {
          if(element.cell) element.cell.visible = true;
        });
  
        if(deckManager.deck.deck) deckManager.deck.deck.visible = true;
      }
    }

    init() {
        handManager.init(["1","2","3"],["1","2","3"]);
        deckManager.init();
        this.gameState = this.GAME_STATES.TAKE;
        boardManager.createBoard();
        console.log(boardManager.playerCells)

        const powerSpace = new PowerSpace();
        powerSpace.init(sceneManager.scene);
    }

    nextState() {
      switch(this.gameState){
        case this.GAME_STATES.TAKE:
          this.gameState = this.GAME_STATES.PLAY;
          break;
        case this.GAME_STATES.PLAY:
          this.gameState = this.GAME_STATES.TAKE;
          break;
        case this.GAME_STATES.NEXT:
          this.gameState = this.GAME_STATES.TAKE;
          break;
        default:
          break;
      }
      this.gameUI.setGameState(this.gameState);
    }
  }
  
  const gameManager = new GameManager();
  
  export default gameManager;