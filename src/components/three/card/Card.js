import * as THREE from 'three';
import gameManager from '../../managers/GameManager';

class Card {
  constructor() {
    this.card = null;
    this.loaded = false;
    this.selected = false;
    this.zoomed = false;
  }

  get card() {
    return this._card;
  }

  set card(value) {
    this._card = value;
  }

  get selected() {
    return this._selected;
  }

  set selected(value) {
    this._selected = value;
  }

  get zoomed() {
    return this._zoomed;
  }

  set zoomed(value) {
    this._zoomed = value;
  }

  selectCard() {
    if(gameManager.selectedCard) gameManager.selectedCard.unselectCard();
    this.selected = true;
    gameManager.selectedCard = this;
  }

  unselectCard() {
    this.selected = false;
    if(this.zoomed === true) this.zoomOut();
  }

  zoomIn() {
    this.zoomed = true;
    this.card.scale.x *= 2;
    this.card.scale.y *= 2;
    this.card.position.z += 1;
    this.card.position.y += 1.5;
  }

  zoomOut() {
    this.zoomed = false;
    this.card.scale.x /= 2;
    this.card.scale.y /= 2;
    this.card.position.z -= 1;
    this.card.position.y -= 1.5;
  }

  createCard(scene, owner, texture, position, scale) {
    var material = new THREE.MeshBasicMaterial({ map: texture });
      
    var geometry = new THREE.PlaneBufferGeometry(scale[0], scale[1], 32);
    var card = new THREE.Mesh(geometry, material);
    card.position.x = position[0];
    card.position.y = position[1];
    card.position.z = position[2];

    if(owner === "player"){
      card.cursor = 'pointer';
      card.on('click', () => {
        if(this.selected === false) this.selectCard();
        else{
          if(this.zoomed === false) {
            this.zoomIn();
          }
          else {
            this.zoomOut();
          }
        }
      });
    }

    scene.add(card);
    this.card = card;
    this.loaded = true;
  }

  init(scene, owner, position, scale) {
    var loader = new THREE.TextureLoader();
    loader.load(
      "card.jpeg",
      
      (texture) => this.createCard(scene, owner, texture, position, scale)
      ,
      
      undefined,

      function ( err ) {
        console.error( 'An error happened.' );
      }
    );
  }
}

export default Card;