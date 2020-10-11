import * as THREE from 'three';

class Card {
  constructor() {
    this.card = null;
    this.loaded = false;
  }

  get card() {
    return this._card;
  }

  set card(value) {
    this._card = value;
  }

  createCard(scene, texture, position) {
    var material = new THREE.MeshBasicMaterial({ map: texture });
      
    var geometry = new THREE.PlaneBufferGeometry(3, 4.8, 32);
    var card = new THREE.Mesh(geometry, material);
    card.position.x = position[0];
    card.position.y = position[1];
    card.position.z = position[2];
    scene.add(card);
    this.card = card;
    this.loaded = true;
  }

  init(scene, position) {
    var loader = new THREE.TextureLoader();
    loader.load(
      "card.jpeg",
      
      (texture) => this.createCard(scene, texture, position)
      ,
      
      undefined,

      function ( err ) {
        console.error( 'An error happened.' );
      }
    );
  }
}

export default Card;