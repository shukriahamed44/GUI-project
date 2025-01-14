import React, { useState } from "react";
import './App.css';

/*saaaaaaaaaaaaaaaaaaaa*sa*/
function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Our Private Aviation Company</h1>
        <p>Fly with us and experience luxury!</p>
        <section>
          <h2>Our Premium Fleet</h2>
          <ImageCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ImageCarousel() {
  const images = [
    { src: require("./images/istockphoto-466619660-612x612.jpg"), alt: "Jet 1" },
    { src: require("./images/2022Q3-web-2-2-1024x462.jpg"), alt: "Jet 2" },
    { src: require("./images/Empire-Aviation-1.jpg"), alt: "Jet 3" },
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
      <h1 style = {{fontSize: "10rem"}}>Private Aviation Line</h1>
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

export default App;
