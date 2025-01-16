import React, { useState } from "react";
import './Destinations.css';
import Cta from '../Cta/Cta';


function Destinations(){
  return(
    <div style={{width: "100%"}}>

    <div className = "dest" style={{display: "flex", flexDirection:"row", height: "800px"}} >
      <div style={{display: "flex", flexDirection: "column", margin: "0", justifyContent:"left", alignContent: "flex-start", alignItems: "flex-start"}}>
        <h1 style={{fontSize: "5rem", marginLeft: "0px", marginBottom: "0", paddingLeft: "120px"}}>
          Featured Gateways
        </h1>
        <Imgcarousal />
      </div>
      <div>Helloo kjD</div>

    </div>


    <div className="membership" style={{display: "flex", flexDirection: "row", height: "575px"}}>
      <div style={{width: "50%"}}>
      <h1 style={{fontSize: "4rem", marginLeft: "0px", marginBottom: "0", paddingLeft: "120px"}}>Perks of being a</h1>
      <h1 className="membertext" style={{fontSize: "10rem", margin: "0 0 0 0", marginBottom: "0", paddingLeft: "120px", paddingBottom: "0px"}}>Member</h1>

      <div style={{paddingLeft: "120px", margin: "0px", paddingTop: "0px"}}>
        <Cta text = "Login to become a member"/>
      </div>
      
    </div>
    <div style={{width: "60%",display: "flex", flexDirection: "column", }} >
                <div className="snippet">
                    <h1 style={{fontSize: "3rem", margin: "10px"}}>Hassle free waiting times</h1>
                    <h1 style={{fontSize: "2rem", margin: "5px", color: "#808080", marginBottom: "17px"}}>Hassle free waiting times hello there
sample text lorem ipsum. Private terminals and 
dedicated terminals just for you</h1>
                </div>

                <div className="snippet">
                    <h1 style={{fontSize: "3rem", margin: "10px"}}>Hassle free waiting times</h1>
                    <h1 style={{fontSize: "2rem", margin: "5px", color: "#808080", marginBottom: "17px"}}>Hassle free waiting times hello there
sample text lorem ipsum. Private terminals and 
dedicated terminals just for you</h1>
                </div>

                
            </div>

    </div>

    </div>
  );

}



function Imgcarousal(){

    const images = [
        { src: "/src/images/dest_01.png", alt: "PF" },
        { src: "/src/images/dest_02.png", alt: "IBZ" },
        { src: "/src/images/dest_03.png", alt: "LK" },
        { src: "/src/images/dest_04.png", alt: "PRS" },
        { src: "/src/images/dest_05.png", alt: "MD" },
        
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

    return(
        <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrev} aria-label="Previous Image">
          &#8249;
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image"
        />
        <button className="carousel-button next" onClick={handleNext} aria-label="Next Image">
          &#8250;
        </button>
      </div>
    );


    
}



export default Destinations;
