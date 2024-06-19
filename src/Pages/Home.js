import React from 'react';
import Hero from '../Component/Hero';
import AboutUs from '../Component/AboutUs';
import CoreValues from '../Component/CoreValues';
import ProductSection from '../Component/ProductSection';
import FounderMessage from '../Component/FounderMessage';

const Home = () => {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <AboutUs />
      <CoreValues />
      <div id="products">
        <ProductSection />
      </div>
      <FounderMessage />
    </div>
  );
}

export default Home;
