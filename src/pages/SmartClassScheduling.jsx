import React, { useState } from "react";
import axios from "axios";
import "./Smartclass.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4";

const SmartClassScheduling = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [professor, setProfessor] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSchedule = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/schedule-class", {
        roomNumber,
        professor,
        studentCount,
      });
      setSchedule(response.data.schedule);
    } catch (error) {
      console.error("Error scheduling class:", error);
    }
  };

  return (
    <section className="enhanced-scheduling-container">
      {/* Background Video */}
      <video autoPlay muted loop className="enhanced-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="enhanced-content-overlay">
        <h2>Smart Class Scheduling</h2>
        <form className="enhanced-scheduling-form" onSubmit={(e) => e.preventDefault()}>
          <div className="enhanced-form-group">
            <label>Room Number</label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              placeholder="Enter room number"
            />
          </div>
          <div className="enhanced-form-group">
            <label>Professor Name</label>
            <input
              type="text"
              value={professor}
              onChange={(e) => setProfessor(e.target.value)}
              placeholder="Enter professor's name"
            />
          </div>
          <div className="enhanced-form-group">
            <label>Student Count</label>
            <input
              type="number"
              value={studentCount}
              onChange={(e) => setStudentCount(e.target.value)}
              placeholder="Enter student count"
            />
          </div>
          <button type="button" className="enhanced-generate-button" onClick={handleSchedule}>
            Generate Schedule
          </button>
        </form>
        {schedule && <div className="enhanced-schedule-display">{schedule}</div>}
      </div>
    </section>
  );
};

export default SmartClassScheduling;
