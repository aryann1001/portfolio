import React from 'react';
import portfolioData from '../data/portfolio-config.json';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, skillList], index) => (
            <div key={index} className="skill-category fade-in-up">
              <h3 className="category-title">{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
