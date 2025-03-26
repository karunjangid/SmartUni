import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" style={{textDecoration:"none"}}>
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>Smart University</h1>
      </div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
