import React, { useEffect, useState } from "react";

import "../styles.css";
import Detail from "../assets/report-icon.png"
import Attendance from "../assets/attendance-icon.png"
import Report from "../assets/report-icon.png"

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("/api/students");
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  const features = [
    {
      title: "View Student Details",
      description: "Access and edit student profiles, academic records, and personal details.",
      icon: {Detail},
    },
    {
      title: "Attendance Management",
      description: "Track and update attendance records for students.",
      icon: {Attendance},
    },
    {
      title: "Report Generation",
      description: "Generate detailed academic and attendance reports.",
      icon: {Report},
    },
  ];

  return (
    <div className="student-management-container">
      <h2 className="page-title">Student Management</h2>
      <div className="students-list">
        {students.map((student) => (
          <div key={student._id} className="student-card">
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Attendance: {student.attendance.length} records</p>
          </div>
        ))}
      </div>

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

export default StudentManagement;
