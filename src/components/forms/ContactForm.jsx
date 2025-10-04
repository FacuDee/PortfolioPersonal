import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would integrate with EmailJS or your backend
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Hide message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <div className="contact-form">
      <h3>Envíame un mensaje</h3>
      <p>¿Tienes alguna pregunta o propuesta? ¡Me encantaría escucharte!</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              className={errors.name ? 'error' : ''}
              {...register('name', { 
                required: 'El nombre es obligatorio',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              })}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              className={errors.email ? 'error' : ''}
              {...register('email', { 
                required: 'El email es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto *</label>
          <input
            type="text"
            id="subject"
            className={errors.subject ? 'error' : ''}
            {...register('subject', { 
              required: 'El asunto es obligatorio',
              minLength: { value: 5, message: 'Mínimo 5 caracteres' }
            })}
            placeholder="¿De qué quieres hablar?"
          />
          {errors.subject && (
            <span className="error-message">{errors.subject.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            rows="6"
            className={errors.message ? 'error' : ''}
            {...register('message', { 
              required: 'El mensaje es obligatorio',
              minLength: { value: 10, message: 'Mínimo 10 caracteres' }
            })}
            placeholder="Cuéntame sobre tu proyecto o idea..."
          />
          {errors.message && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="spinner" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar Mensaje
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            className="form-message success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle size={20} />
            ¡Mensaje enviado con éxito! Te responderé pronto.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div 
            className="form-message error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={20} />
            Error al enviar el mensaje. Inténtalo de nuevo.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;