class DeckManager {
    constructor() {
      if (!DeckManager.instance) {
        this._data = [];
      }
      return DeckManager.instance;
    }
  }
  
  const deckManager = new DeckManager();
  
  export default deckManager;