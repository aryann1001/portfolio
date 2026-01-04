import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolio-config.json';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card fade-in-up">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
