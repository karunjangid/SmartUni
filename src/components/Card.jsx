import React from "react";
import "../styles.css";

const Card = ({ title, description, icon }) => {
  return (
    <div className="card">
      <img src={icon} alt="Card Icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
