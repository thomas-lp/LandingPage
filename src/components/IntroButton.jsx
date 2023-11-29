// components/IntroButton.jsx
import React from 'react';
import '../css/IntroButton.css';

const IntroButton = ({ onClick }) => {
  return (
    <div className="intro-button-container">
      <div className="intro-button" onClick={onClick}>
        <div className="button-text">Junte-se a nós</div>
      </div>
      <div className="button-img-container">
        <p>A<i class="fa-brands fa-whatsapp"></i></p>
      </div>
    </div>
  );
};

export default IntroButton;
