import React from 'react';
import './ResourceComp.css';
import { Link } from 'react-router-dom';
const TermComp = () => {
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
      <h1>Terms & Conditions</h1>
        <p>These Terms & Conditions outline the rules and regulations for the use of Campy Pro's website.</p>

        <div className="resources-content">
          
          
        <h2>Introduction</h2>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Campy Pro if you do not agree to take all of the terms and conditions stated on this page.</p>
          
          <h3>Cookies</h3>
          <p>We employ the use of cookies. By accessing Campy Pro, you agreed to use cookies in agreement with the Campy Pro's Privacy Policy.</p>

          <h3>License</h3>
          <p>Unless otherwise stated, Campy Pro and/or its licensors own the intellectual property rights for all material on Campy Pro. All intellectual property rights are reserved. You may access this from Campy Pro for your own personal use subjected to restrictions set in these terms and conditions.</p>

          <h3>User Comments</h3>
          <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Campy Pro does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Campy Pro, its agents and/or affiliates.</p>

          <h3>Hyperlinking to our Content</h3>
          <p>The following organizations may link to our Website without prior written approval:</p>
        </div>
      </div>
    </section>
  );
}

export default TermComp;