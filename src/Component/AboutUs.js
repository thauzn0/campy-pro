import React from 'react';
import './AboutUs.css';
import aboutImage from '../Assets/about.jpeg'; // Resmin doğru yolu
import { FaArrowDown } from 'react-icons/fa'; // İkonu import et
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation();

  const scrollToSection = () => {
    const sectionId = location.pathname === '/about' ? 'about-us-team-section' : 'core-values-section';
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="about-us-section" className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to Campy Pro, your ultimate source for high-quality camping and picnic grills. Our mission is to provide outdoor enthusiasts with reliable and durable grilling solutions that enhance their outdoor experiences. Whether you're a seasoned camper or a casual picnicker, Campy Pro has the perfect grill for you.
        </p>
        <p>
          We pride ourselves on our commitment to quality and customer satisfaction. Our grills are designed with the latest technology to ensure they are easy to use, durable, and perfect for any outdoor setting. From compact portable grills to larger models for big gatherings, we have something to suit everyone's needs.
        </p>
        <p>
          Our team is passionate about the outdoors and understands the importance of a good grill. We are always here to help you choose the right product and provide support and advice. Thank you for choosing Campy Pro as your go-to source for camping and picnic grills.
        </p>
      </div>
      <div className="about-divider">
        <hr />
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      <button className="scroll-button" onClick={scrollToSection}>
        <FaArrowDown />
      </button>
    </section>
  );
}

export default AboutUs;