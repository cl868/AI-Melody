import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "../App.css";

function Footer({ setSelectedTab }) {
  return (
    <footer className="footer-advanced">
      <div className="footer-columns">
        <div>
          <h4>PRODUCTS</h4>
          <ul>
            <li><a href="#">CALLIOPE AI</a></li>
            <li><a href="#">VOCAT</a></li>
            <li><a href="#">VOCAI</a></li>
            <li><a href="#">VOCOP</a></li>
          </ul>
        </div>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">OUR MISSION</a></li>
            <li><a href="#">BLOG</a></li>
          </ul>
        </div>
        <div>
          <h4>SUPPORT</h4>
          <ul>
            <li><a href="#">COMMUNITY FORUM</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
        <div>
          <h4>LEGAL</h4>
          <ul>
            <li><a href="#">TERMS OF SERVICE</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <div
            className="footer-social-icons"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1.2rem",
              margin: "1rem 0",
            }}
          >
            <a href="https://www.instagram.com/aimelody_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={24} color="#000" />
            </a>
            <a href="https://www.youtube.com/@Ai_MELODY/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={24} color="#000" />
            </a>
            <a href="https://www.linkedin.com/company/ai-melody/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} color="#000" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright © 2025 AI Melody, Inc. All rights reserved.</span>
        <span>Itaewon 27-6, Seoul South Korea. AI Melody Inc. Global HQ</span>
      </div>
      <div className="footer-links" style={{ display: "flex", justifyContent: "flex-start", gap: "1.5rem" }}>
      </div>
    </footer>
    
  );
}

export default Footer;