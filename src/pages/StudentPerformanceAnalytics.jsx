import React, { useState } from "react";
import axios from "axios";
import "./StudentPerformanceAnalytics.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Ensure the correct path

const StudentPerformanceAnalytics = () => {
  const [students, setStudents] = useState("");
  const [insights, setInsights] = useState([]);

  const handleAnalyzePerformance = async () => {
    try {
      const studentData = students.split("\n").map((line) => {
        const [name, grades, attendance] = line.split(",");
        return { name: name.trim(), grades: Number(grades.trim()), attendance: Number(attendance.trim()) };
      });

      const response = await axios.post("http://localhost:5000/api/analyze-performance", {
        students: studentData,
      });
      setInsights(response.data.insights);
    } catch (error) {
      console.error("Error analyzing performance:", error);
    }
  };

  return (
    <section className="analytics-performance-container">
      {/* Background Video */}
      <video autoPlay muted loop className="analytics-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="analytics-content-overlay">
        <h2>Student Performance Analytics</h2>
        <textarea
          className="analytics-textarea"
          placeholder="Enter student data (name,grades,attendance) line by line"
          value={students}
          onChange={(e) => setStudents(e.target.value)}
        />
        <button className="analytics-analyze-button" onClick={handleAnalyzePerformance}>
          Analyze Performance
        </button>
        {insights.length > 0 && (
          <div className="analytics-insights-container">
            <h3>Insights:</h3>
            {insights.map((insight, index) => (
              <p key={index} className="analytics-insight">
                {insight.name}: {insight.riskLevel}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentPerformanceAnalytics;
