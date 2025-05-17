import React, { useState } from "react";
import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real password reset logic
    setSubmitted(true);
    // Example: alert(`Password reset link sent to ${email}`);
  };

  return (
    <section
      className="login-section"
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "0"
      }}
    >
      <img
        src="/logo5.png"
        alt="Logo"
        style={{
          width: "80px",
          marginBottom: "1.5rem",
          marginTop: "0"
        }}
      />
      <h2
        className="login-title"
        style={{
          marginTop: "0"
        }}
      >
        Forgot Password
      </h2>
      {!submitted ? (
        <form
          className="login-form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: 400,
            width: "100%",
            margin: "0"
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="login-input"
            style={{
              width: "100%", marginLeft: "-50px", marginTop: "20px"
              
            }}
          />
          <button className="cta-button" type="submit" style={{ width: "100%", marginTop: "0.3rem", marginLeft: "-6px" }}>
            Send Reset Link
          </button>
        </form>
      ) : (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p>
            If an account with <b>{email}</b> exists, a password reset link has been sent.
          </p>
        </div>
      )}
    </section>
  );
}

export default ForgotPassword;