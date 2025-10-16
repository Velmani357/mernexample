import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="light-effect"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span>Velu</span> 👋</h1>
        <p>MERN Stack Developer | Flutter Enthusiast | Innovator</p>

        <motion.a
          href="#projects"
          className="explore-btn"
          whileHover={{ scale: 1.1 }}
        >
          Explore My Projects 🚀
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
