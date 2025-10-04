import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ContactForm from '../forms/ContactForm';
import { contactInfo, personalInfo } from '../../data/personalInfo';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  const getIcon = (iconName) => {
    const icons = {
      'Mail': Mail,
      'Phone': Phone,
      'MapPin': MapPin
    };
    return icons[iconName] || Mail;
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contacto</h2>
          <p>{contactInfo.title}</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-info-card">
              <h3>Otras formas de contacto</h3>
              <p>{contactInfo.subtitle}</p>
              
              <ul className="contact-methods">
                {contactInfo.methods.map((method, index) => {
                  const IconComponent = getIcon(method.icon);
                  return (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <IconComponent size={20} />
                      <div className="contact-method-info">
                        <span className="method-label">{method.label}</span>
                        {method.link ? (
                          <a href={method.link} className="method-value">
                            {method.value}
                          </a>
                        ) : (
                          <span className="method-value">{method.value}</span>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ul>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;