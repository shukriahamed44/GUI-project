import React, { useState } from "react";
import './Xp.css';

function Xp(){
    return(
        <div style={{display: "flex", flexDirection: "row", width: "100%", marginTop: "100px"}}>
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

            <div style={{width: "auto"}}>
                <img></img> 
                /* add flight in and outimage*/
            </div>
        </div>
    )
}

export default Xp;