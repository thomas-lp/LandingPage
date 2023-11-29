// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import EventsSection from './components/EventsSection';
import HousesSection from './components/HousesSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './css/App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <EventsSection />
      <HousesSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
