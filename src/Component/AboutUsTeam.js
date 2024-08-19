import React from 'react';
import './AboutUsTeam.css';
import teamMember1 from '../Assets/founder.png'; // Team member photo
import teamMember2 from '../Assets/founder.png'; // Team member photo

const AboutUsTeam = () => {
  return (
    <section id="about-us-team-section" className="about-us-team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={teamMember1} alt="Team Member 1" className="team-member-photo" />
          <h3>Ferit Uzun</h3>
          <p>Founder & CEO</p>
        </div>
        
        {/* Add more team members as needed */}
      </div>
    </section>
  );
}

export default AboutUsTeam;