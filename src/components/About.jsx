import React from "react";
import "./About.css";
import InnovationIcon from "../assets/innovation-icon.png"; // Replace with actual image/icon path
import CollaborationIcon from "../assets/collaboration-icon.png"; // Replace with actual image/icon path
import TechnologyIcon from "../assets/technology-icon.png"; // Replace with actual image/icon path

const About = () => {
  return (
    <section className="about-section">
      {/* Heading */}
      <div className="about-header">
        <h1>About Smart University Management</h1>
        <p>A futuristic approach to revolutionizing educational management.</p>
      </div>

      {/* Features */}
      <div className="about-features">
        <div className="about-feature">
          <img src={InnovationIcon} alt="Innovation Icon" className="feature-icon" />
          <h3>Innovation</h3>
          <p>Pioneering technology solutions for smarter operations.</p>
        </div>
        <div className="about-feature">
          <img src={CollaborationIcon} alt="Collaboration Icon" className="feature-icon" />
          <h3>Collaboration</h3>
          <p>Connecting students, faculty, and resources seamlessly.</p>
        </div>
        <div className="about-feature">
          <img src={TechnologyIcon} alt="Technology Icon" className="feature-icon" />
          <h3>Advanced Technology</h3>
          <p>Driving excellence with cutting-edge tools and systems.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
