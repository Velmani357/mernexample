import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          Hi! I'm <strong>Velu</strong>, a passionate MERN Stack Developer.
          I love building interactive web applications and creating modern,
          user-friendly designs. My goal is to make technology accessible
          and visually appealing.
        </p>
        <p>
          I enjoy working with React, Node.js, Express, and MongoDB. I also
          love experimenting with animations, UI/UX, and innovative project ideas.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
