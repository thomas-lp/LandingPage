// components/InstagramSection.jsx
import React from 'react';

const InstagramSection = () => {
  return (
    <section id="instagram">
      <h2>Instagram</h2>
      <p>Confira nossas últimas postagens!</p>
      {/* Adicione o iframe do Instagram aqui */}
      <iframe
        src="https://www.instagram.com/p/B12ijKQoE1V/embed"
        title="Instagram"
        width="320"
        height="400"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </section>
  );
};

export default InstagramSection;
