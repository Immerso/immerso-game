import React from "react";
import "./Home.scss";
const Home = () => {
    return (
      
      <div className="home">
        <h1> Nombre del juego </h1>
        <div className="buttons">
        <button  className="navbar-btn" type="button" >Iniciar partida como jugador 1</button>
        <button  className="navbar-btn center-btn" type="button" >Iniciar partida como jugador 2</button>
        </div>
      </div>
    );
  };

  export default Home;
