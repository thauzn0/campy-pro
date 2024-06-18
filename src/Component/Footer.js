import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section stay-connected">
          <h2>Stay Connected</h2>
          <div className="email-subscription">
            <input type="email" placeholder="Enter your email address..." />
            <button>SUBMIT</button>
          </div>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="footer-section support">
          <h2>Support</h2>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#replacement-parts">Replacement Parts</a></li>
            <li><a href="#gift-cards">Gift Cards</a></li>
            <li><a href="#product-registration">Product Registration</a></li>
            <li><a href="#military-discount">Military Discount</a></li>
          </ul>
        </div>
        <div className="footer-section policies">
          <h2>Policies</h2>
          <ul>
            <li><a href="#shipping-policy">Shipping Policy</a></li>
            <li><a href="#return-policy">Return Policy</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#orders-payment">Orders and Payment</a></li>
            <li><a href="#product-warranty">Product Warranty</a></li>
            <li><a href="#wholesale-policies">Wholesale Policies and Programs</a></li>
          </ul>
        </div>
        <div className="footer-section company">
          <h2>Company</h2>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#affiliate-program">Affiliate Program</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section get-in-touch">
          <h2>Get in Touch</h2>
          <ul>
            <li><a href="tel:+18725882008">+1 (872) 588-2008</a></li>
            <li><a href="mailto:info@campypro.com">info@campypro.com</a></li>
            <li><a href="https://goo.gl/maps/4v2HkJ75fQz"> IL, Chicago  90712 United States of America</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Campy Pro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
