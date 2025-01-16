import React, { useState } from "react";
import './App.css';

import Xp from './components/Xp/Xp';
import Cta from './components/Cta/Cta';
import Destinations from './components/Destinations/Destinations';
import r_image from "/src/images/reg_image.png";



function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Header />
        <div style={{width: "100%", height: "240px", backgroundColor: "#5d87b8" }}>
          <Booking />
        </div>

      <Xp />
      <Destinations/>

        <main>
          <h1 style = {{fontWeight: "Light"}}>Welcome to Our Private Aviation Company</h1>
          <p>Fly with us and experience luxury!</p>
          <section>
            <h2>Our Premium Fleet</h2>

          </section>
        </main>

      </div>
 

      <div>
        <ImageCarousel />
        <Footer />
      </div>
    </div>

  );
}

function ImageCarousel() {
  const images = [
    { src: "/src/images/car_test01.png", alt: "Jet 1" },
    { src: "/src/images/2022Q3-web-2-2-1024x462.jpg", alt: "Jet 2" },
    { src: "/src/images/Empire-Aviation-1.jpg", alt: "Jet 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
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



function Header() {
  const imgone = [{src: "/src/images/main_logo.jpg"}];
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-c">
        <ul>
          
          <li><img
            src="/src/images/main_logo.jpg" // Updated to include the correct Vite-compatible path.
            alt="Airborne logo"
            style={{ width: "60%", height: "auto", marginTop: "80px" }}
          /></li>
          
          <li><div><Cta text = "Book a Flight" /></div></li>
        </ul>
      </div>

      <div style={{display: "flex", flexDirection: "Row",marginTop: "180px", marginBottom: "20px", justifyContent: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "LightMedium", margin: "0", padding: "0"}}>Get personalized aviation with</h1>
        <img
          src = {r_image}
          style = {{height: "50px", width: "auto", paddingLeft: "15px"}}
        />
      </div>


    </header>
  );
}



function Footer() {
  return (
    <footer>
      <p>© 2024 Private Aviation Line. All Rights Reserved.</p>
    </footer>
  );
}

/*function CTA() {
  return (
    <button className="cTA-button" style={{ marginTop: "50px", padding: "0px 20px 0px 20px", fontSize: "1.5rem" }}>
      <p style={{ padding: "0px 20px", fontFamily: "CreatoDisplay" }}>Book a Flight</p>
    </button>
  )

}*/



function Booking() {
  return (
    <div className="booking_parent">
      <div className="booking_child" style={{ width: "10%" }}>
        <img
          src = "src\images\booking_image_one.png"
          className="imageonefirst"
        />
      </div>
      <div className="booking_child" style={{ width: "25%" }}>
        <h1 className="booking-text">Departure  </h1>
        <select className="dropdown">
          <option value="" hidden> &#9662;</option>
          <option>Las Vegas International</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className="booking_child" style={{ width: "25%" }}>
          <h1 className="booking-text">Arrival  </h1>
        <select className="dropdown">
          <option value="" hidden> &#9662;</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className="booking_child" style={{ width: "25%" }}>
      <h1 className="booking-text">Passengers  </h1>
        <select className="dropdown">
          <option>1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className="booking_child">
        {/* Fifth part - no dropdown */}
      </div>
    </div>
  );
}





export default App;
