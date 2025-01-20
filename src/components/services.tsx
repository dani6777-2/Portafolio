import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGears,
  faDatabase,
  faDesktop,
  faShieldHalved,
  faRocket,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
  const services = [
    {
      icon: faCode,
      title: "Desarrollo Full Stack Profesional",
      description:
        "Servicios completos de desarrollo web que abarcan tanto frontend como backend, usando tecnologías avanzadas como React, Node.js, y Quarkus para crear aplicaciones escalables y de alto rendimiento.",
      keywords: "desarrollo web full stack, aplicaciones escalables, React, Node.js, Quarkus",
    },
    {
      icon: faGears,
      title: "Integración de APIs y Microservicios",
      description:
        "Integración de sistemas mediante APIs RESTful y microservicios. Con experiencia en AWS, bases de datos Oracle y DynamoDB, garantizo la eficiencia y seguridad de tus sistemas.",
      keywords: "integración de sistemas, APIs RESTful, microservicios, AWS, Oracle, DynamoDB",
    },
    {
      icon: faDatabase,
      title: "Gestión y Optimización de Bases de Datos",
      description:
        "Diseño y gestión de bases de datos SQL y NoSQL, optimizando consultas y garantizando la integridad y disponibilidad de datos clave para tu negocio.",
      keywords: "bases de datos, SQL, NoSQL, optimización de bases de datos, integridad de datos",
    },
    {
      icon: faDesktop,
      title: "Interfaces de Usuario Responsivas",
      description:
        "Desarrollo de interfaces modernas y responsivas utilizando React y Tailwind CSS, enfocadas en una experiencia de usuario intuitiva y atractiva.",
      keywords: "interfaces de usuario, diseño responsivo, experiencia de usuario, React, Tailwind CSS",
    },
    {
      icon: faShieldHalved,
      title: "Desarrollo de APIs y Backend Seguro",
      description:
        "Desarrollo de servicios backend robustos en Quarkus y Node.js, con autenticación segura y prácticas de arquitectura hexagonal.",
      keywords: "desarrollo de APIs, backend seguro, autenticación, Quarkus, Node.js",
    },
    {
      icon: faRocket,
      title: "Automatización de Procesos y CI/CD",
      description:
        "Implementación de pipelines de CI/CD en GitLab y GitHub, optimizando el ciclo de desarrollo, pruebas y despliegue para una entrega continua y de calidad.",
      keywords: "automatización de procesos, CI/CD, GitLab, GitHub, entrega continua",
    },
  ];

  return (
    <section id="services" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Soluciones a medida para optimizar y transformar tu presencia digital.
            <span className="block mt-2 font-semibold text-blue-600 dark:text-blue-400">
              Desarrollo de software, integración de sistemas y automatización de procesos.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icono del servicio */}
              <div className="absolute -top-6 left-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon 
                    icon={service.icon} 
                    className="text-2xl text-white" 
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.split(', ').map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="mailto:daniel.morales@outlook.cl"
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contáctame para tu proyecto
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;