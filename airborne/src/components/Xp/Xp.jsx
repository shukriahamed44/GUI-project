import React, { useState } from "react";
import './Xp.css';

function Xp(){
    return(
        <div style={{display: "flex", flexDirection: "row", width: "100%", paddingBottom: "50px" ,margin:'0', zIndex: "1", backgroundColor: "#1A1A1A", paddingTop: '50px'}}>
            <div style={{width: "60%",
                    display: "flex", 
                    flexDirection: "column", 
                    }} >
                <h1 style={{fontSize: "5rem", paddingBottom: "0px"}} className="xptext">Experience aviation</h1>
                <h1 style={{fontSize: "5rem", paddingTop : "0px"}} className="xptext">like never before</h1>
                <div className="xpsnippet">
                    <h1 style={{fontSize: "3rem", margin: "10px"}}>Hassle free waiting times</h1>
                    <h1 style={{fontSize: "2rem", margin: "5px", color: "#999999", marginBottom: "17px"}}>Hassle free waiting times hello there
sample text lorem ipsum. Private terminals and 
dedicated terminals just for you</h1>
                </div>

                <div className="xpsnippet">
                    <h1 style={{fontSize: "3rem", margin: "10px"}}>Hassle free waiting times</h1>
                    <h1 style={{fontSize: "2rem", margin: "5px", color: "#999999", marginBottom: "17px"}}>Hassle free waiting times hello there
sample text lorem ipsum. Private terminals and 
dedicated terminals just for you</h1>
                </div>

                <div className="xpsnippet">
                    <h1 style={{fontSize: "3rem", margin: "10px"}}>Hassle free waiting times</h1>
                    <h1 style={{fontSize: "2rem", margin: "5px", color: "#999999", marginBottom: "17px"}}>Hassle free waiting times hello there
sample text lorem ipsum. Private terminals and 
dedicated terminals just for you</h1>
                </div>
            </div>

            <div style={{width: "auto", }}>
            {/* <img
            src="/src/images/aerial.png" // Updated to include the correct Vite-compatible path.
            alt="Airborne logo"
            style={{ width: "80%", height: "auto", margin: "15px 5px auto auto" }}
          />  */}
          <ImageHover />
                
            </div>
        </div>
    )
}

export default Xp;



function ImageHover() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        margin: "15px 5px auto auto",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Image */}
      <img
        src="/src/images/aerial.png"
        alt="Aerial image deafult"
        style={{
          width: "500px",
          height: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity 0.3s ease",
          opacity: isHovered ? 0 : 1,
        }}
      />
      {/* Hover Image */}
      <img
        src="/src/images/aerial_in.png"
        alt="sareial 2r"
        style={{
          width: "500px",
          height: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity 0.3s ease",
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}

