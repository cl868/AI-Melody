import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <section
      className="login-section"
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: "700px",
        paddingTop: "0rem"
      }}
    >
      <h2
        className="login-title"
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: "2.5rem",
          textAlign: "center",
          fontFamily: "'Times New Roman', Times, serif",
          whiteSpace: "nowrap",
          width: "100%",
          color: "#222"
        }}
      >
        VOSTCO Account
      </h2>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 500,
          width: "100%",
          margin: "0"
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="username"
          className = "login-input"
          
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className = "login-input"
        />
        <button
          className="cta-button"
          type="submit"
          style={{ width: "500px", marginTop: "0.5rem", marginLeft: "100px" }}
        >
          Log In
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: "0.5rem", width: 500 }}>
        <Link
          to="/forgot-password"
          style={{
            color: "#6b8cff",
            fontSize: "1.05rem",
            textDecoration: "none",
            display: "block",
            marginBottom: "0.3rem",
            marginLeft: "220px",
            fontFamily: "'Times New Roman', Times, serif",
            marginTop: "8px"
          }}
        >
          Forgot Password? ↗
        </Link>
        <Link
          to="/signup"
          style={{
            color: "#6b8cff",
            fontSize: "1.05rem",
            textDecoration: "none",
            display: "block",
            fontFamily: "'Times New Roman', Times, serif",
            marginLeft: "210px",
            marginTop: "6px"
          }}
        >
          Create VOSTCO Account
        </Link>
      </div>
    </section>
  );
}

export default Login;
