// components/Navbar.jsx
import React, { useState } from 'react';
import Button from './NavbarButton';
import '../css/Navbar.css';
import '../css/NavbarButton.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={darkMode ? 'dark-mode' : ''}>
      <div className="left-side">
        <div className="logo">Por Toda PArte</div>
      </div>
      <div className="right-side">
        <Button onClick={() => scrollToSection('intro')}>Início</Button>
        <Button onClick={() => scrollToSection('houses')}>Casas</Button>
        <Button onClick={() => scrollToSection('events')}>Eventos</Button>
        <Button onClick={() => scrollToSection('instagram')}>Instagram</Button>
        <Button onClick={() => scrollToSection('contact')}>Contato</Button>
        <Button onClick={toggleDarkMode}>{darkMode ? '🌞' : '🌙'}</Button>
      </div>
    </nav>
  );
};

export default Navbar;
