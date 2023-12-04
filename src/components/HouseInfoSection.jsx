// components/HouseInfoSection.jsx
import React from 'react';
import '../css/HouseInfoSection.css';

const HouseInfoSection = ({ title, description, characteristics }) => {
  return (
    <div className="house-info-section">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {characteristics.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
};

export default HouseInfoSection;
