// components/HousesSection.jsx
import React from 'react';
import Carousel from './Carousel';
import HouseInfoSection from './HouseInfoSection';
import '../css/HousesSection.css';
import housesData from './HousesData';

const HousesSection = () => {
  return (
    <section id="houses" className="houses-section">
      <h1>Casas Artísticas</h1>
      {housesData.map((house, index) => (
        <div key={index} className="house-container">
          {index % 2 === 0 ? (
            <>
              <Carousel slides={house.images} className="carousel" />
              <HouseInfoSection
                title={house.title}
                description={house.description}
                characteristics={house.characteristics}
                className="info-section"
              />
            </>
          ) : (
            <>
              <HouseInfoSection
                title={house.title}
                description={house.description}
                characteristics={house.characteristics}
                className="info-section"
              />
              <Carousel slides={house.images} className="carousel" />
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default HousesSection;
