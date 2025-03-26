import React from "react";
import "./Extra.css";
import Tm1 from "../assets/Tm1.png"
import Tm2 from "../assets/Tm.png"
import Tm3 from "../assets/Tm3.jpg"

const TeamIntroduction = () => {
  const teamMembers = [
    { name: "Alice Cooper", role: "CEO & Founder", image: Tm1 },
    { name: "Bob Marley", role: "CTO & Architect", image: Tm2 },
    { name: "Emma Watson", role: "Head of Innovation", image: Tm3 },
  ];

  return (
    <section className="team-section">
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={`${member.name}`} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamIntroduction;
