// components/IntroSection.jsx
import React from 'react';
import IntroButton from './IntroButton';
import '../css/IntroSection.css';
import logo from '../assets/logo.png'

const IntroSection = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-left">
        <h1>Por Toda P<span>Arte</span></h1>
        <p>
          Somos um grupo de desenhistas tradicionais e digitais que nasceu no WhatsApp em 2018.
          Interagimos e nos divertimos de diversas formas através de eventos de desenho, e competições entre as Casas Artísticas.
          Nossa comunidade abrange desenhistas de todo o país, unidos pela internet e presentes "Por Toda PArte".
          Você também pode fazer parte da família Por Toda PArte.
        </p>
        <IntroButton onClick={() => console.log('Junte-se a nós clicado!')} />
      </div>
      <div className="intro-right">
      <img src={logo} alt="Logo do Grupo" />
      </div>
    </section>
  );
};

export default IntroSection;
