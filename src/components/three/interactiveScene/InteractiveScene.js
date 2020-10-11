import React, { Component } from 'react';
import gameManager from '../../managers/GameManager';
import sceneManager from '../../managers/SceneManager';
import "./InteractiveScene.scss"

class InteractiveScene extends Component {
  componentDidMount() {
    sceneManager.init(this.mount);
  }

  render() {
    return <div className="interactive-scene" ref={(ref) => (this.mount = ref)} />;
  }
}
export default InteractiveScene;
