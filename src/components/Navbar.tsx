import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span>K</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
