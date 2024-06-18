import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAboutUs = () => {
    document.getElementById('about-us-section').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src="/main_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>EXPLORE<br/>THE CAMPING GRILL<br/>WITH CAMPY PRO!</h1>
        <button className="cta-button" onClick={scrollToAboutUs}>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;