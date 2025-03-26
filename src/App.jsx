import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdvanceOption from "./pages/AdvancedOptions"
import SmartClassScheduling from "./pages/SmartClassScheduling";
import StudentPerformanceAnalytics from "./pages/StudentPerformanceAnalytics";
import ResourceManagement from "./pages/ResourceManagement";
import PublicSafety from "./pages/PublicSafety";
import EnvironmentalMonitoring from "./pages/EnvironmentalMonitoring";
import AdministrativeTask from "./pages/AdministrativeTask";
import CampusNavigation from "./pages/CampusNavigation"
import WellnessMonitoring from "./pages/WellnessMonitoring"
import Eventmanagement from "./pages/EventManagement"
import StudentMgt from "./pages/StudentManagement"
import ExanMgt from "./pages/ExamManagement"
import Features from "./pages/Features"
import About from "./components/About"
import Feedback from "./pages/Feedback"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/AdvanceOption" element={<AdvanceOption/>} />
            <Route path="/smart-class-scheduling" element={<SmartClassScheduling />} />
            <Route path="/student-performance-analytics" element={<StudentPerformanceAnalytics />} />
            <Route path="/resource-management" element={<ResourceManagement />} />
            <Route path="/public-safety" element={<PublicSafety />} />
            <Route path="/environmental-monitoring" element={<EnvironmentalMonitoring />} />
            <Route path="/administrative-task" element={<AdministrativeTask />} />
            <Route path="/campus-navigation" element={<CampusNavigation />} />
            <Route path="/wellness-monitoring" element={<WellnessMonitoring />} />
            <Route path="/event-management" element={<Eventmanagement />} />
            <Route path="/student-management" element={<StudentMgt />} />
            <Route path="/exam-management" element={<ExanMgt />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Ensure this default export is present
export default App;
