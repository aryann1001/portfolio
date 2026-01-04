import React from 'react';
import { FaFileAlt, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolio-config.json';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-grid">
          {portfolioData.publications.map((pub, index) => (
            <div key={index} className="publication-card fade-in-up">
              <div className="publication-icon">
                <FaFileAlt />
              </div>
              
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                
                <div className="publication-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{pub.date}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{pub.location}</span>
                  </div>
                </div>
                
                <p className="publication-conference">{pub.conference}</p>
                <p className="publication-description">{pub.description}</p>
                
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  <span>Read Paper</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
