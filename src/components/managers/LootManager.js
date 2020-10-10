class LootManager {
    constructor() {
      if (!LootManager.instance) {
        this._data = [];
      }
      return LootManager.instance;
    }
  }

  const lootManager = new LootManager();
  
  export default lootManager;