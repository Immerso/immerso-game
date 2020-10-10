import React, { Component } from 'react';
import sceneManager from '../managers/SceneManager';

class InteractiveScene extends Component {
  componentDidMount() {
    sceneManager.initScene(this.mount);
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
export default InteractiveScene;
