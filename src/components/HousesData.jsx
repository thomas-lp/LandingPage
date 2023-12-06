// components/HousesData.jsx
import React from 'react';
import Carousel from './Carousel';
import HouseInfoSection from './HouseInfoSection';
import '../css/HousesSection.css';

// Imports das imagens para Lispectorus Watertonni
import lispectorusWatertonni1 from '../assets/lispectorusWatertonni/1.png';
import lispectorusWatertonni2 from '../assets/lispectorusWatertonni/2.png';
import lispectorusWatertonni3 from '../assets/lispectorusWatertonni/3.png';
import lispectorusWatertonni4 from '../assets/lispectorusWatertonni/4.png';
import lispectorusWatertonni5 from '../assets/lispectorusWatertonni/5.png';
import lispectorusWatertonni6 from '../assets/lispectorusWatertonni/6.png';
import lispectorusWatertonni7 from '../assets/lispectorusWatertonni/7.png';

// Imports das imagens para Ramphastidae Qinnis
import ramphastidaeQinnis1 from '../assets/ramphastidaeQinnis/1.png';
import ramphastidaeQinnis2 from '../assets/ramphastidaeQinnis/2.png';
import ramphastidaeQinnis3 from '../assets/ramphastidaeQinnis/3.png';
import ramphastidaeQinnis4 from '../assets/ramphastidaeQinnis/4.png';
import ramphastidaeQinnis5 from '../assets/ramphastidaeQinnis/5.png';
import ramphastidaeQinnis6 from '../assets/ramphastidaeQinnis/6.png';
import ramphastidaeQinnis7 from '../assets/ramphastidaeQinnis/7.png';

// Imports das imagens para Electrophorus Liberi
import electrophorusLiberi1 from '../assets/electrophorusLiberi/1.png';
import electrophorusLiberi2 from '../assets/electrophorusLiberi/2.png';
import electrophorusLiberi3 from '../assets/electrophorusLiberi/3.png';
import electrophorusLiberi4 from '../assets/electrophorusLiberi/4.png';
import electrophorusLiberi5 from '../assets/electrophorusLiberi/5.png';
import electrophorusLiberi6 from '../assets/electrophorusLiberi/6.png';
import electrophorusLiberi7 from '../assets/electrophorusLiberi/7.png';

const housesData = [
  {
    title: 'Lispectorus Watertonni',
    description: 'O espírito do verão! A casa do Carpe Diem!',
    characteristics: ['Animal: Beija-flor', 'Pedra: Rubi', 'Flor: Lírio amarelo', 'Cores: Azul, Dourado e Branco'],
    images: [
      lispectorusWatertonni1,
      lispectorusWatertonni2,
      lispectorusWatertonni3,
      lispectorusWatertonni4,
      lispectorusWatertonni5,
      lispectorusWatertonni6,
      lispectorusWatertonni7,
    ],
  },
  {
    title: 'Ramphastidae Qinnis',
    description: 'A motivação que vem de dentro! A casa da natureza!',
    characteristics: ['Animal: Tucano', 'Pedra: Topázio Laranja', 'Flor: Girassol', 'Cores: Laranja, Amarelo e Preto'],
    images: [
      ramphastidaeQinnis1,
      ramphastidaeQinnis2,
      ramphastidaeQinnis3,
      ramphastidaeQinnis4,
      ramphastidaeQinnis5,
      ramphastidaeQinnis6,
      ramphastidaeQinnis7,
    ],
  },
  {
    title: 'Electrophorus Liberi',
    description: 'O despertar da primavera! A casa do saber!',
    characteristics: ['Animal: Enguia', 'Pedra: Hematita', 'Flor: Vitória Régia', 'Cores: Cinza, Ciano e Laranja'],
    images: [
      electrophorusLiberi1,
      electrophorusLiberi2,
      electrophorusLiberi3,
      electrophorusLiberi4,
      electrophorusLiberi5,
      electrophorusLiberi6,
      electrophorusLiberi7,
    ],
  },
];
  
export default housesData;
  