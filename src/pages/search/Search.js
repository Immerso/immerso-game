import React, {useEffect, useState} from "react";
import "./Search.scss";
import {GameAPI} from "../../api/Game";
import App from "../../App";
import {useHistory} from "react-router-dom";
<<<<<<< HEAD
import { Color } from "three";
=======
import Game from "../game/Game";
import gameManager from "../../components/managers/GameManager";
>>>>>>> 4c8c8e28d01076afd5098b0893ab90351cdb4931

const Search = () => {
  let [foundMatch, setFoundMatch] = useState(false);
  let [opponent, setOpponent] = useState();
  let api = new GameAPI();
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    if(user === null){
      window.location.href = "/";
    }
    if(api.userId === undefined){
      api.gameCommunicationConnect(
        () => {
          console.log("WS Connection established...");
        },
        (message) => {
          let parsed = JSON.parse(message.data);
          console.log(parsed);

          if(parsed.opponent !== "Not found"){
            clearInterval(api.interval);
            console.log("found game");
            setOpponent(parsed.opponent);
            setFoundMatch(true);
            localStorage.setItem("game",JSON.stringify(parsed))
            gameManager.gameAPI = api;
          }
        },
        (error) => {
          console.error(error);
        }, user.data.id);

    }
  }, ["foundMatch"]);

  return (
    <div className="search">
      <p style={{top: '0', position: 'absolute',aling: 'center'}} > Esperando otro jugador...</p>
      {
        foundMatch ? <Game/> : <div/>
      }
    </div>
  );
};
export default Search;
