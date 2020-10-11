import * as THREE from 'three';

class Card {
  constructor() {
    this.card = null;
  }

  get card() {
    return this._card;
  }

  set card(value) {
    this._card = value;
  }

  init(scene) {
    var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    var card = new THREE.Mesh( geometry, material );
    scene.add( card );
    this.card = card;
  }
}

export default Card;