import React from "react";
import "../App.css";
import teamPhoto from "../assets/team-photo.png";
import founderPhoto from "../assets/founder.png";
import ceoPhoto from "../assets/ceo.png";

function TeamSection() {
  return (
    <section className="team-section">
      <blockquote className="team-mission">
        
      </blockquote>
      <h2>Meet the Team</h2>
      <img src={teamPhoto} alt="Team" className="team-photo" />
      <h2>Our Founders</h2>
      <div className="founders">
        <div className="founder-card">
          <img src={founderPhoto} alt="Founder" />
          <h3>Founder</h3>
          <h4>Sung-hyuk Kwon (Johny Kwony)</h4>
          <p>
            Johny Kwony is a visionary entrepreneur, founder, CEO, and investor, with a dynamic background in the music industry as a producer and musician. Fluent in multiple languages, he brings a unique global perspective to his work. As the founder of AI Melody Inc., Johny is committed to leveraging AI technology to help musicians around the world enhance their creativity, protect their intellectual property, and navigate the evolving music landscape.
          </p>
        </div>
        <div className="founder-card">
          <img src={ceoPhoto} alt="CEO" />
          <h3>CEO</h3>
          <h4>Ji-Hyung Kim (Rhody Kim)</h4>
          <p>
            Rhody Kim is a co-founder with a deep expertise in the K-pop industry, having successfully discovered and managed global platinum artists and written music for numerous K-pop superstars. As a businessman and engineer, he brings a wealth of knowledge to the team, blending creative insight with strategic business acumen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;