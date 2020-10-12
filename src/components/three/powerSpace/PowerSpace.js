import * as THREE from 'three';
import gameManager from '../../managers/GameManager';

class PowerSpace {
  constructor() {
    this.powerSpace = null;
  }
  
  get powerSpace() {
    return this._powerSpace;
  }

  set powerSpace(value) {
    this._powerSpace = value;
  }

  playPower() {
    if(gameManager.gameState === gameManager.GAME_STATES.PLAY) {
      if(gameManager.selectedCard && gameManager.selectedCard.type === "power") {
        gameManager.selectedCard.played = true;
        gameManager.selectedCard.unselectCard();
        gameManager.selectedCard.playCard(this.powerSpace.position.x, this.powerSpace.position.y, 0.1);
        gameManager.selectedCard = null;
        gameManager.nextState();
      }
    }
  }

  createPowerSpace(scene) {
    
    var material = new THREE.MeshBasicMaterial({ color:"rgb(220,220,220)" ,wireframe: true});

    var geometry  = new THREE.PlaneBufferGeometry(1.2, 1.7, 1);
    var powerSpace = new THREE.Mesh(geometry, material);
    powerSpace.position.x = 4;
    powerSpace.position.y = 0.3;
    powerSpace.position.z = 0;
    
    powerSpace.cursor = 'pointer';
    powerSpace.on('click', () => {
      this.playPower();
    });

    scene.add(powerSpace);
    this.powerSpace = powerSpace;
    gameManager.playerPowerSpace = this;
  }

  init(scene) {
    this.createPowerSpace(scene)
    
  }
}

export default PowerSpace;