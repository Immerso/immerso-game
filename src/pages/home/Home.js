import React from "react";
import "./Home.scss";
const Home = () => {
    return (
      
      <div className="home">
        <h1> Nombre del juego </h1>
        <div className="buttons d-flex align-items-center flex-column">
        <button  className="navbar-btn" type="button" onClick= {()=>window.location.href="/search"} >Buscar </button>
        </div>
      </div>
    );
  };

  export default Home;
