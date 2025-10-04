import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/personalInfo';
import { skillCategories } from '../../data/skills';
import { User, Calendar, Mail, Phone, MapPin, Book } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const personalData = [
    { icon: User, label: 'Nombre', value: personalInfo.name },
    { icon: Calendar, label: 'Fecha de nacimiento', value: personalInfo.birthDate },
    { icon: Mail, label: 'Email', value: personalInfo.email },
    { icon: Phone, label: 'Teléfono', value: personalInfo.phone },
    { icon: MapPin, label: 'Ubicación', value: personalInfo.location },
    { icon: Book, label: 'Otra formación', value: personalInfo.education }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Sobre Mí</h2>
          <p>Conoce más sobre mi experiencia y habilidades</p>
        </motion.div>

        <div className="about-content">
          {/* Personal Information Card */}
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-header">
              <User size={24} />
              <h3>Información Personal</h3>
            </div>
            <div className="card-body">
              <div className="about-text">
                <p>{personalInfo.aboutMe}</p>
              </div>
              <ul className="info-list">
                {personalData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index}>
                      <IconComponent size={20} />
                      <div>
                        <strong>{item.label}:</strong> {item.value}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-header">
              <FaCode size={24} />
              <h3>Mis Habilidades</h3>
            </div>
            <div className="card-body">
              <div className="skills-container">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div 
                    key={category.id} 
                    className="skill-category"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.1 }}
                  >
                    <h4>
                      <span className="category-icon">
                        {category.skills[0]?.icon && React.createElement(category.skills[0].icon, { size: 20 })}
                      </span>
                      {category.name}
                    </h4>
                    <ul>
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li 
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className="skill-info">
                            <div className="skill-name-icon">
                              {skill.icon && React.createElement(skill.icon, { size: 16 })}
                              <span className="skill-name">{skill.name}</span>
                            </div>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                            />
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stats-grid">
            {personalInfo.stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;