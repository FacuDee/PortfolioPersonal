import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        
        {/* Overlay with links */}
        <div className="project-overlay">
          <div className="project-links">
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={20} />
              Demo
            </motion.a>
            
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
              Código
            </motion.a>
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="featured-badge">
            Destacado
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <div className="project-category">
            {project.category}
          </div>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* External links for mobile */}
        <div className="project-links-mobile">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-mobile"
          >
            <ExternalLink size={16} />
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-mobile"
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;