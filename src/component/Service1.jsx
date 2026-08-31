import React from "react";

const BLUE = "#1f7ae0";

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="16" stroke={BLUE} strokeWidth="2" />
      <circle cx="17" cy="17" r="10.5" stroke={BLUE} strokeWidth="2" />
      <circle cx="17" cy="17" r="4.5" fill={BLUE} />
    </svg>
  );
}

function ClockBadge() {
  // Real 24/7 Hours Service badge asset — place 24-7-service-badge.png next to this component
  return (
    <img
      src="./24-7-service-badge.png"
      alt="24/7 Hours Service"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}

export default function FokoremovalsContact() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#222", background: "#fff" }}>
      {/* Hero band with background photo placeholder */}
      <div
        style={{
          position: "relative",
          minHeight: 170,
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)), linear-gradient(120deg, #3a3a3a, #6b6b6b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Nav bar */}
        <nav
          style={{
            position: "absolute",
            top: 24,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            borderRadius: 6,
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: 36,
            padding: "12px 28px",
            width: "min(90%, 720px)",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo />
            <span style={{ fontWeight: 800, fontSize: 20, color: BLUE, letterSpacing: 0.5 }}>
              FOKOREMOVALS
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 15 }}>
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>
              Home
            </a>
            <a href="#" style={{ color: BLUE, textDecoration: "none", fontWeight: 600 }}>
              Contact
            </a>
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>
              Service
            </a>
          </div>
        </nav>
      </div>

      {/* Heading + subtext */}
      <div style={{ textAlign: "center", padding: "56px 20px 40px" }}>
        <h1 style={{ fontSize: 34, fontWeight: 400, margin: 0, lineHeight: 1.3, color: "#1a1a1a" }}>
          Speak with our experienced
          <br />
          team at <span style={{ color: BLUE }}>Fokoremovals</span>
        </h1>
        <p style={{ marginTop: 18, fontSize: 15, color: "#444" }}>
          We are available 24/7, we work round the clock.
          <br />
          Your Request, We Answer
        </p>
      </div>

      {/* Two column content */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 40px 80px",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 380px", color: BLUE, fontSize: 15.5, lineHeight: 1.7 }}>
          <p>
            Our friendly, knowledgeable staff are here to answer your questions, plan your
            move, and make sure everything runs smoothly. Whether you're relocating your
            home or business, we'll guide you through every step and tailor our services to
            your needs.
          </p>

          <h3 style={{ color: "#1a1a1a", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
            Exceptional Service Quality:
          </h3>
          <p style={{ marginTop: 0 }}>
            We combine professional handling, punctual arrivals, and flexible options to
            deliver smooth, stress-free moves every time.
          </p>

          <h3 style={{ color: "#1a1a1a", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
            Outstanding Customer Care:
          </h3>
          <p style={{ marginTop: 0 }}>
            Our responsive, friendly team listens, advises, and keeps you updated at every
            stage to ensure your complete satisfaction.
          </p>
        </div>

        <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "min(100%, 300px)" }}>
            <ClockBadge />
          </div>
        </div>
      </div>

      {/* Bottom band with background photo placeholder */}
      <div
        style={{
          minHeight: 90,
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.6)), linear-gradient(120deg, #2b2b2b, #4d4d4d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}