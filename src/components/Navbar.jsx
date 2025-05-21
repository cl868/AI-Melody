import React, { useState } from "react";
import "../App.css";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

const TABS = [
  { label: "CALLIOPE AI", path: "/calliope-ai" },
  { label: "VOSTCO", path: "/vostco" },
  { label: "TEAM", path: "/team" },
  { label: "CONTACT US", path: "/contact-us" }
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo-left" style={{ cursor: "pointer" }} end>
        <Logo />
      </NavLink>
      <div className="navbar-tabs">
        {TABS.map(tab => (
          <NavLink
            key={tab.label}
            to={tab.path}
            className={({ isActive }) => `navbar-tab${isActive ? " active" : ""}`}
            end
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <div className="navbar-icons">
        <NavLink to="/login" className="navbar-action">Login</NavLink>
        <NavLink to="/signup" className="navbar-action">Sign Up</NavLink>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {TABS.map(tab => (
          <NavLink
            key={tab.label}
            to={tab.path}
            className={({ isActive }) => `mobile-menu-item${isActive ? " active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
            end
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;