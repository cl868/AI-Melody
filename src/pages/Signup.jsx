import React, { useState } from "react";
import "../App.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${email}`);
  };

  return (
    <section
      className="signup-section"
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-40px"
      }}
    >
      <h2
        className="signup-title"
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: "0.5rem",
          textAlign: "center",
          fontFamily: "'Times New Roman', Times, serif",
          whiteSpace: "nowrap",
          width: "100%",
          color: "#222",
          marginTop: "5rem"
        }}
      >
        <h1 style = {{ fontSize: "2.4rem",
            marginTop: "-0.3rem"
        }}>VOSTCO Account</h1>
      </h2>
      <form
        className="signup-form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 800,
          width: "100%",
          margin: "0 auto"
        }}
      >
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="username"
          style={{
            width: "250px"
          }}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          style={{
            width: "250px"
          }}
        />
        <input
          type="password"
          placeholder="Re-enter Password"
          value={reenteredPassword}
          onChange={e => setReenteredPassword(e.target.value)}
          required
          className="signup-input"
        />
        <button
          className="cta-button"
          type="submit"
          style={{ width: "500px", marginTop: "1.5rem" }}
        >
          Create Account
        </button>
      </form>
    </section>
  );
}

export default Signup;