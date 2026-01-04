import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import portfolioData from '../data/portfolio-config.json';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = portfolioData.personalInfo.title;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <div className="hero-greeting">Hi, I'm</div>
          <h1 className="hero-name">{portfolioData.personalInfo.name}</h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">{portfolioData.personalInfo.bio}</p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <a href="#about">
            <FaChevronDown className="scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
