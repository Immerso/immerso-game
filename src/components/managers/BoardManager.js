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

  get cells() {
    return this._cells;
  }

  set cells(value) {
    this._cells = value;
  }

  createBoard(){
    const positions= 5;
    const offsetX=-2.2;
    const offsetY=1.2;
    const stepX=1.1;
    const stepY=1.6;


    for (let x = 0; x < positions; x++) {
      let cell = new Cell();
      cell.init(sceneManager.scene, [offsetX+stepX*x, offsetY, 0], [1,1.5],x,0);
      this.playerCells.push(cell);
    }

    for (let x = 0; x < positions; x++) {
      let cell = new Cell();
      cell.init(sceneManager.scene, [offsetX+stepX*x, offsetY-stepY, 0], [1,1.5],x,1);
      this.enemyCells.push(cell);
    }
      
    
  }
}


const boardManager = new BoardManager();

export default boardManager;