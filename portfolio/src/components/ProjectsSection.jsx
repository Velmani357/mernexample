import React from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

const projects = [
  {
    title: "Student Location Alert System",
    details:
      "A real-time student tracking system using Flutter & Firebase. Sends SMS alerts to parents when students enter or leave the campus.",
    github: "#",
  },
  {
    title: "Currency Detector for Visually Impaired",
    details:
      "AI-powered currency recognition using CNN and Flutter with voice feedback, ensuring accessibility for visually impaired users.",
    github: "#",
  },
  {
    title: "Energy Credit Sharing System",
    details:
      "A blockchain-based system to share device charging credits with others. Promotes sustainable energy sharing.",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
