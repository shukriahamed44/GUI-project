import { useState } from 'react';
import './ImageCr.css';

const ImageCr = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="images-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
        
        <button className="carousel-button prev" onClick={prevImage}>&#10094;</button>
        <button className="carousel-button next" onClick={nextImage}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageCr;