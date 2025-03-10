import React, { useState } from "react";
import './Destinations.css';
import Cta from '../Cta/Cta';
import Mmb from '../Mmb';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaSmile, FaClock, FaTag } from 'react-icons/fa';


// Reusable styles for cleaner code
const blockStyle = {
  border: '1px solid #e0e0e0', 
  borderRadius: '10px',
  padding: '2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s'
};

const titleStyle = {
  fontSize: '2.5rem', 
  color: '#85b2db',
  marginBottom: '1.5rem'
};

const contentStyle = {
  display: 'flex', 
  alignItems: 'center'
};

const iconStyle = {
  marginRight: '1rem'
};

const textStyle = {
  margin: 0, 
  fontSize: '1rem', 
  color: '#818181',
  lineHeight: '1.5'
};


function Destinations(){
  return(
    <div style={{width: "100%", backgroundColor: "#1b1b1b", margin: '0'}}>
      <div className="dest" style={{display: "flex", flexDirection:"row", height: "100vh"}} >
        <div className="dest_left">
          <h1 style ={{paddingLeft: "100px", fontSize: "3rem", borderTop: "2px solid #818181", paddingTop: "12px", marginRight:"150px"}} >
            Featured Gateways
          </h1>
          <Imgcarousal/>
        </div>

        <div className = "dest_right">
          {/* <div class= "dest_right_text" style={{ fontSize: "5rem", alignItems: "flex-start", width:"50%"}}>
            <div style = {{width: "150px", borderTop: "1px solid #818181", display: "flex", flexDirection: "column", margin: "0px 100px 0px 20px"}}>
                <h1 style = {{fontSize: "2rem"}}>Easy payments       </h1>
              <div style = {{display: "flex", flexDirection: "row", width:"100%"}}>
                <img src = "/src/images/dest_01.png" style = {{height: "80px", width: "auto"}}/>
                <p style={{margin: "0 0 0 10px", padding: "0px", fontSize:"1rem"}}>FRee ticket f</p>
              </div>
            </div>

            <div style = {{width: "100%", borderTop: "1px solid #818181", display: "flex", flexDirection: "column"}}>
                <h1 style = {{fontSize: "2rem"}}>Easy payments</h1>
              <div style = {{display: "flex", flexDirection: "row", width:"100%"}}>
                <img src = "/src/images/dest_01.png" style = {{height: "80px", width: "auto"}}/>
                <p style={{margin: "0 0 0 10px", padding: "0px", fontSize:"1rem"}}>FRee ticket for yall starboy hills cry form em</p>
              </div>
            </div>

          </div>
          <div class= "dest_right_text" style={{ fontSize: "5rem", alignItems: "flex-start", width:"50%", marginTop: "20px"}}>
            <div style = {{width: "100%", borderTop: "1px solid #818181", display: "flex", flexDirection: "column", margin: "0px 30px 0px 20px"}}>
                <h1 style = {{fontSize: "2rem"}}>Easy payments</h1>
              <div style = {{display: "flex", flexDirection: "row", width:"100%"}}>
                <img src = "/src/images/dest_01.png" style = {{height: "80px", width: "auto"}}/>
                <p style={{margin: "0 0 0 10px", padding: "0px", fontSize:"1rem"}}>FRee ticket for yall FRee ticket for yall starboy hills cry form em</p>
              </div>
            </div>

            <div style = {{width: "100%", borderTop: "1px solid #818181", display: "flex", flexDirection: "column"}}>
                <h1 style = {{fontSize: "2rem"}}>Easy payments</h1>
              <div style = {{display: "flex", flexDirection: "row", width:"100%"}}>
                <img src = "/src/images/dest_01.png" style = {{height: "80px", width: "auto"}}/>
                <p style={{margin: "0 0 0 10px", padding: "0px", fontSize:"1rem"}}>FRee ticket for yall starboy hills cry form em</p>
              </div>
            </div>

          </div> */}



<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  width: '100%',
  padding: '2rem 0'
}}>
  {/* Block 1: Easy Payments */}
  <div style={{ 
    border: '0px solid #e0e0e0', 
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s'
  }}>
    <h3 style={{ 
      fontSize: '2.5rem', 
      color: '#85b2db',
      marginBottom: '0rem'
    }}>
      Easy Payments
    </h3>
    <div style={{ display: 'flex', alignItems: 'center', marginTop:'0', paddingTop: '0' }}>
      <FaCreditCard 
        size={150} 
        color="#818181" 
        style={{ marginRight: '1rem' }} 
      />
      <p style={{ 
        margin: 0, 
        fontSize: '1rem', 
        color: '#818181',
        lineHeight: '1.5'
      }}>
        Secure transactions with flexible payment options including crypto and corporate accounts
      </p>
    </div>
  </div>

  {/* Block 2: Customer Satisfaction */}
  <div style={{ ...blockStyle }}>
    <h3 style={titleStyle}>Satisfaction</h3>
    <div style={contentStyle}>
      <FaSmile size={100} color="#818181" style={iconStyle} />
      <p style={textStyle}>
        24/7 dedicated concierge service with personalized travel solutions for VIP clients
      </p>
    </div>
  </div>

  {/* Block 3: Convenient Timing */}
  <div style={blockStyle}>
    <h3 style={titleStyle}>Convenience</h3>
    <div style={contentStyle}>
      <FaClock size={64} color="#818181" style={iconStyle} />
      <p style={textStyle}>
        Flexible scheduling with 2-hour guaranteed departure windows for last-minute bookings
      </p>
    </div>
  </div>

  {/* Block 4: Exclusive Offers */}
  <div style={blockStyle}>
    <h3 style={titleStyle}>Exclusive Offers</h3>
    <div style={contentStyle}>
      <FaTag size={64} color="#818181" style={iconStyle} />
      <p style={textStyle}>
        Membership rewards program with complimentary upgrades and priority access
      </p>
    </div>
  </div>
