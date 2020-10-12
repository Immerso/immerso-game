import * as THREE from 'three';
import gameManager from '../../managers/GameManager';
import handManager from '../../managers/HandManager';
import boardManager from '../../managers/BoardManager';
import Cell from '../cell/Cell';

class Card {
  constructor() {
    this.card = null;
    this.type = null;
    this.loaded = false;
    this.selected = false;
    this.zoomed = false;
    this.played = false;
    this.lastPos = { x: 0,  y: 0};
    this.id = null;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get lastPos() {
    return this._lastPos;
  }

  set lastPos(value) {
    this._lastPos = value;
  }

  get played() {
    return this._played;
  }

  set played(value) {
    this._played = value;
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

  get loaded() {
    return this._loaded;
  }

  set loaded(value) {
    this._loaded = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  selectCard() {
    if(gameManager.selectedCard) gameManager.selectedCard.unselectCard();
    this.selected = true;
    this.card.position.y += 0.15;
    gameManager.selectedCard = this;
  }

  unselectCard() {
    this.selected = false;
    this.card.position.y -= 0.15;
    if(this.zoomed === true) this.zoomOut();
  }

  zoomIn() {
    this.zoomed = true;
    this.card.scale.x *= 2;
    this.card.scale.y *= 2;
    this.card.position.z += 1;
    this.lastPos = {x: this.card.position.x, y: this.card.position.y};
    this.card.position.y = 0;
    this.card.position.x = 0;
  }

  zoomOut() {
    this.zoomed = false;
    this.card.scale.x /= 2;
    this.card.scale.y /= 2;
    this.card.position.z -= 1;
    this.card.position.y = this.lastPos.y;
    this.card.position.x = this.lastPos.x;
  }

  playCard(x, y, z) {
    handManager.hand = handManager.hand.filter(card => {
      return card.id !== this.id
    });

    this.card.position.x = x;
    this.card.position.y = y;
    this.card.position.z = z;
  }

  createCard(scene, owner, texture, position, scale) {
    var material = new THREE.MeshBasicMaterial({ map: texture });

    var geometry = new THREE.PlaneBufferGeometry(scale[0], scale[1], 1);
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

  init(scene, owner, position, scale, id, type = "experience", img) {
    this.id = id;
    this.type = type;

    var loader = new THREE.TextureLoader();
    loader.load(
      img,

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
