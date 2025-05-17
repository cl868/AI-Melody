import React from "react";
import calliopeImg from "../assets/calliope-ui.png";
import { GiDna1 } from "react-icons/gi";
import { MdRecordVoiceOver, MdMic } from "react-icons/md";
import "../App.css";
import AnimatedSection from "../UI/AnimatedSection";

function CalliopeAI() {
  return (
    
    <section className="calliope-ai-section">
      <AnimatedSection>
      <h1 className="calliope-title">CALLIOPE AI</h1>
      </AnimatedSection>
      <AnimatedSection>
      <h2 className="calliope-subtitle">Your Voice, Reimagined.</h2>
      </AnimatedSection>
      <div className="calliope-main-row">
        <div className="calliope-description">
          <p>
          <AnimatedSection>
            <span className="calliope-desc-bold">Calliope AI</span> is a groundbreaking voice technology platform that empowers individuals to speak with their own voice — even without vocal cords. Using advanced AI lip-reading, voice cloning, and custom vocal synthesis, Calliope enables seamless, natural communication through just lip movements. Whether you're preserving your voice for the future, regaining speech after loss, or creating entirely new vocal identities, Calliope offers accessible, expressive voice solutions that are deeply human and remarkably innovative.
            </AnimatedSection>
          </p>
        </div>
        <AnimatedSection>
        <div className="calliope-image-col">
          <img src={calliopeImg} alt="Calliope AI UI" className="calliope-ui-img" />
        </div>
        </AnimatedSection>
      </div>
      <div className="calliope-features-row">
      <AnimatedSection>
        <div className="calliope-feature">
          <GiDna1 className="calliope-feature-icon" />
          <h3>Voice Cloning</h3>
          <p>Preserve your unique voice with just 3 minutes of recording</p>
        </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="calliope-feature">
          <MdRecordVoiceOver className="calliope-feature-icon" />
          <h3>Lip Read to Voice</h3>
          <p>Communicate through lip movements interpreted in real-time by AI</p>
        </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="calliope-feature">
          <MdMic className="calliope-feature-icon" />
          <h3>Custom Voice Creation</h3>
          <p>Mix different tones and styles to generate a voice that fits your preferences</p>
        </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="calliope-launch-row">
        <span className="calliope-launch-text">LAUNCHING 2026</span>
      </div>
      </AnimatedSection>
    </section>
  );
}

export default CalliopeAI;