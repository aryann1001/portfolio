import React from 'react';
import portfolioData from '../data/portfolio-config.json';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.duration}</div>
                <h3 className="timeline-title">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <div 
                  className="timeline-description" 
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
