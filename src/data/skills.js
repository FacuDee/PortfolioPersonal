import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobile, 
  FaNodeJs, FaLink, FaFire,
  FaDatabase, FaTools,
  FaGithub, FaCode, FaBullseye, FaLaptopCode
} from 'react-icons/fa';
import { SiExpress, SiNestjs, SiMysql, SiPostgresql, SiSqlite, SiMongodb, SiVite } from 'react-icons/si';

export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'HTML5', level: 90, icon: FaHtml5 },
      { name: 'CSS3', level: 90, icon: FaCss3Alt },
      { name: 'JavaScript (ES6+)', level: 80, icon: FaJs },
      { name: 'Responsive Design', level: 80, icon: FaMobile },
      { name: 'React', level: 80, icon: FaReact }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Nest.js', level: 80, icon: SiNestjs },
      { name: 'APIs REST', level: 75, icon: FaLink },
      { name: 'Node.js', level: 70, icon: FaNodeJs },
      { name: 'Express.js', level: 70, icon: SiExpress },
      { name: 'Firebase', level: 60, icon: FaFire }
    ]
  },
  {
    id: 'database',
    name: 'Bases de Datos',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 90, icon: SiMysql },
      { name: 'PostgreSQL', level: 80, icon: SiPostgresql },
      { name: 'SQLite', level: 70, icon: SiSqlite },
      { name: 'MongoDB', level: 60, icon: SiMongodb }
    ]
  },
  {
    id: 'tools',
    name: 'Herramientas',
    icon: 'Wrench',
    skills: [
      { name: 'VS Code', level: 90, icon: FaLaptopCode },  
      { name: 'Git/GitHub', level: 90, icon: FaGithub },
      { name: 'Vite', level: 85, icon: SiVite }, 
      { name: 'POO', level: 70, icon: FaBullseye }
    ]
  }
];

export const additionalSkills = [
  'Metodologías Ágiles',
  'Responsive Design',
  'SEO Básico',
  'Testing',
  'Clean Code',
  'Debugging'
];