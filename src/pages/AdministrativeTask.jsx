import React, { useState } from "react";
import axios from "axios";
import "./EnhancedAdministrativeTask.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Make sure the path is correct

const AdministrativeTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAutomateTask = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin-task", {
        taskDescription,
      });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Error automating task:", error);
      setFeedback("Failed to automate task. Please try again.");
    }
  };

  return (
    <section className="admin-task-container">
      {/* Background Video */}
      <video autoPlay muted loop className="admin-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="admin-content-overlay">
        <h2>Administrative Task Automation</h2>
        <textarea
          className="admin-textarea"
          placeholder="Enter task description (e.g., send reminder, generate report)"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button className="admin-automate-button" onClick={handleAutomateTask}>
          Automate Task
        </button>
        {feedback && <p className="admin-feedback">{feedback}</p>}
      </div>
    </section>
  );
};

export default AdministrativeTask;
