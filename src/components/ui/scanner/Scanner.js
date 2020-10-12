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
        search: data
      });
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="scanner w-100 d-flex justify-content-center">
      <div className="w-50">
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
      </div>
    </div>
  );
};
export default Scanner;
