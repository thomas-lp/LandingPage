// components/Footer.jsx
import React from 'react';
import '../css/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <h2>Por Toda PArte</h2>
          <p>Conectando artistas por todo o país!</p>
        </div>
        <div className="footer-right">
          <img src={logo} alt="Logo do Grupo" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Por Toda PArte. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;