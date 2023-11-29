// components/HousesSection.jsx
import React from 'react';
import CustomSlider from './Slider';
import HouseInfoSection from './HouseInfoSection';
import '../css/HousesSection.css';

const HousesSection = () => {
  const houseData = [
    {
      title: 'Casa 1',
      description: 'Descrição da Casa 1...',
      characteristics: ['Animal: Leão', 'Pedra: Rubi', 'Flor: Girassol', 'Cores: Vermelho e Amarelo'],
      images: ['image1_1.jpg', 'image1_2.jpg', 'image1_3.jpg'],
    },
    {
      title: 'Casa 2',
      description: 'Descrição da Casa 2...',
      characteristics: ['Animal: Águia', 'Pedra: Safira', 'Flor: Rosa', 'Cores: Azul e Branco'],
      images: ['image2_1.jpg', 'image2_2.jpg', 'image2_3.jpg'],
    },
    // ... Adicione mais casas conforme necessário
  ];

  return (
    <section id="houses" className="houses-section">
      {houseData.map((house, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <>
              <CustomSlider images={house.images} />
              <HouseInfoSection
                title={house.title}
                description={house.description}
                characteristics={house.characteristics}
              />
            </>
          ) : (
            <>
              <HouseInfoSection
                title={house.title}
                description={house.description}
                characteristics={house.characteristics}
              />
              <CustomSlider images={house.images} />
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default HousesSection;
