class BoardManager {
  constructor() {
    if (!BoardManager.instance) {
      this._data = [];
    }
    return BoardManager.instance;
  }
}

const boardManager = new BoardManager();

export default boardManager;