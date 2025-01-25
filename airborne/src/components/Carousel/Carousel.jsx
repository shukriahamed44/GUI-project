import React, { useState } from "react";
import "./Carousel.css";

function Carousel() {
  const images = [
    { src: "src/images/lnd_pg.png", alt: "PF" },
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

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="carousel-image"
      />
      <div className="carousel-buttons">
        <button onClick={handlePrev} className="carousel-button">
          <img src="src\images\caroButt_next.png" alt="Previous" />
        </button>
        <button onClick={handleNext} className="carousel-button">
          <img src="src\images\caroButt_next.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