</div>



        </div>

      </div>






      {/*}
    <div className="dest" style={{display: "flex", flexDirection:"row", height: "800px"}} >
      <div style={{display: "flex", flexDirection: "column", margin: "0", justifyContent:"left", alignContent: "flex-start", alignItems: "flex-start"}}>
      <hr 
          style ={{
          border: 0,
          height: "5px",
          backgroundColor: "#5d87b8",
          margin: "40px 50px 40px 20px",
          position: "relative",
          overflow: "hidden", 
          zIndex: 4,
        }}
        /> 

        <h1 style={{fontSize: "5rem", marginLeft: "0px", marginBottom: "0", paddingLeft: "120px"}}>
          Featured Gateways
        </h1>
        
       <Imgcarousal />
      </div>
      <div>Helloo kjD</div>

    </div>
    */}


    <div className="membership" style={{display: "flex", flexDirection: "row", height: "575px", zIndex: "2", backgroundColor: "white"}}>
      <div style={{width: "50%", zIndex: '2', backgroundColor: '#f9f9f9'}}>
        <h1 style={{fontSize: "4rem", marginLeft: "0px", marginBottom: "0", paddingLeft: "120px"}}>Perks of being a</h1>
        <h1 className="membertext" style={{fontSize: "10rem", margin: "0 0 0 0", marginBottom: "0", paddingLeft: "120px", paddingBottom: "0px"}}>Member</h1>

        <div style={{paddingLeft: "120px", margin: "0px", paddingTop: "0px"}}>
          {/* <Cta text = "Login to become a member"/> */}
          <Mmb text="Login to become a member" to="/login" style={{ zIndex: 3, position: "relative" }} />
          
        </div>
        
      
    </div>
    <div style={{width: "60%",display: "flex", flexDirection: "column", zIndex: "2", backgroundColor: '#f9f9f9' }} >
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
