import React from "react";
import teamPhoto from "../assets/Team.png";
import johnPhoto from "../assets/John.png";
import rhodyPhoto from "../assets/rhody.png";
import AnimatedSection from "../UI/AnimatedSection";
import "../App.css";

function Team() {
  return (
      <section className="team-section">
      <AnimatedSection>
        <blockquote className="team-mission">
        “Our mission is to empower musicians and audio content creators by providing an all-in-one platform that enhances<br />
        creativity, collaboration, and growth.”
      </blockquote>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="team-title">Meet the Team</h2>
        </AnimatedSection>
        <AnimatedSection>
          <img src={teamPhoto} alt="Team" className="team-photo" />
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="team-title">Our Founders</h2>
            </AnimatedSection>
        <div className="founders">
        <div className="founder-card">
        <AnimatedSection>
          <img src={johnPhoto} alt="Founder" className="founder-photo" />
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="founder-role">CEO</h3>
          </AnimatedSection>
          <AnimatedSection>
            <h4 className="founder-name">Sung-hyuk Kwon (Johny Kwony)</h4>
          </AnimatedSection>
          <AnimatedSection>
            <p className="founder-desc">
            Johny Kwony is a visionary entrepreneur, founder, CEO, and investor, with a dynamic background in the music industry as a producer and musician. Fluent in multiple languages, he brings a unique global perspective to his work. As the founder of AI Melody Inc., Johny is committed to leveraging AI technology to help musicians around the world enhance their creativity, protect their intellectual property, and navigate the evolving music landscape. With a deep understanding of both the business and artistic sides of music, Johny is dedicated to empowering artists and revolutionizing the industry through cutting-edge technology.
          </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection>
          <div className="founder-card">
          <img src={rhodyPhoto} alt="CEO" className="founder-photo" />
          <h3 className="founder-role">COO</h3>
          <h4 className="founder-name">Ji-Hyung Kim (Rhody Kim)</h4>
          <AnimatedSection>
          <p className="founder-desc">
            Rhody Kim is a co-founder with a deep expertise in the K-pop industry, having successfully discovered and managed global platinum artists and written music for numerous K-pop superstars. As a businessman and engineer, he brings a wealth of knowledge to the team, blending creative insight with strategic business acumen. Rhody is dedicated to harnessing AI technology to drive AI Melody and its products, collaborating closely with the professional AI Melody team. His goal is to help musicians and music workers worldwide by providing cutting-edge AI tools that enhance creativity, streamline workflows, and foster new opportunities in the music industry.
          </p>
          </AnimatedSection>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Team;
