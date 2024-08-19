import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/resources">Resources</Link></li>
  
          </ul>
        </div>
        <div className="footer-section policies">
          <h2>Policies</h2>
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/product-warranty">Product Warranty</Link></li>
          </ul>
        </div>
        <div className="footer-section company">
          <h2>Company</h2>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
      
          </ul>
        </div>
        <div className="footer-section get-in-touch">
          <h2>Get in Touch</h2>
          <ul>
            <li><a href="mailto:info@campypro.com">info@campypro.com</a></li>
            <li><a href="https://goo.gl/maps/4v2HkJ75fQz"> Chicago IL 60611 USA</a></li>
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
