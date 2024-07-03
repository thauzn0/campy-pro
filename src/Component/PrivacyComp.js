import React from 'react';
import './ResourceComp.css';
import { Link } from 'react-router-dom';
const PrivacyComp = () => {
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
        <h1>Privacy Policy</h1>
        <p>This Privacy Policy describes how Campy Pro collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>

        <div className="resources-content">
          
          
        <h2>Collecting Personal Information</h2>
      <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.</p>
      <h3>Device information</h3>
      <ul>
        <li>Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
        <li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
        <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
        <li>Disclosure for a business purpose: shared with our processor [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION].</li>
      </ul>

      <h3>Order information</h3>
      <ul>
        <li>Examples of Personal Information collected: name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</li>
        <li>Purpose of collection: to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
      </ul>
        </div>
      </div>
    </section>
  );
}

export default PrivacyComp;