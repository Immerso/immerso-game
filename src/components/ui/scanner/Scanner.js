import React from "react";
import "./Scanner.scss";
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";

const Scanner = () => {
  const history = useHistory();

  const handleScan = data => {
    if (data) {
      history.push({
        pathname: '/pack',
        state: { detail: data }
      });
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
    </div>
  );
};
export default Scanner;