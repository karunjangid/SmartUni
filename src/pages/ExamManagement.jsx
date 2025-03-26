import React from "react";
import "../styles.css";

const ExamManagement = () => {
  const features = [
    {
      title: "Schedule Exams",
      description: "Create, update, and manage exam schedules.",
      icon: "/assets/schedule-exams-icon.png",
    },
    {
      title: "Notification System",
      description: "Notify students and faculty about upcoming exams.",
      icon: "/assets/notification-icon.png",
    },
    {
      title: "Results Management",
      description: "Generate and publish exam results efficiently.",
      icon: "/assets/results-icon.png",
    },
  ];

  return (
    <div className="exam-management-container">
      <h2 className="page-title">Exam Management Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamManagement;
