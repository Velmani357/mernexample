// SkillsCertificates.jsx
import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiJava, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, percentage: 90 },
  { name: "CSS", icon: <SiCss3 />, percentage: 85 },
  { name: "JavaScript", icon: <SiJavascript />, percentage: 80 },
  { name: "Java", icon: <SiJava />, percentage: 75 },
  { name: "SQL", icon: <SiMysql />, percentage: 70 },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 65 },
];

const certificates = [
  "/assets/certi1.jpg",
  "/assets/certi2.jpg",
  "/assets/certi3.jpg",
  "/assets/certi4.jpg",
  "/assets/certi5.jpg",
];

const SkillsCertificates = () => {
  return (
    <section
      id="skills-certificates"
      style={{
        padding: "100px 50px",
        background: "linear-gradient(135deg, #1B1B2F, #2A1A2F)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "70px",
      }}
    >
      {/* Skills Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2 style={{ fontSize: "3rem", color: "#B86BFF", marginBottom: "40px" }}>
          Skills
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "140px",
                height: "140px",
              }}
            >
              {/* Circle */}
              <svg width="140" height="140">
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#444"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#B86BFF"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 60}
                  strokeDashoffset={
                    2 * Math.PI * 60 * (1 - skill.percentage / 100)
                  }
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                />
              </svg>
              {/* Icon and text */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B86BFF",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <div style={{ fontSize: "2rem" }}>{skill.icon}</div>
                <span>{skill.name}</span>
                <span style={{ fontSize: "0.9rem", color: "#fff" }}>
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2 style={{ fontSize: "3rem", color: "#B86BFF", marginBottom: "40px" }}>
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
                boxShadow: "0 0 10px #B86BFF, 0 0 20px #E0B0FF",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 15px #B86BFF, 0 0 25px #E0B0FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 10px #B86BFF, 0 0 20px #E0B0FF";
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

export default SkillsCertificates;
