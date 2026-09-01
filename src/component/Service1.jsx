import React from "react";

const BLUE = "#1f7ae0";

function ClockBadge() {
  return (
    <img
      src="/Image/22.png"
      alt="24/7 Hours Service"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}

export default function FokoremovalsContact() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#222", background: "#fff" }}>
      {/* Heading + subtext */}
      <div style={{ textAlign: "center", padding: "16px 20px 10px" }}>
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
          padding: "10px 40px 20px",
          gap: 30,
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

    </div>
  );
}