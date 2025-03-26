import React, { useState } from "react";
import axios from "axios";
import "./EnhancedEnvironmentMonitoring.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Update the path as needed

const EnvironmentMonitoring = () => {
  const [sensorData, setSensorData] = useState({
    airQuality: "",
    temperature: "",
    humidity: "",
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSensorData({ ...sensorData, [name]: Number(value) });
  };

  const handleAnalyzeEnvironment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/environment-monitoring", {
        sensorData,
      });
      setResults(response.data);
      setError(null);
    } catch (error) {
      console.error("Error analyzing environment:", error);
      setError("Failed to analyze environment. Please try again.");
      setResults(null);
    }
  };

  return (
    <section className="environment-monitoring-container">
      {/* Background Video */}
      <video autoPlay muted loop className="environment-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="environment-content-overlay">
        <h2>Environment Monitoring</h2>
        <form className="environment-form" onSubmit={(e) => e.preventDefault()}>
          <div className="environment-form-group">
            <label>Air Quality Index (AQI):</label>
            <input
              type="number"
              name="airQuality"
              value={sensorData.airQuality}
              onChange={handleInputChange}
              placeholder="Enter AQI (e.g., 120)"
            />
          </div>
          <div className="environment-form-group">
            <label>Temperature (°C):</label>
            <input
              type="number"
              name="temperature"
              value={sensorData.temperature}
              onChange={handleInputChange}
              placeholder="Enter temperature (e.g., 30)"
            />
          </div>
          <div className="environment-form-group">
            <label>Humidity (%):</label>
            <input
              type="number"
              name="humidity"
              value={sensorData.humidity}
              onChange={handleInputChange}
              placeholder="Enter humidity (e.g., 70)"
            />
          </div>
          <button className="environment-analyze-button" onClick={handleAnalyzeEnvironment}>
            Analyze
          </button>
        </form>

        {error && <p className="environment-error">{error}</p>}

        {results && (
          <div className="environment-results">
            <h3>Analysis Results:</h3>
            <ul>
              {results.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
            <h4>Recommendations:</h4>
            <ul>
              {results.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnvironmentMonitoring;
