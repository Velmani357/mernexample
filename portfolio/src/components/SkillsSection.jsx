import React from "react";
import "./SkillsSection.css";

const SkillsSection = () => {
  const skills = ["React", "Node.js", "MongoDB", "Flutter", "Firebase", "Python", "Machine Learning"];
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
