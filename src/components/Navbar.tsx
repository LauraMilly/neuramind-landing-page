import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-links ${isOpen ? "show" : ""}`}>
        <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>Sobre Nós</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Serviços</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contate-nos</a>
      </nav>
    </header>
  );
};

export default Navbar;
