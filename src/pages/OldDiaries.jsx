import React from "react";
import "./Extra.css";
import Od1 from "../assets/od1.png"
import Od2 from "../assets/od2.png"
import Od3 from "../assets/od3.jpg"

const OldDiaries = () => {
  const diaries = [
    { title: "First Steps", content: "Our journey started with a simple idea to digitize university operations.", date: "2018", image: Od1 },
    { title: "Major Breakthrough", content: "Launched advanced options and expanded globally.", date: "2020", image: Od2 },
    { title: "Looking Ahead", content: "We continue to innovate and pave the way for future advancements.", date: "2023", image: Od3 },
  ];

  return (
    <section className="diaries-section">
      <h1>Old Diaries</h1>
      <div className="diaries-container">
        {diaries.map((diary, index) => (
          <div className="diary-card" key={index}>
            <img src={diary.image} alt={diary.title} className="diary-image" />
            <h3>{diary.title}</h3>
            <p>{diary.content}</p>
            <span>{diary.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OldDiaries;
