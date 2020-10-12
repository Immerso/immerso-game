import React, {useEffect, useState} from "react";
import "./Search.scss";
import {GameAPI} from "../../api/Game";
import App from "../../App";
import {useHistory} from "react-router-dom";
import Game from "../game/Game";
import gameManager from "../../components/managers/GameManager";

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

  const removeLoader=()=>{
    document.getElementById("mytext").style.display = "none";

  }

  return (
    <div className="search" id="mytext">
      <p style={{top: '0', position: 'absolute',aling: 'center'}} > Esperando otro jugador...</p>
      {
        foundMatch ? ( removeLoader(), <Game/>)  : <div className = "loader"  />
      }
    </div>
  );
};
export default Search;
