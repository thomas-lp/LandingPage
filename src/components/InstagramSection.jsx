// components/InstagramSection.jsx
import React from 'react';
import '../css/InstagramSection.css';

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
          {/* Adicione as imagens manualmente aqui */}
          <div className="instagram-photo">
            <img src='https://picsum.photos/200/301' alt="Foto 1" />
          </div>
          <div className="instagram-photo">
            <img src='https://picsum.photos/200/301' alt="Foto 2" />
          </div>
          <div className="instagram-photo">
            <img src='https://picsum.photos/200/301' alt="Foto 3" />
          </div>
          <div className="instagram-photo">
            <img src='https://picsum.photos/200/301' alt="Foto 4" />
          </div>
          <div className="instagram-photo">
            <img src='https://picsum.photos/200/301' alt="Foto 5" />
          </div>
          <div className="instagram-photo">
            <img src='https://picsum.photos/200/301' alt="Foto 6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
