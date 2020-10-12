import sceneManager from './SceneManager';
import Cell from '../three/cell/Cell';


class BoardManager {
  constructor() {
    if (!BoardManager.instance) {
      this._data = [];
      this.playerCells=[];
      this.enemyCells=[];
    }
    return BoardManager.instance;
  }

  get playerCells() {
    return this._playerCells;
  }

  set playerCells(value) {
    this._playerCells = value;
  }

  get enemyCells() {
    return this._enemyCells;
  }

  set enemyCells(value) {
    this._enemyCells = value;
  }

  deleteCard(id, owner){
    if(owner === "player") {
      for (let i = 0; i < this.playerCells.length; i++) {
        if(this.playerCells[i].card!=null){
          let cardId = this.playerCells[i].card.id;
          if(cardId===id){
            sceneManager.scene.remove(this.playerCells[i].card.card);
            this.playerCells[i].card=null;
          }
        }  
      }
    }
    else if(owner === "enemy") {
      for (let i = 0; i < this.enemyCells.length; i++) {
        if(this.enemyCells[i].card!=null){
          let cardId = this.enemyCells[i].card.id;
          if(cardId===id){
            sceneManager.scene.remove(this.enemyCells[i].card.card);
            this.enemyCells[i].card=null;
          }
        }  
      }
    }
  }

  CheckWinState(){
    for (let i = 0; i < this.playerCells.length; i++) {
      if( this.playerCells[i].card === null) return false;
    }
    return true;
  }

  createBoard(){
    const pos= 5;
    const offsetX=-2.2;
    const offsetY=1.2;
    const stepX=1.1;
    const stepY=1.6;


    for (let x = 0; x < pos; x++) {
      let cell = new Cell();
      cell.init(sceneManager.scene, "player", [offsetX+stepX*x, offsetY-stepY, 0], [1,1.5],x, 0);
      this.playerCells.push(cell);
    }

    for (let x = 0; x < pos; x++) {
      let cell = new Cell();
      cell.init(sceneManager.scene, "enemy", [offsetX+stepX*x, offsetY, 0], [1,1.5],x, 1);
      this.enemyCells.push(cell);
    }
      
  }
}


const boardManager = new BoardManager();

export default boardManager;