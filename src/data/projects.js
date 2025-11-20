// Import de imágenes
import capturaIronfit from '../assets/images/captura-ironfit.jpg';
import resultadosEncuesta from '../assets/images/resultados-encuesta.PNG';
import capturaPixelArte from '../assets/images/capturaPixelArte.JPG';
import tiendaProject from '../assets/images/tiendaProject.PNG';
import capturaHuerta from '../assets/images/captura-huerta.JPG';
import segundoEstreno from '../assets/images/segundoEstreno.JPG';
import capturaBrewHaven from '../assets/images/capturaBrewHaven.JPG';
import capturaOlaEventos from '../assets/images/capturaOlaEventos.jpg';
import capturaSportStream from '../assets/images/capturaSportStream.JPG';

export const projects = [
  {
    id: 1,
    title: "Segundo Estreno",
    description: "App para la Moda Circular en Olavarría",
    longDescription: "Plataforma web para comprar y vender ropa usada, promoviendo la reutilización de prendas en un entorno digital accesible.",
    image: segundoEstreno,
    technologies: ["NestJS", "React", "Vite", "MySQL", "TypeORM", "JWT"],
    demoUrl: "https://github.com/FacuDee/segundoEstrenoApp",
    githubUrl: "https://github.com/FacuDee/segundoEstrenoApp",
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "OlaEventos",
    description: "Plataforma de gestión de eventos y espacios culturales",
    longDescription: "Sistema full stack para gestión y difusión de eventos culturales en la ciudad de Olavarría. Incluye panel administrativo con autenticación JWT, CRUD completo de eventos y lugares, diseño responsive con React y Bootstrap, y backend robusto con NestJS, Prisma ORM y PostgreSQL.",
    image: capturaOlaEventos,
    technologies: ["NestJS", "React", "Vite", "PostgreSQL", "Prisma", "JWT", "Bootstrap"],
    demoUrl: "",
    githubUrl: "https://github.com/FacuDee/OlaEventos",
    category: "fullstack",
    featured: true
  },
  {
    id: 3,
    title: "Encuestadora",
    description: "Relevamiento de respuestas de usuario con Node.js, Express y SQLite",
    longDescription: "Sistema completo para realizar encuestas políticas con análisis de resultados en tiempo real. Incluye panel administrativo, visualización de datos y exportación de reportes.",
    image: resultadosEncuesta,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQLite"],
    demoUrl: "https://github.com/FacuDee/encuesta-node-sqlite",
    githubUrl: "https://github.com/FacuDee/encuesta-node-sqlite",
    category: "fullstack",
    featured: false
  },
  {
    id: 4,
    title: "Pixel Arte",
    description: "Proyecto web front-end. Página de un estudio de diseño gráfico",
    longDescription: "Portfolio creativo para un estudio de diseño gráfico con galería interactiva, animaciones CSS avanzadas y diseño completamente responsive.",
    image: capturaPixelArte,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://facudee.github.io/PixelArte/",
    githubUrl: "https://github.com/FacuDee/PixelArte",
    category: "frontend",
    featured: false
  },
  {
    id: 5,
    title: "Tienda electrónica",
    description: "Sistema de gestión de clientes. Conexión a Base de datos",
    longDescription: "E-commerce completo con carrito de compras, sistema de pagos, gestión de inventario y panel administrativo. Implementado con arquitectura MVC y base de datos MySQL.",
    image: tiendaProject,
    technologies: ["HTML", "Bootstrap", "JavaScript", "Node.js", "MySQL"],
    demoUrl: "https://github.com/FacuDee/clientesTiendaElectronica",
    githubUrl: "https://github.com/FacuDee/clientesTiendaElectronica",
    category: "fullstack",
    featured: false
  },
  {
    id: 6,
    title: "Huerta EnCasa",
    description: "Frontend | Sitio Web informativo sobre Huertas Domésticas",
    longDescription: "Sitio web educativo sobre agricultura urbana con calculadora de espacios, calendario de siembra y guías interactivas para principiantes.",
    image: capturaHuerta,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://facudee.github.io/huertaEnCasa/",
    githubUrl: "https://github.com/FacuDee/huertaEnCasa",
    category: "frontend",
    featured: false
  },
  {
    id: 7,
    title: "IronFit WebSite",
    description: "Entrenamiento Personalizado & Coaching Deportivo",
    longDescription: "Sitio web completo para un gimnasio con sistema de reservas, planes de entrenamiento personalizados y gestión de clientes. Implementé un backend robusto con Firebase para manejar autenticación y base de datos en tiempo real.",
    image: capturaIronfit,
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    demoUrl: "https://facudee.github.io/ironfit-website/",
    githubUrl: "https://github.com/FacuDee/ironfit-website",
    category: "frontend",
    featured: false
  },
  {
    id: 8,
    title: "Brew Haven Coffee",
    description: "Landing Page - Café de especialidad con diseño premium",
    longDescription: "Sitio web completo para cafetería de especialidad con catálogo de productos, carrito de compras interactivo, guías de preparación, testimonios de clientes y formulario de contacto. Implementado con diseño responsive, animaciones CSS avanzadas y JavaScript vanilla para interactividad.",
    image: capturaBrewHaven,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://facudee.github.io/BrewHavenCoffee/",
    githubUrl: "https://github.com/FacuDee/BrewHavenCoffee",
    category: "frontend",
    featured: false
  },
  {
    id: 9,
    title: "SportStream",
    description: "Plataforma de transmisión deportiva en vivo con chat en tiempo real",
    longDescription: "Sistema full stack de transmisión de eventos deportivos con autenticación JWT, gestión de eventos en tiempo real con Socket.IO, chat en vivo, panel administrativo, y sistema de visualización de espectadores. Backend desarrollado con Node.js, Express, TypeScript y MongoDB, frontend con React, Material-UI y Socket.IO client.",
    image: capturaSportStream,
    technologies: ["Node.js", "Express", "TypeScript", "MongoDB", "Socket.IO", "React", "Material-UI", "JWT"],
    demoUrl: "",
    githubUrl: "https://github.com/FacuDee/SportStream",
    category: "fullstack",
    featured: true
  }
];

export const projectCategories = [
  { id: "all", name: "Todos", count: projects.length },
  { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length },
  // { id: "backend", name: "Backend", count: projects.filter(p => p.category === "backend").length },
  { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length }
];