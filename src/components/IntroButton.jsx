// components/IntroButton.jsx
import React from 'react';
import '../css/IntroButton.css';
import { FaWhatsapp } from "react-icons/fa";


const IntroButton = ({ onClick }) => {
  return (
    <div className="intro-button-container">
      <div className="intro-button" onClick={onClick}>
        <div className="button-text">Junte-se a nós</div>
      </div>
        <div>
            <p className='button-wpp' style={{ fontSize: '50px' }}><FaWhatsapp/></p>      
        </div>
    </div>
  );
};

export default IntroButton;
