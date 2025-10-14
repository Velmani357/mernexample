import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Floating circles */}
      <motion.div className="floating-circle circle-1" />
      <motion.div className="floating-circle circle-2" />

      {/* Main greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Hi, I'm <span>Velu</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hero-subtitle"
      >
        A Student at Sri Shakthi Instite of Engineering and Technology
      </motion.p>

      <motion.a
        href="#about"
        whileHover={{ scale: 1.05 }}
        className="hero-button"
      >
        Explore My Journey 🚀
      </motion.a>

      {/* Scroll down indicator */}
      <div className="scroll-down">↓ Scroll</div>
    </section>
  );
};

export default HeroSection;
