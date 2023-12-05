// components/InstagramSection.jsx
import React from 'react';
import '../css/InstagramSection.css';
import InstagramData from './InstagramData';

const InstagramSection = () => {
  return (
    <section id="instagram" className="instagram-section">
      <div className="instagram-content">
        <h1>Conheça o trabalho de nossos artistas!</h1>
        <p>
          Confira as últimas postagens das incríveis artes produzidas nos eventos do grupo. Siga-nos no Instagram para não perder nada!
        </p>
        <div className="instagram-info">
          <p>
            Siga-nos no Instagram: <a target="blank" href='https://www.instagram.com/todap.arte/' className="instagram-handle">@todap.arte</a>
          </p>
        </div>

        <div className="instagram-feed">
          {InstagramData.map((photo) => (
            <div key={photo.id} className="instagram-photo">
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
