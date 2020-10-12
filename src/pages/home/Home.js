import React from "react";
import "./Home.scss";
const Home = () => {
    return (
      
      <div className="home">
        <div className="box">
        <h1> Tourist Challenger </h1>
        <div className="buttons d-flex align-items-center flex-column">
        <button  className="navbar-btn" type="button" onClick= {()=>window.location.href="/search"} >Buscar </button>
        </div>
        </div>
      </div>
    );
  };

  export default Home;
