import React, { useEffect } from 'react';
import AboutUs from '../Component/AboutUs';
import AboutUsTeam from '../Component/AboutUsTeam';

const About = () => {
    useEffect(() => {
        window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
      }, []);
  return (
    <div>
      <AboutUs />
      <AboutUsTeam />
    </div>
  );
}

export default About;