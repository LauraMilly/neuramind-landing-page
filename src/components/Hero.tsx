import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
        });
      }
    }
  }, []);
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/laura-arts.mp4" type="video/mp4" />
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
        <a href="#about" className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </a>


      </div>
    </div>
  );
};

export default Hero;
