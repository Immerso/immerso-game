import Card from "../three/card/Card";
import Deck from "../three/deck/Deck";
import gameManager from "./GameManager";
import handManager from "./HandManager";
import sceneManager from "./SceneManager";

class DeckManager {
    constructor() {
      if (!DeckManager.instance) {
        this._data = [];
        this.next_card_index = 0;
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
      //this.cards = ["","",""];
    }

    grabCard() {
      if(gameManager.gameState === gameManager.GAME_STATES.TAKE) {
        let card = new Card();
        card.init(sceneManager.scene, "player", [(handManager.hand.length - handManager.hand.length / 2) * 1, handManager.playerHandYPosition, 0], [1,1.5], this.cards[this.next_card_index].id,this.cards[this.next_card_index].label, this.cards[this.next_card_index].img);
        handManager.hand.push(card);
        handManager.reorderHand();
        gameManager.nextState();
        this.next_card_index++;
      }
    }

  }

  const deckManager = new DeckManager();

  export default deckManager;
