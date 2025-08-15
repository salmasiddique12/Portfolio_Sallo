import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "Java", icon: "☕" },
  { name: "Git", icon: "🔧" },
  { name: "MySQL", icon: "📊" },
  { name: "GitHub", icon: "🐙" },
  
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>🚀 My Technical Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
