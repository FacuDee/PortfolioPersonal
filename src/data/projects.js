export const projects = [
  {
    id: 1,
    title: "IronFit WebSite",
    description: "Entrenamiento Personalizado & Coaching Deportivo",
    longDescription: "Sitio web completo para un gimnasio con sistema de reservas, planes de entrenamiento personalizados y gestión de clientes. Implementé un backend robusto con Firebase para manejar autenticación y base de datos en tiempo real.",
    image: "./src/assets/images/captura-ironfit.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    demoUrl: "https://facudee.github.io/ironfit-website/",
    githubUrl: "https://github.com/FacuDee/ironfit-website",
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "Encuestadora política",
    description: "Relevamiento de respuestas de usuario con Node.js, Express y SQLite",
    longDescription: "Sistema completo para realizar encuestas políticas con análisis de resultados en tiempo real. Incluye panel administrativo, visualización de datos y exportación de reportes.",
    image: "./src/assets/images/resultados-encuesta.PNG",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQLite"],
    demoUrl: "https://github.com/FacuDee/encuesta-node-sqlite",
    githubUrl: "https://github.com/FacuDee/encuesta-node-sqlite",
    category: "backend",
    featured: true
  },
  {
    id: 3,
    title: "Pixel Arte",
    description: "Proyecto web front-end. Página de un estudio de diseño gráfico",
    longDescription: "Portfolio creativo para un estudio de diseño gráfico con galería interactiva, animaciones CSS avanzadas y diseño completamente responsive.",
    image: "./src/assets/images/capturaPixelArte.JPG",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://facudee.github.io/PixelArte/",
    githubUrl: "https://github.com/FacuDee/PixelArte",
    category: "frontend",
    featured: false
  },
  {
    id: 4,
    title: "Tienda electrónica",
    description: "Sistema de gestión de clientes. Conexión a Base de datos",
    longDescription: "E-commerce completo con carrito de compras, sistema de pagos, gestión de inventario y panel administrativo. Implementado con arquitectura MVC y base de datos MySQL.",
    image: "./src/assets/images/tiendaProject.PNG",
    technologies: ["HTML", "Bootstrap", "JavaScript", "Node.js", "MySQL"],
    demoUrl: "https://github.com/FacuDee/clientesTiendaElectronica",
    githubUrl: "https://github.com/FacuDee/clientesTiendaElectronica",
    category: "fullstack",
    featured: false
  },
  {
    id: 5,
    title: "Huerta EnCasa",
    description: "Frontend | Sitio Web informativo sobre Huertas Domésticas",
    longDescription: "Sitio web educativo sobre agricultura urbana con calculadora de espacios, calendario de siembra y guías interactivas para principiantes.",
    image: "./src/assets/images/captura-huerta.JPG",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://facudee.github.io/huertaEnCasa/",
    githubUrl: "https://github.com/FacuDee/huertaEnCasa",
    category: "frontend",
    featured: false
  },
  {
    id: 6,
    title: "Test English",
    description: "Trivia sobre inglés. Opciones en arreglos dentro de JS",
    longDescription: "Aplicación interactiva de trivia en inglés con sistema de puntuación, diferentes niveles de dificultad y retroalimentación inmediata para el aprendizaje.",
    image: "./src/assets/images/english.PNG",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://facudee.github.io/testEnglish/",
    githubUrl: "https://github.com/FacuDee/testEnglish",
    category: "frontend",
    featured: false
  }
];

export const projectCategories = [
  { id: "all", name: "Todos", count: projects.length },
  { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length },
  { id: "backend", name: "Backend", count: projects.filter(p => p.category === "backend").length },
  { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length }
];