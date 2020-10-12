import * as THREE from 'three';
import deckManager from '../../managers/DeckManager';

class Deck {
  constructor() {
    this.deck = null;
  }
  
  get deck() {
    return this._deck;
  }

  set deck(value) {
    this._deck = value;
  }

  createDeck(scene, texture) {
    var material = new THREE.MeshBasicMaterial({ map: texture });
      
    var geometry = new THREE.PlaneBufferGeometry(1, 1.5, 1);
    var deck = new THREE.Mesh(geometry, material);
    deck.position.x = 5;
    deck.position.y = -2.3;
    deck.position.z = 0;

    deck.cursor = 'pointer';
    deck.on('click', () => deckManager.grabCard());

    scene.add(deck);
    this.deck = deck;
  }

  init(scene) {
    var loader = new THREE.TextureLoader();
    loader.load(
      "carta-detras.png",
      
      (texture) => this.createDeck(scene, texture)
      ,
      
      undefined,

      function ( err ) {
        console.error( 'An error happened.' );
      }
    );
  }
}

export default Deck;