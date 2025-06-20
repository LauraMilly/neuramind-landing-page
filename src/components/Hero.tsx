import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/assets/Laura-Arts (1).mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      <Navbar /> 

      <div className="hero-content">
        <div className="hero-text">
          <h1></h1>
          <p></p>
        </div>
        <div className="hero-image">
          <img src="" alt="" />
        </div>
        <a href="#about" className="scroll-down">↓</a>

      </div>
    </div>
  );
};

export default Hero;
