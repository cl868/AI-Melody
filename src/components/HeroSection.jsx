import React from "react";
import "../App.css";
import AnimatedSection from "../UI/AnimatedSection";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <AnimatedSection>
      <section className="hero-section">
      <div className="hero-content">
        <h1 className="main-hero-title">
          Revolutionizing<br />
          <span className="highlight-red">Music Creation</span> <span style={{ color: "#ff2222" }}>with AI</span>
        </h1>
        <p className="subtitle">
          Turn your ideas into polished tracks with the help of AI-driven tools designed to amplify your creativity.<br />
          Harness the power of intelligent tools built for musicians, producers, and creators at every level.
        </p>
        <button 
          className="learn-more-demo"
          onClick={() => navigate('/login')}
        >
          Book a Demo →
        </button>
      </div>
    </section>
    </AnimatedSection>
  );
}

export default HeroSection;