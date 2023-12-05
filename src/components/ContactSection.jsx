// components/ContactSection.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import '../css/ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contato</h1>
      <p>Fale conosco e participe do Por Toda PArte.</p>
      <div>
        <span className='button-social-media' ><FaWhatsapp/></span>  
        <span className='button-social-media' ><FaInstagram/></span>
        <span className='button-social-media' ><FaTwitter/></span><br></br>
      </div>
      <h2 className='newsletter'>Newsletter</h2>
      <p>Inscreva-se em nossa newsletter para se manter informado das próximas novidades!</p>
      
      <form className="newsletter-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Digite seu nome" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" required />
        </div>

        <button className='contact-submit' type="submit" id="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactSection;
