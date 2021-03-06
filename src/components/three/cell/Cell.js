import * as THREE from 'three';
import gameManager from '../../managers/GameManager';
import boardManager from '../../managers/BoardManager';


class Cell {
  constructor() {
    this.cell = null;
    this.boardPosX=null;
    this.boardPosY=null;
    this.card=null;
  }

  get cell() {
    return this._cell;
  }

  set cell(value) {
    this._cell = value;
  }

  get card() {
    return this._card;
  }

  set card(value) {
    this._card = value;
  }

  get boardPosX() {
    return this._boardPosX;
  }

  set boardPosX(value) {
    this._boardPosX = value;
  }
  get boardPosY() {
    return this._boardPosY;
  }

  set boardPosY(value) {
    this._boardPosY = value;
  }

  selectCell() {
    if(gameManager.gameState === gameManager.GAME_STATES.PLAY) {
      if(gameManager.selectedCard && gameManager.selectedCard.played === false) {
        gameManager.selectedCard.played = true;
        gameManager.selectedCard.unselectCard();
        gameManager.selectedCard.playCard(this.cell.position.x, this.cell.position.y, 0.1);
        this.card = gameManager.selectedCard;
      //boardManager.deleteCard(this.card.id);
        gameManager.selectedCard = null;
        if (boardManager.CheckWinState()){
          gameManager.gameUI.setGameState("Has ganado")
        }
        else{gameManager.nextState();} 
      }
  }
}

  createCell(scene,owner, position, scale) {
    
    var material = new THREE.MeshBasicMaterial({ color:"rgb(220,220,220)" ,wireframe: true});

    var geometry  = new THREE.PlaneBufferGeometry(scale[0], scale[1], 1);
    var cell = new THREE.Mesh(geometry, material);
    cell.position.x = position[0];
    cell.position.y = position[1];
    cell.position.z = position[2];

    if(owner === "player"){
      cell.cursor = 'pointer';
      cell.on('click', () => {
        this.selectCell();
      });
    }

    scene.add(cell);
    this.cell = cell;
  }

  init(scene, owner,position, scale, boardPosX,boardPosY) {
    this.boardPosX=boardPosX;
    this.boardPosY=boardPosY;
    this.createCell(scene,owner, position, scale)
    
  }
}

export default Cell;
