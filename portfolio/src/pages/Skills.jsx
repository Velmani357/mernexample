// Skills.jsx
import React from "react";

// You can replace these icons with your preferred ones or SVGs
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaLeaf } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 color="#E44D26" size={40} /> },
    { name: "CSS", level: 70, icon: <FaCss3Alt color="#1572B6" size={40} /> },
    { name: "JavaScript", level: 40, icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: "Java", level: 80, icon: <FaJava color="#007396" size={40} /> },
    { name: "SQL", level: 60, icon: <FaDatabase color="#F29111" size={40} /> },
    { name: "MongoDB", level: 80, icon: <FaLeaf color="#47A248" size={40} /> },
  ];

  const certificates = [
    "/assets/certi1.jpg",
    "/assets/certi2.jpg",
    "/assets/certi3.jpg",
    "/assets/certi4.jpg",
    "/assets/certi5.jpg",
  ];

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "100px 50px",
        background: "linear-gradient(135deg, #1B1B2F, #2A1A2F)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "70px",
      }}
    >
      {/* Skills Section */}
      <div style={{ width: "80%", textAlign: "center", margin: "0 auto" }}>
        <h2 style={{ fontSize: "3rem", color: "#B86BFF", marginBottom: "50px" }}>
          Skills
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "40px",
            justifyItems: "center",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                border: "2px solid #B86BFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                boxShadow: "0 0 0px #B86BFF, 0 0 8px #E0B0FF",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 0 15px #B86BFF, 0 0 25px #E0B0FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 8px #B86BFF, 0 0 15px #E0B0FF";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: `conic-gradient(#B86BFF ${skill.level * 3.6}deg, #ffffff11 0deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 1s ease",
                }}
              ></div>
              <div style={{ position: "relative", textAlign: "center", color: "#fff" }}>
                {skill.icon}
                <div style={{ fontWeight: "bold", marginTop: "5px" }}>{skill.name}</div>
                <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div style={{ width: "80%", textAlign: "center", margin: "0 auto" }}>
        <h2 style={{ fontSize: "3rem", color: "#B86BFF", marginBottom: "50px" }}>
          Certificates
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            justifyItems: "center",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "140px",
                borderRadius: "15px",
                overflow: "hidden",
                border: "1px solid #B86BFF",
                boxShadow: "0 0 3px #B86BFF, 0 0 8px #E0B0FF",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 10px #B86BFF, 0 0 15px #E0B0FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 5px #B86BFF, 0 0 10px #E0B0FF";
              }}
            >
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
