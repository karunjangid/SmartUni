import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaChartBar, FaCog, FaShieldAlt, FaLeaf, FaRobot, FaUsers, FaMapMarkedAlt, FaCalendarAlt, FaHeartbeat } from "react-icons/fa"; // Import icons
import "./Advance.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4";

const AdvancedOptions = () => {
  const features = [
    { name: "Smart Class Scheduling With AI", path: "/smart-class-scheduling", icon: <FaChalkboardTeacher /> },
    { name: "Student Performance Analytics With Graphs", path: "/student-performance-analytics", icon: <FaChartBar /> },
    { name: "Resource Management Calculation", path: "/resource-management", icon: <FaCog /> },
    { name: "Public Safety and Emergency Response", path: "/public-safety", icon: <FaShieldAlt /> },
    { name: "Environmental Monitoring By Data", path: "/environmental-monitoring", icon: <FaLeaf /> },
    { name: "Administrative Task Automation", path: "/administrative-task", icon: <FaRobot /> },
    { name: "Campus Navigation System With Map", path: "/campus-navigation", icon: <FaMapMarkedAlt /> },
    { name: "Smart Event Management By AI", path: "/event-management", icon: <FaCalendarAlt /> },
    { name: "Health and Wellness Monitoring", path: "/wellness-monitoring", icon: <FaHeartbeat /> },
  ];

  return (
    <div className="advanced-options-container">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="content-overlay">
        <h2>Advanced Options</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link key={index} to={feature.path} className="card-link">
              <div className="card">
                <div className="card-icon">{feature.icon}</div>
                <h3 className="feature-name">{feature.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  );
};

export default AdvancedOptions;
