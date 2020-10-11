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

  init(scene, position) {
    var loader = new THREE.TextureLoader();
    loader.load(
      "card.jpeg",
      
      function (texture) {
        var material = new THREE.MeshBasicMaterial({ map: texture });
      
      var geometry = new THREE.PlaneBufferGeometry(3, 4.8, 32);
      var card = new THREE.Mesh(geometry, material);
      card.position.x = position[0];
      card.position.y = position[1];
      card.position.z = position[2];
      scene.add(card);

      // this.card = card;
      },
      
      undefined,

      function ( err ) {
        console.error( 'An error happened.' );
      }
    );
  }
}

export default Card;