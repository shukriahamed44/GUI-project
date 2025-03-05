import React from 'react';
import './Cta.css';
import { useNavigate } from 'react-router-dom';

function Cta({text}) {
    return (
      <button className="cTA-button" style={{ marginTop: "50px", padding: "0px 20px 0px 20px", fontSize: "1.5rem" }}>
        <p style={{ padding: "0px 20px", fontFamily: "CreatoDisplay" }}>
            {text}
        </p>
      </button>
    )
  
  }

export default Cta;



