import React from "react";
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
      </div>
    </nav>
  );
}

export default Navbar;