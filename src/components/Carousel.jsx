// components/Carousel.jsx
import React, { useState } from 'react';
import '../css/Carousel.css';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>&lt;</button>
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;
