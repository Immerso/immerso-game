import * as THREE from 'three';

class SceneManager {
  constructor() {
    if (!SceneManager.instance) {
      this._data = [];
      this.scene = null;
      this.camera = null;
    }
    return SceneManager.instance;
  }

  get scene() {
    return this._scene;
  }

  set scene(value) {
    this._scene = value;
  }

  get camera() {
    return this._camera;
  }

  set camera(value) {
    this._camera = value;
  }

  init(mount) {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);
    let loader = new THREE.TextureLoader();

    // Responsiveness
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    // Set Managers Info
    this.scene = scene;
    this.camera = camera;

    // Start Simulation
    const cameraDistance = 5;

    camera.position.z = cameraDistance;
    let animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
}

const sceneManager = new SceneManager();

export default sceneManager;