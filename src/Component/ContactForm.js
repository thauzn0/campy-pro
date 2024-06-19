import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Have questions? Get in touch. We're happy to help!</h1>
        <p>Our customer service team is available Monday - Friday, 7am to 4pm Pacific Time.</p>
        <form>
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number*</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Questions?</h2>
        <ul>
          <li><a href="#">Return Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">FAQ Page</a></li>
        </ul>
        <h2>Contact</h2>
        <p>Phone: (872) 588-2008</p>
        <p>Email: info@campypro.com</p>
        <p>Address: IL, Chicago 90712 United States of America</p>
      </div>
    </div>
  );
};

export default ContactForm;
