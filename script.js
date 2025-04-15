document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('form-message');
    
    // Validación en tiempo real
    contactForm.addEventListener('input', function(e) {
        const input = e.target;
        const errorSpan = document.getElementById(`${input.name}-error`);
        
        if (input.validity.valid) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        } else {
            showError(input, errorSpan);
        }
    });
    
    // Envío del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let formIsValid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            const errorSpan = document.getElementById(`${input.name}-error`);
            if (!input.validity.valid) {
                showError(input, errorSpan);
                formIsValid = false;
            }
        });
        
        if (formIsValid) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            // Simulación de envío (en un caso real, usarías fetch o XMLHttpRequest)
            setTimeout(() => {
                formMessage.textContent = '¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.';
                formMessage.className = 'success';
                formMessage.style.display = 'block';
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        } else {
            formMessage.textContent = 'Por favor, corrige los errores en el formulario.';
            formMessage.className = 'error';
            formMessage.style.display = 'block';
        }
    });
    
    function showError(input, errorSpan) {
        if (input.validity.valueMissing) {
            errorSpan.textContent = 'Este campo es obligatorio.';
        } else if (input.validity.typeMismatch) {
            errorSpan.textContent = 'Por favor, introduce un valor válido.';
        } else if (input.validity.tooShort) {
            errorSpan.textContent = `El texto debe tener al menos ${input.minLength} caracteres.`;
        }
        
        errorSpan.style.display = 'block';
    }
});