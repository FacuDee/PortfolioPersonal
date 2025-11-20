// Import de imagen del perfil
import profileImage from '../assets/images/FacuDee.JPG';

export const personalInfo = {
  name: "Facundo Diorio",
  nickname: "FacuDee",
  title: "Desarrollador Web Full Stack",
  subtitle: "Desarrollador Web Full Stack",
  location: "Olavarría, Bs. As.",
  email: "facu.d.1989@gmail.com",
  phone: "(+54) 9 221-5474107",
  birthDate: "17-mayo-1989",
  education: "Comunicación Social",
  profileImage: profileImage,
  cv: "/CV-Facundo-Diorio.pdf",
  
  bio: "Soluciones digitales con código limpio y diseño eficiente",

  aboutMe: `Soy un desarrollador web que busca crear experiencias digitales efectivas. 
  Con formación en Comunicación Social y especialización en desarrollo web, combino 
  creatividad y tecnología para construir aplicaciones web funcionales y atractivas. 
  Me enfoco en escribir código limpio, crear interfaces intuitivas y brindar soluciones 
  efectivas a problemas reales.`,
  
  socialLinks: {
    github: "https://github.com/FacuDee",
    linkedin: "https://www.linkedin.com/in/facundo-diorio-22531b32b/",
    email: "mailto:facu.d.1989@gmail.com"
  },
  
  services: [
    {
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y responsive con React, JavaScript y CSS",
      icon: "Monitor"
    },
    {
      title: "Desarrollo Backend", 
      description: "APIs REST, bases de datos y lógica de servidor con Node.js",
      icon: "Server"
    },
    {
      title: "Desarrollo Full Stack",
      description: "Soluciones completas desde el frontend hasta el backend",
      icon: "Layers"
    }
  ],  stats: [
    { label: "Proyectos Completados", value: "15+" },
    { label: "Tecnologías", value: "10+" },
    { label: "Años de Experiencia", value: "2+" },
    { label: "Horas de práctica", value: "∞" }
  ]
};

export const contactInfo = {
  title: "¿Tienes un proyecto en mente? ¡Hablemos!",
  subtitle: "Estoy siempre abierto a discutir nuevas oportunidades y proyectos.",
  
  methods: [
    {
      icon: "Mail",
      label: "Email",
      value: "facu.d.1989@gmail.com",
      link: "mailto:facu.d.1989@gmail.com"
    },
    {
      icon: "Phone",
      label: "Teléfono",
      value: "(+54) 9 221-5474107",
      link: "tel:+5492215474107"
    },
    {
      icon: "MapPin",
      label: "Ubicación",
      value: "Olavarría, Buenos Aires, Argentina",
      link: null
    }
  ]
};