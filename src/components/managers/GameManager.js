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
        card.init(sceneManager.scene, [0, 0, 0]);
        let card1 = new Card();
        card1.init(sceneManager.scene, [-3, 0, 0]);
        let card2 = new Card();
        card2.init(sceneManager.scene, [3, 0, 0]);
    }
  }
  
  const gameManager = new GameManager();
  
  export default gameManager;