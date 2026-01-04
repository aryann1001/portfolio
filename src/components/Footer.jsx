import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import portfolioData from '../data/portfolio-config.json';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="footer-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          
          <div className="footer-text">
            <p>
              Made with <FaHeart className="heart-icon" /> by {portfolioData.personalInfo.name}
            </p>
            <p className="copyright">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
