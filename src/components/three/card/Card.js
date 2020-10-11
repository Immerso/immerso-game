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
    var loader = new THREE.TextureLoader();
    loader.load(
      "card.jpeg",
      
      function (texture) {
        var material = new THREE.MeshBasicMaterial({ map: texture });
      
      var geometry = new THREE.PlaneBufferGeometry(3, 4.8, 32);
      var plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      },
      
      undefined,

      function ( err ) {
        console.error( 'An error happened.' );
      }
    );
  }
}

export default Card;