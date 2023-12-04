// components/EventsSection.jsx
import React from 'react';
import Slider from "react-slick";
import eventsData from './EventsData';

const EventsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div style={{ width: '65%', margin: 'auto' }}>
      <h1 style={{textAlign:'center'}}>Eventos</h1>
      <p style={{textAlign:'center'}}> Descubra os eventos realizados pelo Por Toda PArte. </p>
      <div style={{ marginTop: '20px' }}>
        <Slider {...settings}>
          {eventsData.map((d) => (

            <div key={d.name} style={{ backgroundColor: 'white', height: '450px', color: 'black', margin: '10px' }}>
              <div style={{ height: '56px', backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px 10px 0 0', margin: '0px 10px 0px 10px' }}>
                <p style={{ fontSize: '20px', color:'white' }}>{d.name}</p>
              </div>

              <div style={{backgroundColor: 'papayaWhip', borderRadius: '0px 0px 20px 20px', margin: '0px 10px 0px 10px'}}>
                <img src={d.image} alt="" style={{ height: '400px', width: '400px', borderRadius: '2%', marginLeft: 'auto', marginRight: 'auto' }} />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '4px' }}>
                  <p style={{ textAlign: 'center', color: 'black' }}>{d.description}</p>
                  <button style={{ backgroundColor: 'orange', color: 'white', fontSize: '16px', padding: '6px', borderRadius: '13px' }}>Saiba Mais</button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventsSection;