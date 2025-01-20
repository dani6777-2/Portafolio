import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEye,
  faCode,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

// Importamos las imágenes
import p1 from '../assets/img/p1.png';
import p2 from '../assets/img/p2.png';
import p3 from '../assets/img/p3.png';
import p4 from '../assets/img/p4.png';
import p5 from '../assets/img/p5.png';
import p6 from '../assets/img/p6.png';
import p7 from '../assets/img/p7.png';
import p8 from '../assets/img/p8.png';
import p9 from '../assets/img/p9.png';
import p10 from '../assets/img/p10.png';
import p11 from '../assets/img/p11.png';

const Portfolio: React.FC = () => {
  const projects = [
    {
      img: p1,
      title: "Portafolio Web",
      description: "Desarrollo frontend",
      githubLink: "https://github.com/Dani6777/WebSite",
      liveLink: "https://dmoralestech.me", // Enlace corregido
    },
    {
      img: p5,
      title: "Buscador de Emojis",
      description: "Desarrollo con ReactJs",
      githubLink: "https://github.com/dani6777-2/buscador-master",
      liveLink: "https://buscador-master.onrender.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p8,
      title: "Pronóstico del clima",
      description: "Desarrollo con React",
      githubLink: "https://github.com/dani6777-2/openweather-master",
      liveLink: "https://openweather-master.onrender.com/", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p9,
      title: "Calculadora Básica",
      description: "Desarrollo con React",
      githubLink: "https://github.com/dani6777-2/calculadora-react-master",
      liveLink: "https://calculadora-react-master.onrender.com/", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p11,
      title: "WorkingSafe",
      description: "Desarrollo Freelance",
      liveLink: "https://feature-tailwindcss.d2wi0i3rip1a1j.amplifyapp.com", // Reemplaza por el dominio correcto si es necesario
    },
  ];

  return (
    <section id="portafolio" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Proyectos
          </h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <FontAwesomeIcon icon={faCode} className="text-blue-500" />
            <p className="text-lg">Algunos de mis trabajos más recientes</p>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.img}
                  alt={`Proyecto ${project.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenido del proyecto */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Enlaces */}
                <div className="flex items-center space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-xl" />
                      <span>Código</span>
                    </a>
                  )}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-lg" />
                    <span>Demo</span>
                  </a>
                </div>

                {/* Indicador de hover */}
                <div className="absolute top-0 right-0 p-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  <FontAwesomeIcon 
                    icon={faEye} 
                    className="text-blue-500 text-xl" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;