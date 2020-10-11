import Card from "../three/card/Card";
import Deck from "../three/deck/Deck";
import handManager from "./HandManager";
import sceneManager from "./SceneManager";

class DeckManager {
    constructor() {
      if (!DeckManager.instance) {
        this._data = [];
        this.cards = null;
        this.deck = null;
      }
      return DeckManager.instance;
    }

    get cards() {
      return this._cards;
    }
  
    set cards(value) {
      this._cards = value;
    }

    get deck() {
      return this._deck;
    }
  
    set deck(value) {
      this._deck = value;
    }

    init() {
      const deck = new Deck();
      deck.init(sceneManager.scene);
      this.deck = deck;
      this.cards = ["","",""];
    }

    grabCard() {
      let cardId = this.cards.pop();
      let card = new Card();
      card.init(sceneManager.scene, "player", [(handManager.hand.length - handManager.hand.length / 2) * 1, handManager.playerHandYPosition, 0], [1,1.5], handManager.hand.length);
      handManager.hand.push(card);
      handManager.reorderHand();
    }

  }
  
  const deckManager = new DeckManager();
  
  export default deckManager;