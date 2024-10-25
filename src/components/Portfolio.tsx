import React from 'react';

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
      img: p2,
      title: "E-commerce",
      description: "Desarrollo frontend HTML/CSS/JS",
      githubLink: "https://github.com/usuario/ecommerce",
      liveLink: "https://ecommerce.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p3,
      title: "Amigo Secreto",
      description: "Desarrollo JavaScript",
      githubLink: "https://github.com/usuario/amigo-secreto",
      liveLink: "https://amigo-secreto.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p4,
      title: "Generador de contraseñas",
      description: "Desarrollo con Python",
      githubLink: "https://github.com/usuario/generador-contrasenas",
      liveLink: "https://generador-contrasenas.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p5,
      title: "Buscador de Emojis",
      description: "Desarrollo con ReactJs",
      githubLink: "https://github.com/usuario/buscador-emojis",
      liveLink: "https://buscador-emojis.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p6,
      title: "E-commerce",
      description: "Desarrollo HTML/CSS/JS",
      githubLink: "https://github.com/usuario/ecommerce-frontend",
      liveLink: "https://ecommerce-frontend.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p7,
      title: "CRUD",
      description: "Desarrollo con Java/Spring Boot",
      githubLink: "https://github.com/usuario/crud-spring-boot",
      liveLink: "https://crud-spring-boot.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p8,
      title: "Pronóstico del clima",
      description: "Desarrollo con React",
      githubLink: "https://github.com/usuario/pronostico-clima",
      liveLink: "https://pronostico-clima.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p9,
      title: "Calculadora Básica",
      description: "Desarrollo con React",
      githubLink: "https://github.com/usuario/calculadora-basica",
      liveLink: "https://calculadora-basica.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p10,
      title: "Lista de Tareas",
      description: "Desarrollo con React/Django Rest",
      githubLink: "https://github.com/usuario/lista-tareas",
      liveLink: "https://lista-tareas.com", // Reemplaza por el dominio correcto si es necesario
    },
    {
      img: p11,
      title: "WorkingSafe",
      description: "Desarrollo Freelance",
      liveLink: "https://feature-tailwindcss.d2wi0i3rip1a1j.amplifyapp.com", // Reemplaza por el dominio correcto si es necesario
    },
  ];

  return (
    <section id="portafolio" className="portafolio bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      <div className="contenido-seccion max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">Proyectos</h2>
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="proyecto relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.img}
                alt={`Imagen del proyecto ${project.title}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300 transition duration-300"
                  >
                    
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300 transition duration-300"
                  >
                    Demo
                  </a>
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