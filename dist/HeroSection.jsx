import React from "react";
import "../App.css";
import aiMelodyVideo from "./Introducing Ai MELODY & Products.mp4";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="main-hero-title">
          Revolutionizing <span className="highlight-red">Music Creation</span><br />
          With AI
        </h1>
        <p className="subtitle">
          Turn your ideas into polished tracks with the help of AI-driven tools designed to amplify your creativity.<br />
          Harness the power of intelligent tools built for musicians, producers, and creators at every level.
        </p>
        <video
          className="main-hero-video"
          src={aiMelodyVideo}
          controls
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "18px",
            margin: "2rem auto",
            display: "block"
          }}
        >
          Your browser does not support the video tag.
        </video>
        <button className="cta-button">Book a Demo →</button>
      </div>
    </section>
  );
}

export default HeroSection;