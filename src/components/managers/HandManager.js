import Card from '../three/card/Card';
import sceneManager from './SceneManager';

class HandManager {
    constructor() {
      if (!HandManager.instance) {
        this._data = [];
        this.hand = [];
        this.enemyHand = [];
        this.playerHandYPosition = -2.3;
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

    reorderHand() {
      this.hand.forEach((element, index) => {
        if(element.card) element.card.position.x = (index + 0.5 - this.hand.length / 2);
      });
    }

    init(hand, enemyHand) {
      const enemyHandYPosition = 3;
      const cardXDistance = 1;

      //this.hand = hand;
      //this.enemyHand = enemyHand;

      enemyHand.forEach((element, index) => {
        let card = new Card();
        card.init(sceneManager.scene, "enemy", [(index + 0.5 - enemyHand.length / 2) * cardXDistance, enemyHandYPosition, 0], [1,1.5], index);
        this.enemyHand.push(card);
      });

      hand.forEach((element, index) => {
        let card = new Card();
        card.init(sceneManager.scene, "player", [(index + 0.5 - hand.length / 2) * cardXDistance, this.playerHandYPosition, 0], [1,1.5], index);
        this.hand.push(card);
      });
    }
  }
  
  const handManager = new HandManager();
  
  export default handManager;