// components/HouseInfoSection.jsx
import React from 'react';
import '../css/HouseInfoSection.css';

const HouseInfoSection = ({ title, description, characteristics }) => {
  return (
    <div className="house-info-section">
      <div className="info-left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="info-right">
        <ul>
          {characteristics.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HouseInfoSection;
