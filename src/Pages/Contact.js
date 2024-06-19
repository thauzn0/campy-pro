import React, { useEffect } from 'react';
import ContactForm from '../Component/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
