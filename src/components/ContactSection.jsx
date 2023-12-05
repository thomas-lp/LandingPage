// components/ContactSection.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import '../css/ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact">
      <h1>Contato</h1>
      <p>Fale conosco e participe do Por Toda PArte.</p>
      <div>
        <span className='button-social-media' ><FaWhatsapp/></span>  
        <span className='button-social-media' ><FaInstagram/></span>
        <span className='button-social-media' ><FaTwitter/></span><br></br>
      </div>
      <h2 className='newsletter'>Newsletter</h2>
      <p>Inscreva-se em nossa newsletter para se manter informado das próximas novidades!</p>
      
      <form>
        <label for="name"> Nome: </label>
        <input type="text" id="name" name="name" placeholder="Digite seu nome" required /><br></br><br></br>
        <label for="email"> Email: </label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required /><br></br>
      </form>
      
      <button className='contact-submit' type="submit" id="submit" >Enviar</button>
      
    </section>
  );
};

export default ContactSection;
