import React from "react";
import "./Extra.css";
import Th1 from "../assets/Th1.png";
import Th2 from "../assets/Th2.png";
import Th3 from "../assets/Th3.png";

const EventPictures = () => {
  const events = [
    { name: "TechFest 2020", image: Th1},
    { name: "Innovation Summit 2021", image: Th2},
    { name: "Global Education Forum 2023", image: Th3},
  ];

  return (
    <section className="events-section">
      <h1>Event Highlights</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            {/* Image */}
            <img src={event.image} alt={`${event.name}`} className="event-image" />
            {/* Video */}
            <h3>{event.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPictures;
