import React from 'react';
import './CoreValues.css';
import { FaCheckCircle, FaLightbulb, FaHandshake } from 'react-icons/fa';

const CoreValues = () => {
  return (
    <section id="core-values-section" className="core-values">
      <div className="value-section">
        <FaCheckCircle className="value-icon" />
        <h3>Quality</h3>
        <p>We prioritize quality in every product we create, ensuring durability and excellence. Our grills are made with top-notch materials and craftsmanship, offering a superior cooking experience that stands the test of time.</p>
      </div>
      <div className="divider"><hr /></div>
      <div className="value-section">
        <FaLightbulb className="value-icon" />
        <h3>Innovation</h3>
        <p>We embrace innovation to continuously improve and provide the best solutions. Our designs incorporate the latest technology and features, making outdoor cooking more convenient, efficient, and enjoyable.</p>
      </div>
      <div className="divider"><hr /></div>
      <div className="value-section">
        <FaHandshake className="value-icon" />
        <h3>Trust</h3>
        <p>We build trust through transparency, reliability, and customer satisfaction. Our commitment to service and support ensures that you can rely on Campy Pro for all your grilling needs, fostering a relationship built on trust.</p>
      </div>
    </section>
  );
}

export default CoreValues;