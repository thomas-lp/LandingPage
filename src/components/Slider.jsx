// components/Slider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Slider.css';

const CustomSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slide">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
