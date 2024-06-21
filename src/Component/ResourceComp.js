import React from 'react';
import './ResourceComp.css';

const ResourcesComp = () => {
  return (
    <section className="resources-section">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#replacement-parts">Replacement Parts</a></li>
          <li><a href="#shipping-policy">Shipping Policy</a></li>
          <li><a href="#return-policy">Return Policy</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-conditions">Terms & Conditions</a></li>
          <li><a href="#orders-payment">Orders and Payment</a></li>
          <li><a href="#product-warranty">Product Warranty</a></li>
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
            <li><a href="#catalog">2023 Magma Products Marine and Outdoor Catalog</a></li>
          </ul>
          <h2>Product Features Comparison Charts</h2>
          <ul>
            <li><a href="#marine-grills">All Marine Grills</a></li>
            <li><a href="#kettle-grills">All Kettle Grills</a></li>
          </ul>
          <h2>Video Guides</h2>
          <ul>
            <li><a href="#video1">VIDEO: How to Identify Your Rectangle Grill Model</a></li>
            <li><a href="#video2">VIDEO: How to Connect the Regulator to Your Rectangular Grill</a></li>
            <li><a href="#video3">VIDEO: Troubleshooting Igniter Issues with Your Rectangular Grill</a></li>
            <li><a href="#video4">VIDEO: How to Replace the Igniter on Your Rectangular Grill</a></li>
            <li><a href="#video5">VIDEO: Troubleshooting Low Flame or Inconsistent Heat</a></li>
            <li><a href="#video6">VIDEO: How to Install Single Mounts for Your Rectangular Grill</a></li>
            <li><a href="#video7">VIDEO: How to Install Dual Mounts for Your Rectangular Grill</a></li>
            <li><a href="#video8">VIDEO: Unboxing Your Marine Kettle Gas Grill</a></li>
            <li><a href="#video9">VIDEO: Unboxing Your Marine Kettle 3 Combination Gas Grill</a></li>
        
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ResourcesComp;