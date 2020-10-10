import React, {useEffect, useState} from "react";
import lootManager from "../../managers/LootManager";
import "./Scanner.scss";
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";

const Scanner = () => {
  const [scannedString, setScannedString] = useState("");
  const history = useHistory();

  const handleScan = data => {
    if (data) {
      setScannedString(data);
      history.push('/pack');
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="scanner">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{scannedString}</p>
    </div>
  );
};
export default Scanner;