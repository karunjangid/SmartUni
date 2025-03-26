import React, { useState } from "react";
import axios from "axios";
import "./EnhancedWellnessMonitoring.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Adjust the path as needed

const WellnessMonitoring = () => {
  const [data, setData] = useState({
    heartRate: "",
    sleepHours: "",
    activityHours: "",
  });

  const [insights, setInsights] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAnalyzeData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/wellness-monitoring/analyze", {
        heartRate: Number(data.heartRate),
        sleepHours: Number(data.sleepHours),
        activityHours: Number(data.activityHours),
      });
      setInsights(response.data.insights);
    } catch (error) {
      console.error("Error analyzing wellness data:", error);
    }
  };

  return (
    <section className="wellness-monitoring-container">
      {/* Background Video */}
      <video autoPlay muted loop className="wellness-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="wellness-content-overlay">
        <h2>Wellness Monitoring</h2>
        <form className="wellness-form" onSubmit={(e) => e.preventDefault()}>
          <div className="wellness-form-group">
            <label>Heart Rate (BPM):</label>
            <input
              type="number"
              name="heartRate"
              value={data.heartRate}
              onChange={handleInputChange}
              placeholder="Enter heart rate"
            />
          </div>
          <div className="wellness-form-group">
            <label>Sleep Hours (per day):</label>
            <input
              type="number"
              name="sleepHours"
              value={data.sleepHours}
              onChange={handleInputChange}
              placeholder="Enter sleep hours"
            />
          </div>
          <div className="wellness-form-group">
            <label>Activity Hours (per day):</label>
            <input
              type="number"
              name="activityHours"
              value={data.activityHours}
              onChange={handleInputChange}
              placeholder="Enter activity hours"
            />
          </div>
          <button className="wellness-analyze-button" onClick={handleAnalyzeData}>
            Analyze Wellness
          </button>
        </form>

        {insights && (
          <div className="wellness-results">
            <h3>Insights:</h3>
            <p><strong>Heart Rate:</strong> {insights.heartRate}</p>
            <p><strong>Sleep:</strong> {insights.sleep}</p>
            <p><strong>Activity:</strong> {insights.activity}</p>
            <p><strong>Overall Wellness:</strong> {insights.overall}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WellnessMonitoring;
