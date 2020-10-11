import React, {useEffect, useState} from "react";
import gameManager from "../../managers/GameManager";
import "./GameUI.scss";

const GameUI = () => {
    const [gameState, setGameState] = useState("");

    useEffect(() => {
        setGameState(gameManager.gameState);
    }, [gameManager.gameState]);

  return (
    <div className="game">
        <div className="state">
            {gameState}
        </div>
    </div>
  );
};
export default GameUI;