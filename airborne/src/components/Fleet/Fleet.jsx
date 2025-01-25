import React from 'react';

function Fleet(){
    return
}

export default Fleet;

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