import React from 'react';
import './FounderMessage.css';
import founderImage from '../Assets/founder.png'; // Kurucunun fotoğrafı

const FounderMessage = () => {
  return (
    <section className="founder-message">
      <div className="founder-image">
        <img src={founderImage} alt="Founder" />
      </div>
      <div className="founder-hr"></div>
      <div className="founder-text">
        <h2>A Message from Our Founder</h2>
        <p>
          Welcome to Campy Pro! <br></br> <br></br> Our mission is to provide you with the best camping and picnic grills to make your outdoor experiences unforgettable.<br></br> 
          We are committed to quality, innovation, and trust.<br></br><br></br> Thank you for choosing Campy Pro.
        </p>
        <p>- Ferit Uzun</p>
      </div>
    </section>
  );
}

export default FounderMessage;
