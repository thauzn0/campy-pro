import React, { useState } from 'react';
import './v1Comp.css';

import productImage1 from '../Assets/1.jpeg'; // Ürün fotoğrafı 1
import productImage2 from '../Assets/2.jpeg'; // Ürün fotoğrafı 2
import productImage3 from '../Assets/3.jpeg'; // Ürün fotoğrafı 3
import productImage7 from '../Assets/v1-kapak.jpeg';

const V1Comp = () => {
  const productImages = [productImage7, productImage1, productImage2, productImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('features');

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
  };

  return (
    <>
      <section className="product-detail-section">
        <div className="product-detail-container">
          <div className="product-images">
            <div className="main-image-container">
              <img src={productImages[currentImageIndex]} alt="Main Product" className="main-image" />
            </div>
            <div className="product-images-slider">
              <button className="prev-button" onClick={prevSlide}>&#9664;</button>
              <div className="slider-wrapper">
                {productImages.slice(currentImageIndex, currentImageIndex + 3).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product Slide ${index + 1}`}
                    className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex((currentImageIndex + index) % productImages.length)}
                  />
                ))}
              </div>
              <button className="next-button" onClick={nextSlide}>&#9654;</button>
            </div>
          </div>
          <div className="product-info">
            <h1>Campy Pro AR-1 Grills</h1>
            <h2>The Ultimate Camping Grill</h2>
            <p>Experience unmatched grilling performance with Campy Pro AR-1 Grills, designed for outdoor enthusiasts. Enjoy features like:</p>
            <ul>
              <li>High durability and robust design</li>
              <li>Portable and lightweight</li>
              <li>Easy to clean</li>
              <li>Multi-fuel compatibility</li>
              <li>Dimensions: 20x15x10 inches</li>
              <li>Weight: 10 lbs</li>
              <li>Safety features: Auto shut-off, Flame guard</li>
              <li>Material: Stainless steel</li>
              <li>Warranty: 2 years</li>
            </ul>
            <div className="platforms">
              <button onClick={() => window.open('https://www.amazon.com/Campy-Pro-Portable-Automatic-Ignition/dp/B0D8TS7FZP/ref=sr_1_2?dib=eyJ2IjoiMSJ9.opu-0ynneuP2i1uQm7-BXqo6_NJeNSFOZG4vEbFkQ8xdwvekGEy7Tgqc_UJQ2B-M.IBgbf99wWev73saHXqEugEVBOC4x3YNWgmW8gxdcdB4&dib_tag=se&m=A1CM5OURBNP9R9&marketplaceID=ATVPDKIKX0DER&qid=1724081071&s=merchant-items&sr=1-2', '_blank')} className="platform-button">Amazon</button>
              {/* <button onClick={() => window.open('https://www.ebay.com', '_blank')} className="platform-button">eBay</button>
              <button onClick={() => window.open('https://www.walmart.com', '_blank')} className="platform-button">Walmart</button> */}
            </div>
          </div>
        </div>
      </section>
      <section className="tabs-section">
        <div className="tabs">
          <button className={`tab ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>Features & Tech</button>
          <button className={`tab ${activeTab === 'size' ? 'active' : ''}`} onClick={() => setActiveTab('size')}>Size & Specs</button>
        </div>
        <div className="tab-content">
          <div className="tab-pane-container">
            {activeTab === 'features' && (
              <div className="tab-pane active">
                <h3>Features & Tech</h3>
                <ul>
                  <li>High durability and robust design</li>
                  <li>Portable and lightweight</li>
                  <li>Easy to clean</li>
                  <li>Multi-fuel compatibility</li>
                  <li>Safety features: Auto shut-off, Flame guard</li>
                  <li>Material: Stainless steel</li>
                  <li>Warranty: 2 years</li>
                </ul>
              </div>
            )}
            {activeTab === 'size' && (
              <div className="tab-pane active">
                <h3>Size & Specs</h3>
                <ul>
                  <li>Dimensions: 20x15x10 inches</li>
                  <li>Weight: 10 lbs</li>
                  <li>Primary Cooking Grate: 13" (33 cm)</li>
                  <li>Total Cooking Area: 133"² (856 cm²)</li>
                  <li>Serves: 2-4 People</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default V1Comp;
