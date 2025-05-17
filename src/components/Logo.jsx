import React from "react";
import "../App.css";
import logo from "../assets/AI Melody Logo4.PNG?url";

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="AI Melody Logo" className="main-logo" />
    </div>
  );
}

export default Logo; 