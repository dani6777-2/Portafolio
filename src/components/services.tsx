import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Desarrollo Full Stack Profesional",
      description:
        "Servicios completos de desarrollo web que abarcan tanto frontend como backend, usando tecnologías avanzadas como React, Node.js, y Quarkus para crear aplicaciones escalables y de alto rendimiento.",
      keywords: "desarrollo web full stack, aplicaciones escalables, React, Node.js, Quarkus",
    },
    {
      title: "Integración de APIs y Microservicios",
      description:
        "Integración de sistemas mediante APIs RESTful y microservicios. Con experiencia en AWS, bases de datos Oracle y DynamoDB, garantizo la eficiencia y seguridad de tus sistemas.",
      keywords: "integración de sistemas, APIs RESTful, microservicios, AWS, Oracle, DynamoDB",
    },
    {
      title: "Gestión y Optimización de Bases de Datos",
      description:
        "Diseño y gestión de bases de datos SQL y NoSQL, optimizando consultas y garantizando la integridad y disponibilidad de datos clave para tu negocio.",
      keywords: "bases de datos, SQL, NoSQL, optimización de bases de datos, integridad de datos",
    },
    {
      title: "Interfaces de Usuario Responsivas",
      description:
        "Desarrollo de interfaces modernas y responsivas utilizando React y Tailwind CSS, enfocadas en una experiencia de usuario intuitiva y atractiva.",
      keywords: "interfaces de usuario, diseño responsivo, experiencia de usuario, React, Tailwind CSS",
    },
    {
      title: "Desarrollo de APIs y Backend Seguro",
      description:
        "Desarrollo de servicios backend robustos en Quarkus y Node.js, con autenticación segura y prácticas de arquitectura hexagonal.",
      keywords: "desarrollo de APIs, backend seguro, autenticación, Quarkus, Node.js",
    },
    {
      title: "Automatización de Procesos y CI/CD",
      description:
        "Implementación de pipelines de CI/CD en GitLab y GitHub, optimizando el ciclo de desarrollo, pruebas y despliegue para una entrega continua y de calidad.",
      keywords: "automatización de procesos, CI/CD, GitLab, GitHub, entrega continua",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white animate-fade-in">
          Servicios Profesionales de Desarrollo de Software
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-fade-in">
          Soluciones a medida para optimizar y transformar tu presencia digital. <span className="font-semibold">Desarrollo de software, integración de sistemas y automatización de procesos.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{service.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">{service.keywords}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="mailto:daniel.morales@outlook.cl"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 animate-pulse"
          >
            Contáctame para tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;