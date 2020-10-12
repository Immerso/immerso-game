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

  get board() {
    return this._board;
  }

  set board(value) {
    this._board = value;
  }

  deleteCard(id){
    for (let i = 0; i < this.board.length; i++) {
      if(this.board[i].card!=null){
        let cardId = this.board[i].card.id;
        if(cardId===id){
          sceneManager.scene.remove(this.board[i].card.card);
          this.board[i].card=null;
        }
      }  
    }
  }

  CheckWinState(){
    let won=true;
    for (let i = 0; i < this.board.length; i++) {
      won &= this.board[i].card!=null
    }
    return won;
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