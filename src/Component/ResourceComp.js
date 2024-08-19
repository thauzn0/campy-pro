import React from 'react';
import './ResourceComp.css';
import { Link } from 'react-router-dom';
const ResourcesComp = () => {
  return (
    <section className="resources-section">
      <div className="sidebar">
        <ul className="sidebar-list">
        <li><Link to="/faq">FAQs</Link></li>
        <li><Link to="/resources">Resources</Link></li>
         
        <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
      
          <li><Link to="/product-warranty">Product Warranty</Link></li>
        </ul>
        <div className="contact-box">
          <h3>Need help?</h3>
          <p>We are happy to answer questions! Our customer service team is available Monday – Friday, 7am to 4pm Pacific Time.</p>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div className="main-content">
        <h1>Resources</h1>
        <div className="resources-content">
          <h2>Catalog</h2>
          <ul>
            <li><a href="#catalog">2024 Campy Pro Products Grill Catalog</a></li>
          </ul>
          <h2>Product Features Comparison Charts</h2>
          <ul>
            <li><a href="#marine-grills">All Marine Grills</a></li>
          </ul>
          <h2>Video Guides</h2>
          <ul>
            <li><a href="#video1">VIDEO: How to Identify Your Rectangle Grill Model</a></li>
            <li><a href="#video2">VIDEO: How to Connect the Regulator to Your Rectangular Grill</a></li>
  
        
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ResourcesComp;