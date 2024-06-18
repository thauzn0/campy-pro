import React from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import AboutUs from './Component/AboutUs';
import CoreValues from './Component/CoreValues';
import ProductSection from './Component/ProductSection';
import FounderMessage from './Component/FounderMessage';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <AboutUs />
      <CoreValues />
      <div id="products">
        <ProductSection />
      </div>
      <FounderMessage />
      <Footer />
    </div>
  );
}

export default App;
