import Card from '../three/card/Card';
import sceneManager from './SceneManager';

class HandManager {
    constructor() {
      if (!HandManager.instance) {
        this._data = [];
        this.hand = [];
        this.enemyHand = [];
      }
      return HandManager.instance;
    }

    get hand() {
      return this._hand;
    }
  
    set hand(value) {
      this._hand = value;
    }

    get enemyHand() {
      return this._enemyHand;
    }
  
    set enemyHand(value) {
      this._enemyHand = value;
    }

    init(hand, enemyHand) {
      const playerHandYPosition = 3;
      const enemyHandYPosition = -2.3;
      const cardXDistance = 1;

      this.hand = hand;
      this.enemyHand = enemyHand;

      this.enemyHand.forEach((element, index) => {
        let card = new Card();
        card.init(sceneManager.scene, "enemy", [(index + 0.5 - enemyHand.length / 2) * cardXDistance, playerHandYPosition, 0], [1,1.5], index);
      });

      this.hand.forEach((element, index) => {
        let card = new Card();
        card.init(sceneManager.scene, "player", [(index + 0.5 - hand.length / 2) * cardXDistance, enemyHandYPosition, 0], [1,1.5], index);
      });
    }
  }
  
  const handManager = new HandManager();
  
  export default handManager;