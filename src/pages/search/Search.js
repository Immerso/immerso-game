import React, {useEffect, useState} from "react";
import "./Search.scss";
import {GameAPI} from "../../api/Game";
import App from "../../App";
import {useHistory} from "react-router-dom";

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
          }
        },
        (error) => {
          console.error(error);
        }, user.data.id);

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
