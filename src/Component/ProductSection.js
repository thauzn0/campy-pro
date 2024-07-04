import React, { useState } from 'react';
import './ProductSection.css';
import productImage1 from '../Assets/1.jpeg'; // Ürün fotoğrafı 1
import productImage2 from '../Assets/2.jpeg'; // Ürün fotoğrafı 2
import productImage3 from '../Assets/3.jpeg'; // Ürün fotoğrafı 3
import productImage4 from '../Assets/v2_p3.jpeg'; // Ürün fotoğrafı 4
import productImage5 from '../Assets/v2_p2.jpeg'; // Ürün fotoğrafı 5
import productImage6 from '../Assets/v2_p1.jpeg'; // Ürün fotoğrafı 6
import productImage7 from '../Assets/v1-kapak.jpeg';
import productImage8 from '../Assets/v2_p4.jpeg';
import productImage9 from '../Assets/son_v2.png';
import productImage10 from '../Assets/4.jpeg';

const ProductSection = () => {
  const products = [
    {
      title: 'Campy Pro v1 Grills',
      subtitle: 'The Ultimate Camping Grill',
      features: [
        'High durability and robust design',
        'Portable and lightweight',
        'Easy to clean',
        'Multi-fuel compatibility'
      ],
      images: [productImage7, productImage1, productImage2, productImage3]
    },
    {
      title: 'Campy Pro v2 Grills',
      subtitle: 'Advanced Camping Grill',
      features: [
        'Enhanced durability',
        'More portable and lightweight',
        'Easier to clean',
        'Advanced multi-fuel compatibility'
      ],
      images: [productImage5, productImage6, productImage8, productImage9, productImage10, productImage4]
    }
  ];

  const [currentIndices, setCurrentIndices] = useState([0, 0]);
  const [dropdownOpen, setDropdownOpen] = useState([false, false]);

  const nextSlide = (productIndex) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[productIndex] = (newIndices[productIndex] + 1) % products[productIndex].images.length;
      return newIndices;
    });
  };

  const prevSlide = (productIndex) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[productIndex] = (newIndices[productIndex] - 1 + products[productIndex].images.length) % products[productIndex].images.length;
      return newIndices;
    });
  };

  const goToSlide = (productIndex, slideIndex) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[productIndex] = slideIndex;
      return newIndices;
    });
  };

  const toggleDropdown = (productIndex) => {
    setDropdownOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      newOpen[productIndex] = !newOpen[productIndex];
      return newOpen;
    });
  };

  return (
    <section className="product-section">
      {products.map((product, productIndex) => (
        <div key={productIndex} className="product">
          <div className="product-media">
            <div className="main-image-container">
              <div className="main-image-wrapper" style={{ transform: `translateX(-${currentIndices[productIndex] * 33.33}%)` }}>
                {product.images.map((img, index) => (
                  <img key={index} src={img} alt={`Campy Pro v${productIndex + 1} Grill ${index + 1}`} className="main-image" />
                ))}
              </div>
            </div>
            <div className="product-images-slider">
              <button className="prev-button" onClick={() => prevSlide(productIndex)}>&#9664;</button>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Campy Pro v${productIndex + 1} Grill ${index + 1}`}
                  className={`slider-image ${index === currentIndices[productIndex] ? 'active' : ''}`}
                  onClick={() => goToSlide(productIndex, index)}
                />
              ))}
              <button className="next-button" onClick={() => nextSlide(productIndex)}>&#9654;</button>
            </div>
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <h2>{product.subtitle}</h2>
            <p>Experience unmatched grilling performance with {product.title}, designed for outdoor enthusiasts. Enjoy features like:</p>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="platforms">
              <button className="platform-button" onClick={() => toggleDropdown(productIndex)}>
                Available Platforms
              </button>
              {dropdownOpen[productIndex] && (
                <div className="dropdown-menu">
                  <button onClick={() => window.open('https://www.amazon.com', '_blank')}>Amazon</button>
                  <button onClick={() => window.open('https://www.ebay.com', '_blank')}>eBay</button>
                  <button onClick={() => window.open('https://www.walmart.com', '_blank')}>Walmart</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;
