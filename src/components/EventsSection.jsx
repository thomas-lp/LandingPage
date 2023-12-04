// components/EventsSection.jsx
import React from 'react';
import Slider from "react-slick";
import eventsData from './EventsData';
import '../css/EventsSection.css';

const EventsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div section id="events" className='events'>
      <div className='events'>
        <div className='centralize'>
          <h1>Eventos</h1>
          <p> Descubra os eventos realizados pelo Por Toda PArte. </p>
        </div>
        <div>
          <Slider {...settings}>
            {eventsData.map((d) => (
              <div key={d.name} className='card'>
                <div className='card-top'>
                  <p className='name'>{d.name}</p>
                </div>

                <div className='image-card'>
                  <img className='image' src={d.image} alt="" />

                  <div className='card-bottom'>
                    <p>{d.description}</p>
                    <button className='saiba-mais'>Saiba Mais</button>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;