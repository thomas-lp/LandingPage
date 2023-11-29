// components/InstagramSection.jsx
import React from 'react';
import '../css/InstagramSection.css';
import InstagramEmbed from 'react-instagram-embed';

const InstagramSection = () => {
  return (
    <section id="instagram" className="instagram-section">
      <div className="instagram-content">
        <h1>Conheça o trabalho de nossos artistas!</h1>
        <p>
          Confira as últimas postangens das incríveis artes produzidas nos eventos do grupo. Siga-nos no Instagram para não perder nada!
        </p>
        <div className="instagram-info">
            <p>
            Siga-nos no Instagram: <a target="blank" href='https://www.instagram.com/todap.arte/' className="instagram-handle">@todap.arte</a>
            </p>

            <div class="instagram-embed-container">
                <iframe src="https://www.instagram.com/todap.arte/" width="320" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
