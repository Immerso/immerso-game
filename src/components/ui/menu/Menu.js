import React from "react";
import "./Menu.scss";
import { useHistory } from "react-router-dom";


const Menu = () => {
  const history = useHistory();

  return (
    
    <div className="menu w-100 d-flex justify-content-center">
      <button className="navbar-btn" type="button" onClick={() => history.push('/')}>Play</button>
      <button className="navbar-btn center-btn" type="button" onClick={() => history.push('/scan')}>Scan</button>
      <button className="navbar-btn" type="button" onClick={() => history.push('/options')}>Options</button>
    </div>
  );
};
export default Menu;
