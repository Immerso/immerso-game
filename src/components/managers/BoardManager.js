import sceneManager from './SceneManager';
import Cell from '../three/cell/Cell';


class BoardManager {
  constructor() {
    if (!BoardManager.instance) {
      this._data = [];
      this.cells=[];
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
    const rows= 2;
    const column= 5;
    const offsetX=-2.2;
    const offsetY=1.2;
    const stepX=1.1;
    const stepY=1.6;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < column; x++) {
        let cell = new Cell();
        cell.init(sceneManager.scene, [offsetX+stepX*x, offsetY-stepY*y, 0], [1,1.5],x,y);
        this.cells.push(cell);
      }
      
    }
  }
}


const boardManager = new BoardManager();

export default boardManager;