import React from "react";
import "../App.css";
import AnimatedSection from "../UI/AnimatedSection";

function VostcoMarketplaceSection() {
  return (
    <section className="vostco-marketplace-section">
      <AnimatedSection>
        <h2 className="vostco-marketplace-title">
        <span className="vostco-marketplace-main">The Voice-Over</span>
        <br />
        <span>
          <span className="marketplace-highlight">Marketplace</span> of the Future
        </span>
      </h2>
      </AnimatedSection>
      <AnimatedSection>
        <p className="vostco-marketplace-subtitle">
        Preserve your voice or power your content with secure, AI-enhanced voice solutions for global creators
      </p>
      </AnimatedSection>
      <div className="vostco-marketplace-grid">
      <AnimatedSection>
        <div>
          <div className="vostco-marketplace-icon">🎧</div>
          <h3>Your All-in-One Songwriting Marketplace</h3>
          <p>
            VOSTCO is a platform built by musicians, for musicians—designed to connect creators with clients looking to purchase custom songs or request creative services directly from VOSTCO's talent network.
          </p>
        </div>
        </AnimatedSection>
        <AnimatedSection>
        <div>
          <div className="vostco-marketplace-icon">🎵</div>
          <h3>
            Melody Creation<br />
            Made Easy
          </h3>
          <p>
            VOSTCO democratizes toplining and songwriting, removing creative barriers and inviting artists of all backgrounds to contribute. Whether you're a pro or just starting out, our platform welcomes your sound.
          </p>
        </div>
        </AnimatedSection>
        <AnimatedSection>
        <div>
          <div className="vostco-marketplace-icon">$</div>
          <h3>License and Sell Your Beats with Freedom</h3>
          <p>
            VOSTCO gives beatmakers the freedom to create and monetize their work. Sell beats with ease, offer multiple licensing options, and reach a global audience—no restrictions, just possibilities.
          </p>
        </div>
        </AnimatedSection>
        <AnimatedSection>
        <div>
          <div className="vostco-marketplace-icon">💿</div>
          <h3>Professional Finishing for Every Track</h3>
          <p>
            Through VOSTCO, Mixing and Mastering Engineers can deliver polished, high-quality songs tailored to client needs—ensuring every track sounds its absolute best.
          </p>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default VostcoMarketplaceSection; 