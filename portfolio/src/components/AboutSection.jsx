// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";
// import profileImg from "../assets/profile.jpg"; // replace with your image

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          Hi! I'm <strong>Velu</strong>, a passionate MERN Stack Developer.
          I love building interactive web applications and learning new
          technologies. I focus on clean code, modern UI/UX, and efficient
          functionality.
        </p>
        <p>
          I have experience in developing projects using React, Node.js,
          Express, and MongoDB. I’m always exploring new ideas and creating
          innovative solutions.
        </p>
      </motion.div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImg} alt="Velu" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
