import * as THREE from 'three';
import gameManager from '../../managers/GameManager';


class Cell {
  constructor() {
    this.cell = null;
    this.boardPosX=null;
    this.boardPosY=null;
  }

  get cell() {
    return this._cell;
  }

  set cell(value) {
    this._cell = value;
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
    if(gameManager.selectedCard) {
      gameManager.selectedCard.unselectCard();
      gameManager.selectedCard.playCard(this.cell.position.x, this.cell.position.y, 0.1);
      gameManager.selectedCard = null;
    }
  }

  createCell(scene, position, scale) {
    
    var material = new THREE.MeshBasicMaterial({ color:"rgb(220,220,220)" ,wireframe: true});

    var geometry  = new THREE.PlaneBufferGeometry(scale[0], scale[1], 1);
    var cell = new THREE.Mesh(geometry, material);
    cell.position.x = position[0];
    cell.position.y = position[1];
    cell.position.z = position[2];

    cell.cursor = 'pointer';
    cell.on('click', () => {
      this.selectCell();
    });

    scene.add(cell);
    this.cell = cell;
  }

  init(scene, position, scale, boardPosX,boardPosY) {
    this.boardPosX=boardPosX;
    this.boardPosY=boardPosY;
    this.createCell(scene, position, scale)
    
  }
}

export default Cell;