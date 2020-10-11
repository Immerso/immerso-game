import React, {useEffect} from "react";
import gameManager from "../../components/managers/GameManager";
import GameUI from "../../components/ui/game/GameUI";
import "./Game.scss";

const Game = () => {
  useEffect(() => {
    gameManager.show();

    return function cleanup () {
      gameManager.hide();
    }
  },[]);

  return (
    <div className="game">
      <GameUI />
    </div>
  );
};
export default Game;