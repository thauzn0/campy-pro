import React, { useState } from 'react';
import './ProductSection.css';
import productImage1 from '../Assets/1.jpeg'; // Ürün fotoğrafı 1
import productImage2 from '../Assets/2.jpeg'; // Ürün fotoğrafı 2
import productImage3 from '../Assets/3.jpeg'; // Ürün fotoğrafı 3

const ProductSection = () => {
  const images = [productImage1, productImage2, productImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="product-section">
      <div className="product-images-sidebar">
        <button className="prev-button" onClick={prevSlide}>&#9650;</button>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Campy Pro v1 Grill ${index + 1}`}
            className={`sidebar-image ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
        <button className="next-button" onClick={nextSlide}>&#9660;</button>
      </div>
      <div className="main-image-container">
        <div className="main-image-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Campy Pro v1 Grill ${index + 1}`} className="main-image" />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>Campy Pro v1 Grills</h1>
        <h2>The Ultimate Camping Grill</h2>
        <p>Experience unmatched grilling performance with Campy Pro v1 Grills, designed for outdoor enthusiasts. Enjoy features like:</p>
        <ul>
          <li>High durability and robust design</li>
          <li>Portable and lightweight</li>
          <li>Easy to clean</li>
          <li>Multi-fuel compatibility</li>
        </ul>
        <div className="platforms">
          <button className="platform-button" onClick={toggleDropdown}>
            Available Platforms
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => window.open('https://www.amazon.com', '_blank')}>Amazon</button>
              <button onClick={() => window.open('https://www.ebay.com', '_blank')}>eBay</button>
              <button onClick={() => window.open('https://www.walmart.com', '_blank')}>Walmart</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;