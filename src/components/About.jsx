import React from 'react';
import portfolioData from '../data/portfolio-config.json';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in-up">
            <p>{portfolioData.personalInfo.bio}</p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{portfolioData.personalInfo.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{portfolioData.personalInfo.location}</span>
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution} • {edu.year}</p>
                  <p className="edu-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
