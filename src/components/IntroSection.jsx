// components/IntroSection.jsx
import React from 'react';
import IntroButton from './IntroButton';
import '../css/IntroSection.css';

const IntroSection = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-left">
        <h1>Por Toda P<span>Arte</span></h1>
        <p>
            Somos um grupo de desenhistas tradicionais e digitais que nasceu no WhatsApp em 2018.
          Interagimos e nos diversos de diversas formas através de eventos de desenho, e competições com as Casas Artísticas.
          Nossa comunidade abrange desenhistas de todo o país, unidos pela internet e presentes "Por Toda PArte".
          Você também pode fazer parde da família Por Toda PArte.
        </p>
        <IntroButton onClick={() => console.log('Junte-se a nós clicado!')} />
      </div>
      <div className="intro-right">
        <img src="caminho/para/sua/logo.png" alt="Logo do Grupo" />
      </div>
    </section>
  );
};

export default IntroSection;
