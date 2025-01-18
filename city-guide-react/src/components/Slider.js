import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="item"
          style={{ display: currentIndex === index ? "block" : "none" }}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <Link className="previous" onClick={previousSlide}>
        &#10094;
      </Link>
      <Link className="next" onClick={nextSlide}>
        &#10095;
      </Link>
    </div>
  );
};

export default Slider;