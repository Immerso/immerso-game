import React, {useEffect} from "react";
import "./Pack.scss";
import {GameAPI} from "../../api/Game";

const Pack = () => {

  useEffect(() => {
    let api = new GameAPI();
    api.openPack(window.location.search.replace("?", ""))
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <div className="pack">
    </div>
  );
};
export default Pack;
