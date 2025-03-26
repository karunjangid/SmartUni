import React from "react";
import Card from "../components/Card";
import "./Home.css";
import HeroVideo from "../assets/hero-video.mp4"
import StudentIcon from "../assets/student-icon.png"
import FacultytIcon from "../assets/faculty-icon.png"
import ExamIcon from "../assets/exam-icon.png"
import AdvnacedIcon from "../assets/Advanceicon.png"
import { Link } from "react-router-dom";
import About from "../components/About"
import Contact from "../pages/Contact"
import OldDiaries from "../pages/OldDiaries"
import Team from "../pages/TeamIntroduction"
import EventPic from "../pages/EventPictures"
import CustomerReviews from "../pages/CustomerReviews"

const Home = () => {
  return (
    <div>
<section className="hero-video">
  <video autoPlay loop muted controlsList="nodownload nofullscreen">
    <source src={HeroVideo} type="video/mp4" />
  </video>
  <div className="content">
    <h1>Welcome to Smart University Management</h1>
    <p>A modern solution for seamless university operations.</p>
  </div>
</section>

      <section className="tiktik-section">
        <h2>Our Features</h2>
        <div className="tiktik-container">
        <Link to="/student-management" className="feature-link" style={{textDecoration:"none"}}>
          <Card className="tiktik"
            title="Student Management"
            description="Manage student records and attendance."
            icon={StudentIcon}
          />
        </Link>
        <Link to="/faculty-management" className="feature-link" style={{textDecoration:"none"}}>
          <Card className="tiktik"
            title="Faculty Management"
            description="Track faculty schedules and assignments."
            icon={FacultytIcon}
          />
        </Link>
        <Link to="/exam-management" className="feature-link" style={{textDecoration:"none"}}>
          <Card className="tiktik"
            title="Exam Management"
            description="Simplify exam schedules and results."
            icon={ExamIcon}
          />
        </Link>
        <Link to="/AdvanceOption" className="feature-link" style={{textDecoration:"none"}}>
        <Card className="tiktik"
            title="Advanced Options"
            description="Studnet performance,wellness, campus naviation and more."
            icon={AdvnacedIcon}
          />
        </Link>
        </div>
      </section>
      <About />
      <CustomerReviews />
      <EventPic />
      <OldDiaries />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
