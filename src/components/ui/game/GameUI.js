import React, {useEffect, useState} from "react";
import gameManager from "../../managers/GameManager";
import "./GameUI.scss";

const GameUI = () => {
    const [gameState, setGameState] = useState(gameManager.gameState);

    useEffect(() => {
        gameManager.gameUI = {
          setGameState: setGameState
        }
    }, []);

  return (
    <div className="game">
        <div className="state">
            {gameState}
        </div>
    </div>
  );
};
export default GameUI;