import React, {useEffect, useState} from "react";
import "./Search.scss";
import {GameAPI} from "../../api/Game";

const Search = () => {
  let [foundMatch, setFoundMatch] = useState(false);
  let [opponent, setOpponent] = useState();
  let api = new GameAPI();

  useEffect(() => {
    if(api.userId === undefined){
      let isPlayer1 = window.confirm("¿Eres jugador 1?");
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
          }
        },
        (error) => {
          console.error(error);
        },
        isPlayer1 ? 1 : 2);

    }
  }, ["foundMatch"]);

  return (
    <div className="search">
      {
        foundMatch ? <div dangerouslySetInnerHTML={{__html: "Opponent found " + opponent.name}} /> : <div className="loader"/>
      }
    </div>
  );
};
export default Search;
