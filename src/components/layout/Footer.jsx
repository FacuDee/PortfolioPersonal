import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = [
    { id: 'projects', label: 'Proyectos' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <motion.button 
              className="footer-logo"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {personalInfo.name}
            </motion.button>
            <p className="footer-description">
              Desarrollador Full Stack.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h4>Navegación</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="footer-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-contact">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Sígueme</h4>
            <div className="footer-social">
              <motion.a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={32} />
              </motion.a>
              
              <motion.a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={32} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <span className="highlight">{personalInfo.nickname}</span>
          </p>
          
          <p className="tech-stack">
            Construido con React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;