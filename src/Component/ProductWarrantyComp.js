import React from 'react';
import './ResourceComp.css';
import { Link } from 'react-router-dom';

const ProductWarrantyComp = () => {
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
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="main-content">
        <h1>Product Warranty</h1>
        <p>Thank you for your interest in the products and services of Campy Pro. This Limited Warranty applies to physical goods, and only for physical goods, purchased from Campy Pro.</p>

        <div className="resources-content">
          <h2>What does this limited warranty cover?</h2>
          <p>This Limited Warranty covers any defects in material or workmanship under normal use during the Warranty Period. During the Warranty Period, Campy Pro will repair or replace, at no charge, products or parts of a product that proves defective because of improper material or workmanship, under normal use and maintenance.</p>
          
          <h3>What will we do to correct problems?</h3>
          <p>Campy Pro will either repair the Product at no charge, using new or refurbished replacement parts.</p>

          <h3>How long does the coverage last?</h3>
          <p>The Warranty Period for Physical Goods purchased from Campy Pro is 365 days from the date of purchase. A replacement Physical Good or part assumes the remaining warranty of the original Physical Good or 365 days from the date of replacement or repair, whichever is longer.</p>

          <h3>What does this limited warranty not cover?</h3>
          <p>This Limited Warranty does not cover any problem that is caused by conditions, malfunctions or damage not resulting from defects in material or workmanship.</p>

          <h3>What do you have to do?</h3>
          <p>To obtain warranty service, you must first contact us to determine the problem and the most appropriate solution for you.</p>
        </div>
      </div>
    </section>
  );
}

export default ProductWarrantyComp;
