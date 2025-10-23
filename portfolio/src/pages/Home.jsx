import React from "react";

const Home = () => {
  <section id="home" className="page-transition"></section>
  return (
    <section
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        padding: "0 80px",
        background: "linear-gradient(135deg, #1B1B2F, #262636)",
        gap: "60px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating Sticker PNG */}
      <div
        style={{
          position: "relative",
          flexShrink: 0,
          animation: "float 4s ease-in-out infinite",
          filter: "drop-shadow(0 0 15px rgba(255,100,200,0.3))",
        }}
      >
        <img
          src="/assets/velu.png"
          alt="Velu Sticker"
          style={{
            display: "block",
            maxHeight: "400px",
            width: "auto",
          }}
        />
      </div>

      {/* Intro Text */}
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            color: "#FF64C8", // main neon pink
          }}
        >
          Hello, I'm <span style={{ color: "#B86BFF" }}>Velmani</span> {/* contrast */}
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "20px",
            color: "#B86BFF", // violet accent
          }}
        >
          Frontend Developer & AI Enthusiast
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "25px",
            color: "#FF64C8", // main color for readability
          }}
        >
          I build interactive web applications with modern design and AI
          integration. My projects are visually rich, accessible, and dynamic,
          bringing ideas to life with style.
        </p>
       <a
  href="/assets/Velmani%20R%20resume.pdf" // encode spaces as %20
  download
  style={{
    backgroundColor: "#C55FFF",
    color: "#fff",
    padding: "12px 25px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 0 15px rgba(197,95,255,0.5)",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A53FFF")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#C55FFF")}
>
  Download Resume
</a>


      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
   
  );
};

export default Home;
