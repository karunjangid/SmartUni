import React, { useState } from "react";
import axios from "axios";
import "./EnhancedResourceManagement.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Make sure the path is correct

const ResourceManagement = () => {
  const [energy, setEnergy] = useState("");
  const [water, setWater] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleOptimizeResources = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/resource-management", {
        energy: Number(energy),
        water: Number(water),
      });
      console.log("API Response:", response.data);
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to analyze resources. Please check your input.");
      console.error("Error:", error);
    }
  };

  return (
    <section className="resource-management-container">
      {/* Background Video */}
      <video autoPlay muted loop className="resource-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="resource-content-overlay">
        <h2>Resource Management</h2>
        <form className="resource-form" onSubmit={(e) => e.preventDefault()}>
          <div className="resource-form-group">
            <label>Energy Usage (kWh):</label>
            <input
              type="number"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
              placeholder="Enter energy usage"
            />
          </div>
          <div className="resource-form-group">
            <label>Water Usage (liters):</label>
            <input
              type="number"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              placeholder="Enter water usage"
            />
          </div>
          <button className="resource-analyze-button" onClick={handleOptimizeResources}>
            Analyze Usage
          </button>
        </form>

        {/* Display Error */}
        {error && <p className="resource-error">{error}</p>}

        {/* Display Results */}
        {results && (
          <div className="resource-results">
            <h3>Analysis Results:</h3>
            <p><strong>Energy Cost:</strong> ${results.energyCost} per day</p>
            <p><strong>Water Cost:</strong> ${results.waterCost} per day</p>
            <p><strong>Carbon Footprint:</strong> {results.carbonFootprint} kg CO2</p>
            <h4>Suggestions:</h4>
            <ul>
              {results.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceManagement;
