import React from "react";

const About = () => {
  return (
    
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "100px 50px",
        background: "linear-gradient(135deg, #1B1B2F, #2A1A2F)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Floating Glass Box */}
      <div
        style={{
          maxWidth: "800px",
          padding: "50px",
          borderRadius: "25px",
          border: "1px solid #B86BFF",  // subtle violet border
          backgroundColor: "rgba(27,27,47,0.6)", // semi-transparent
          backdropFilter: "blur(5px)",  // floating glass effect
          boxShadow: "0 0 2px #B86BFF, 0 0 10px #E0B0FF", // neon glow
          transition: "all 0.3s ease",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "#B86BFF",
            marginBottom: "5px",
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#CCC",
            marginBottom: "20px",
          }}
        >
          Hello! I'm <span style={{ color: "#E0B0FF", fontWeight: "bold" }}>Velmani</span>, a passionate
          Frontend Developer and AI Enthusiast. Currently iam pursuing my <span style={{ color: "#E0B0FF", fontWeight: "bold" }}>BE </span> 
          in <span style={{ color: "#E0B0FF", fontWeight: "bold" }}>Computer Science and Engineering </span> Prefinal year at Sri Shakthi Institute of Engineering and Technology.
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#CCC",
          }}
        >
          I combine <span style={{ color: "#E0B0FF", fontWeight: "bold" }}>frontend design</span> with 
          <span style={{ color: "#E0B0FF", fontWeight: "bold" }}> AI technologies</span> to deliver 
          futuristic, intuitive, and dynamic web experiences. My interfaces aim to be both stunning and seamless.
        </p>
      </div>
    </section>
  );
};

export default About;
