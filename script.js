document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });
          bsCollapse.hide();
        }
      }
    });
  });

  // Form validation
  const contactForm = document.getElementById("contactForm");
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const formMessage = document.getElementById("form-message");

  // Real-time validation
  contactForm.addEventListener("input", function (e) {
    const input = e.target;
    const errorSpan = document.getElementById(`${input.name}-error`);

    validateInput(input, errorSpan);
  });

  // Form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let formIsValid = true;
    const inputs = contactForm.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      const errorSpan = document.getElementById(`${input.name}-error`);
      if (!validateInput(input, errorSpan)) {
        formIsValid = false;
      }
    });

    if (formIsValid) {
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span>Enviando...</span> <div class="spinner-border spinner-border-sm" role="status"></div>';

      // Simulate form submission (replace with actual fetch in production)
      setTimeout(() => {
        showFormMessage(
          "¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.",
          "success"
        );
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML =
          '<span>Enviar Mensaje</span> <i class="bi bi-send"></i>';
      }, 1500);
    } else {
      showFormMessage(
        "Por favor, corrige los errores en el formulario.",
        "error"
      );
    }
  });

  // Input validation function
  function validateInput(input, errorSpan) {
    if (input.validity.valid) {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
      return true;
    }

    if (input.validity.valueMissing) {
      errorSpan.textContent = "Este campo es obligatorio.";
    } else if (input.validity.typeMismatch) {
      errorSpan.textContent = "Por favor, introduce un valor válido.";
    } else if (input.validity.tooShort) {
      errorSpan.textContent = `Mínimo ${input.minLength} caracteres requeridos.`;
    }

    errorSpan.style.display = "block";
    return false;
  }

  // Show form message
  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
    formMessage.style.display = "block";

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }

  // Animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".section-header, .project-card, .about-content, .contact-content"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initialize elements as invisible
  document
    .querySelectorAll(
      ".section-header, .project-card, .about-content, .contact-content"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

  // Run once on load
  animateOnScroll();

  // Then run on scroll
  window.addEventListener("scroll", animateOnScroll);
});

// Botón "Volver arriba"
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Mostrar botón después de 300px de scroll
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

// Smooth scroll al hacer clic
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Efecto máquina de escribir
function typeWriter() {
  const text = "Desarrollador Web Full Stack";
  const speed = 60; // Velocidad en milisegundos
  const typedElement = document.getElementById('typed');
  const cursor = document.querySelector('.cursor');
  
  let i = 0;
  function typing() {
    if (i < text.length) {
      typedElement.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      // Cuando termina, dejamos el cursor parpadeando
      cursor.style.animation = 'blink 0.7s infinite';
    }
  }
  
  // Iniciar animación después de un pequeño retraso
  setTimeout(typing, 500);
}

// Ejecutar cuando la página cargue
window.addEventListener('DOMContentLoaded', (event) => {
  typeWriter();
});