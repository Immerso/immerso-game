class HandManager {
    constructor() {
      if (!HandManager.instance) {
        this._data = [];
      }
      return HandManager.instance;
    }
  }
  
  const handManager = new HandManager();
  
  export default handManager;