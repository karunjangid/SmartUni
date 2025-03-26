import React, { useState } from "react";
import axios from "axios";
import "./EnhancedPublicSafety.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Ensure correct path to video file

const PublicSafety = () => {
  const [videoURL, setVideoURL] = useState("");
  const [alert, setAlert] = useState("");

  const handleAnalyzeVideo = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/safety-response", {
        videoURL,
      });
      setAlert(response.data.alert);
    } catch (error) {
      console.error("Error analyzing video:", error);
      setAlert("Unable to analyze video. Please try again.");
    }
  };

  return (
    <section className="public-safety-container">
      {/* Background Video */}
      <video autoPlay muted loop className="public-safety-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="public-safety-content-overlay">
        <h2>Public Safety and Emergency Response</h2>
        <form className="public-safety-form" onSubmit={(e) => e.preventDefault()}>
          <div className="public-safety-form-group">
            <label>Video Stream URL:</label>
            <input
              type="text"
              placeholder="Enter video stream URL"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
            />
          </div>
          <button className="public-safety-analyze-button" onClick={handleAnalyzeVideo}>
            Analyze Video
          </button>
        </form>

        {/* Display Alert */}
        {alert && <p className="public-safety-alert">{alert}</p>}
      </div>
    </section>
  );
};

export default PublicSafety;
