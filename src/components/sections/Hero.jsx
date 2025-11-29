import { motion } from 'framer-motion';
import { ExternalLink, Mail, ChevronDown } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { personalInfo } from '../../data/personalInfo';
import './Hero.css';

const Hero = () => {
  const { displayText, isComplete } = useTypewriter(personalInfo.subtitle, 60);

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

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-img-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              className="hero-img"
              src={personalInfo.profileImage}
              alt={personalInfo.name}
            />
          </motion.div>

          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1>
              Hola, soy <span className="highlight">{personalInfo.nickname}</span>
            </h1>
            
            <h2 className="typewriter-container">
              &lt; <span className="typewriter">{displayText}</span>
              <span className={`cursor ${isComplete ? 'blink' : ''}`}>|</span> &gt;
            </h2>

            <p className="hero-description">
              {personalInfo.bio}
            </p>

            <div className="hero-buttons">
              <motion.a 
                href={personalInfo.cv} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                Ver CV
              </motion.a>
              
              <motion.button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contactame
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <button 
          onClick={() => scrollToSection('projects')}
          className="scroll-down"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;