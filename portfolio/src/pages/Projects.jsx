// Projects.jsx
import React, { useState } from "react";
import { FaGithub, FaInfoCircle, FaArrowLeft } from "react-icons/fa";

const projects = [
  {
    title: "Vault of Time",
    shortDesc: "Ancient coin detection",
    fullDesc:
      "Vault of Time is an AI-powered application that detects and classifies ancient coins. The system uses deep learning models to recognize coins and provide detailed information for collectors and historians.",
    techStack: "React, Flask, TensorFlow, OpenCV",
    workflow: "Model training with dataset augmentation, API integration, UI development",
    features: ["Coin detection", "Classification", "AI predictions"],
    challenges: ["Image preprocessing", "Model accuracy", "Real-time performance"],
    image: "/assets/c5.jpg",
    github: "https://github.com/Velmani357",
  },
  {
    title: "Automobile OSS",
    shortDesc: "Selling spare parts",
    fullDesc:
      "Automobile OSS is an open-source platform for buying and selling automobile spare parts. It provides an inventory management system, a user-friendly UI, and secure transactions.",
    techStack: "React, Node.js, MongoDB",
    workflow: "Full-stack development with REST APIs, CRUD operations, user authentication",
    features: ["Product listing", "Inventory management", "Secure transactions"],
    challenges: ["Database design", "Data syncing", "Scalability"],
    image: "/assets/c3.jpg",
    github: "https://github.com/Velmani357",
  },
  {
    title: "Student Location Alert System",
    shortDesc: "Get notified about the student",
    fullDesc:
      "This system notifies parents or advisors when a student enters or leaves a campus using geofencing and SMS alerts. It works even if GPS is off using background location tracking and Firebase integration.",
    techStack: "Flutter, Firebase, Geofencing",
    workflow: "Real-time location tracking, backend integration, alert system implementation",
    features: ["Geofencing alerts", "SMS notifications", "Background tracking"],
    challenges: ["Real-time updates", "Device compatibility", "Battery optimization"],
    image: "/assets/c2.jpg",
    github: "https://github.com/Velmani357",
  },
  {
    title: "Currency Detector",
    shortDesc: "For visually impaired",
    fullDesc:
      "Currency Detector helps visually impaired users identify paper currency using a camera. It uses CNN models and image preprocessing to give accurate predictions in real-time.",
    techStack: "Flutter, CNN, TensorFlow, Cloud API",
    workflow: "Image preprocessing, model integration, API calls, accessibility implementation",
    features: ["Currency detection", "Voice feedback", "Cloud API integration"],
    challenges: ["Model accuracy", "Low-light detection", "Voice feedback latency"],
    image: "/assets/c1.jpg",
    github: "https://github.com/Velmani357",
  },
  {
    title: "FocusLock",
    shortDesc: "Progress checking & alert if tab switched",
    fullDesc:
      "FocusLock is a productivity tool that monitors user focus on tasks. It tracks active browser tabs and gives alerts if users switch tabs, helping maintain productivity and track progress.",
    techStack: "React, Redux, Firebase",
    workflow: "Focus tracking, analytics, notification system, UI implementation",
    features: ["Tab monitoring", "Progress tracking", "Custom alerts"],
    challenges: ["Cross-tab detection", "Real-time notifications", "Analytics dashboard"],
    image: "/assets/c4.jpg",
    github: "https://github.com/Velmani357",
  },
];

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: "1500px", width: "320px", height: "460px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s ease-in-out",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          borderRadius: "20px",
        }}
      >
        {/* Front Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #B86BFF",
            boxShadow: "0 0 10px #B86BFF, 0 0 20px #E0B0FF",
            backgroundColor: "rgba(27,27,47,0.6)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
          <div
            style={{
              padding: "15px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#B86BFF",
                  fontSize: "1.4rem",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: "#CCC", fontSize: "1rem", marginBottom: "15px" }}>
                {project.shortDesc}
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setFlipped(true)}
                style={{
                  flex: 1,
                  color: "#fff",
                  backgroundColor: "#B86BFF",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A05FFF")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B86BFF")}
              >
                <FaInfoCircle /> View Details
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  color: "#fff",
                  backgroundColor: "#5FB8FF",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3FA8FF")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5FB8FF")}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "20px",
            overflowY: "auto",
            border: "1px solid #B86BFF",
            boxShadow: "0 0 10px #B86BFF, 0 0 20px #E0B0FF",
            backgroundColor: "rgba(27,27,47,0.6)",
            color: "#CCC",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "20px", flex: 1 }}>
            <h3
              style={{
                color: "#B86BFF",
                fontSize: "1.4rem",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>
            <p style={{ marginBottom: "10px" }}>{project.fullDesc}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <p>
              <strong>Workflow:</strong> {project.workflow}
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p>
              <strong>Challenges:</strong>
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setFlipped(false)}
            style={{
              margin: "10px auto",
              padding: "8px 15px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#B86BFF",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A05FFF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B86BFF")}
          >
            <FaArrowLeft /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 50px",
        background: "linear-gradient(135deg, #1B1B2F, #2A1A2F)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <h2 style={{ fontSize: "3rem", color: "#B86BFF" }}>Projects</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
