import handManager from './HandManager';
import boardManager from './BoardManager';
import deckManager from './DeckManager';
import sceneManager from './SceneManager';
import Card from '../three/card/Card';

class GameManager {
    constructor() {
      if (!GameManager.instance) {
        this._data = [];
        this.boardManager = boardManager;
        this.handManager = handManager;
        this.deckManager = deckManager;
        this.sceneManager = sceneManager;
      }
      return GameManager.instance;
    }

    init() {
        let card = new Card();
        card.init(sceneManager.scene);
    }
  }
  
  const gameManager = new GameManager();
  
  export default gameManager;