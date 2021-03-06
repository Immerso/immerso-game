import React from "react";
import "./Menu.scss";
import { useHistory } from "react-router-dom";


const Menu = () => {
  const history = useHistory();

  return (

    <div className="menu w-100 d-flex justify-content-center">
      <button className="navbar-btn" type="button" onClick={() => history.push('/search')}>Search Game</button>
      <button className="navbar-btn center-btn" type="button" onClick={() => history.push('/scan')}>Scan</button>

    </div>
  );
};
export default Menu;
