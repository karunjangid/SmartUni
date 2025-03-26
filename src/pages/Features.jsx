import React from "react";
import "./EnhancedFeatures.css"; // Updated CSS file with unique class names
import StudentIcon from "../assets/student-icon.png";
import FacultyIcon from "../assets/faculty-icon.png";
import ExamIcon from "../assets/exam-icon.png";
import StudentVideo from "../assets/student-management.mp4";
import FacultyVideo from "../assets/faculty-management.mp4";
import ExamVideo from "../assets/exam-schduling.mp4";
import AdvnacedIcon from "../assets/Advanceicon.png"

const Features = () => {
  const features = [
    {
      title: "Student Management",
      description: "Effortlessly manage student records, attendance, and communication in real-time.",
      icon: StudentIcon, // Direct reference to the imported asset
      video: StudentVideo, // Direct reference to the imported asset
    },
    {
      title: "Faculty Management",
      description: "Simplify faculty schedules, assignments, and performance tracking with ease.",
      icon: FacultyIcon,
      video: FacultyVideo,
    },
    {
      title: "Exam Scheduling",
      description: "Seamlessly manage and automate exam schedules and publish results efficiently.",
      icon: ExamIcon,
      video: ExamVideo,
    },
    {
      title: "Advanced Options",
      description: "Studnet performance,wellness, campus naviation and more.",
      icon: AdvnacedIcon,
    },
  ];

  return (
    <section className="features-section-container">
      {/* Header */}
      <h1 className="features-section-header">Our Features</h1>

      {/* Features Grid */}
      <div className="features-section-grid">
        {features.map((feature, index) => (
          <div className="features-section-card" key={index}>
            {/* Interactive Icon */}
            <div className="features-section-card-media">
              <img src={feature.icon} alt={feature.title} className="features-section-icon" />
              <video
                className="features-section-video"
                src={feature.video}
                autoPlay
                muted
                loop
              ></video>
            </div>
            {/* Content */}
            <div className="features-section-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
