import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faBuilding,
  faCalendarAlt,
  faChevronRight,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

// Importar certificados
import certificadoTalentoDigital from '../assets/img/certificado-sence.pdf';
import certificadoForge from '../assets/img/certificado-forge.png';
import certificadoCodingDojo from '../assets/img/certificado-java.pdf';
import certificadoCiberseguridad from '../assets/img/certificado-cisco.pdf';
import certificadoFrontend from '../assets/img/certificado-frontend.pdf';

const Curriculum: React.FC = () => {
  const jobs = [
    {
      title: "Desarrollador de Software",
      company: "STARKEN (Freelance)",
      date: "Diciembre 2024",
      responsibilities: [
        "Diseñé y desarrollé APIs y microservicios resilientes utilizando Java, Quarkus y Spring Boot para facilitar la integración fluida con aplicaciones cliente durante todo el ciclo de vida del software.",
        "Colaboré con miembros del equipo para planificar, definir el alcance, diseñar, desarrollar y probar soluciones de software, siguiendo metodologías ágiles.",
        "Elaboré documentación integral, incluyendo diagramas y pseudocódigo, para asegurar una comprensión clara del software implementado entre los stakeholders.",
        "Implementé integraciones asíncronas aprovechando eventos, webhooks y una arquitectura desacoplada e independiente para maximizar las capacidades de negocio.",
        "Utilicé Jira Software para gestionar y organizar el flujo de trabajo de un equipo ágil, lo que resultó en una reducción del 25% en el tiempo de entrega.",
        "Configuré y administré tableros Scrum y Kanban en Jira, lo que resultó en una mejora del 30% en la eficiencia del equipo.",
        "Implementé SonarQube para automatizar el análisis de calidad del código, mejorando la detección temprana de vulnerabilidades y asegurando el cumplimiento de estándares.",
        "Desplegué los microservicios en Google Cloud Platform (GCP), aprovechando servicios como Google Kubernetes Engine (GKE) y Google Cloud Storage.",
        "Utilicé la API de Google Maps para integrar funciones de geolocalización y optimización de rutas, proporcionando una experiencia más eficiente a los usuarios."
      ]
    },
    {
      title: "Analista Desarrollador",
      company: "VR Group Consulting",
      date: "Febrero 2024 | Enero 2025",
      responsibilities: [
        "Desarrollé y mantuve microservicios utilizando Quarkus y Panache, optimizando la eficiencia del sistema y aprovechando las características avanzadas de Java.",
        "Diseñé e implementé servicios de API REST con Spring Boot e Hibernate, lo que resultó en una integración fluida con otros sistemas.",
        "Implementación de pruebas unitarias con cobertura del 86%.",
        "Migración del proyecto a Quarkus 3.10.1.",
        "Integré AWS S3 para desarrollar una plataforma de gestión de archivos robusta y escalable, lo que resultó en una mejora del 40% en la eficiencia de carga y gestión de archivos, automatizando el flujo de trabajo con AWS Lambda."
      ]
    },
    {
      title: "Analista de Sistemas",
      company: "Zurich Santander",
      date: "Julio 2023 | Diciembre 2023",
      responsibilities: [
        "Desarrollé aplicaciones backend utilizando Spring Boot, creando microservicios que interactúan con diversas bases de datos y servicios externos, lo que resultó en una mejora del 30% en la eficiencia de las consultas a bases de datos.",
        "Diseñé e implementé una arquitectura de microservicios utilizando Spring Cloud para gestionar la configuración, el descubrimiento de servicios y la comunicación entre microservicios, lo que resultó en una mayor escalabilidad y resiliencia del sistema.",
        "Liderazgo en la implementación de repositorios en GitLab y gestión de proyectos utilizando Maven."
      ]
    },
    {
      title: "Desarrollador de Software",
      company: "Colibris LTDA",
      date: "Marzo 2023 | Julio 2023",
      responsibilities: [
        "Diseñé y desarrollé una API REST utilizando Node.js y Express.js para gestionar las operaciones del sistema de ventas e inventarios, mejorando la eficiencia de la comunicación entre el frontend y el backend.",
        "Implementé una arquitectura modular en el backend que permitió una integración fluida con la base de datos MySQL mediante el uso de Sequelize como ORM.",
        "Aseguré el cumplimiento de estándares de calidad implementando pruebas automatizadas con Jest y logrando un 90% de cobertura de código."
      ]
    },
    {
      title: "Desarrollador de Software Junior",
      company: "Marsueños Viajes y turismo",
      date: "Octubre 2022 | Febrero 2023",
      responsibilities: [
        "Diseñé y desarrollé microservicios utilizando Java 11 y Spring Boot 2.6.x, asegurando que fueran escalables y de fácil mantenimiento.",
        "Implementé controladores REST para manejar funcionalidades clave como la búsqueda de destinos, generación de itinerarios personalizados y confirmación de reservas.",
        "Desarrollé una capa de servicios que interactuaba con la base de datos MySQL, optimizando consultas mediante JPA y Hibernate.",
        "Aseguré la calidad del código escribiendo pruebas unitarias y de integración con Mockito y JUnit 5.",
        "Configuré y desplegué aplicaciones en un entorno corporativo basado en Oracle WebLogic Server."
      ]
    }
  ];

  const education = [
    {
      title: "Ingeniería en Informática",
      institution: "Instituto Profesional INACAP",
      date: "Actualmente",
      description: "Actualmente estoy cursando la carrera de Ingeniería en Informática en INACAP. Destaco por mi capacidad para diseñar y construir soluciones seguras, cumpliendo con los estándares de calidad y los requisitos específicos del cliente. Mi formación integral y mi perfil versátil me permiten estar al día con las tendencias tecnológicas y adaptarme a las exigencias del mercado. Estoy desarrollando habilidades avanzadas en el análisis, diseño, construcción, pruebas e implementación de soluciones informáticas, lo que me permitirá integrarme exitosamente al dinámico campo de la programación y el análisis de sistemas una vez que haya egresado."
    },
    {
      title: "Desarrollador Full Stack Java",
      institution: "SENCE, TALENTO DIGITAL",
      date: "Febrero 2024 | Julio 2024",
      description: "Participé en un programa especializado en el que adquirí habilidades clave en el desarrollo de software utilizando Java bajo el paradigma de orientación a objetos. Este programa cubrió desde la creación y mantenimiento de software hasta el desarrollo full stack de aplicaciones web en Java, incluyendo la gestión de bases de datos. Me enfoqué en aplicar buenas prácticas de programación para ofrecer soluciones efectivas a problemáticas organizacionales, garantizando altos estándares de calidad en los proyectos. Este curso me preparó para integrarme en equipos de desarrollo y contribuir al éxito de proyectos tecnológicos.",
      certificateUrl: certificadoTalentoDigital
    },
    {
      title: "Desarrollo de habilidades blandas",
      institution: "Fundación Forge",
      date: "Octubre 2022 | Enero 2024",
      description: "Participé en un curso intensivo de oratoria y comunicación efectiva, enfocado en desarrollar habilidades clave como la estructura del discurso, manejo de la voz y adaptación al público.",
      certificateUrl: certificadoForge
    },
    {
      title: "Desarrollo Frontend",
      institution: "Coding Dojo",
      date: "Octubre 2022 | Enero 2024",
      description: "Completé un curso integral de desarrollo frontend...",
      certificateUrl: certificadoFrontend
    },
    {
      title: "Técnicas de desarrollo de aplicaciones Full Stack en Java",
      institution: "Coding Dojo",
      date: "Noviembre 2022 | Febrero 2023",
      description: "Completé un curso integral de Desarrollo Full Stack en Java...",
      certificateUrl: certificadoCodingDojo
    },
    {
      title: "Fundamentos de la ciberseguridad",
      institution: "Coding Dojo",
      date: "Octubre 2022 | Enero 2024",
      description: "Participé en un curso sobre fundamentos de ciberseguridad...",
      certificateUrl: certificadoCiberseguridad
    },
  ];

  return (
    <section id="curriculum" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="contenido-seccion max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Trayectoria Profesional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Educación */}
          <div className="col izquierda">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-600 dark:text-blue-400">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
              Educación
            </h3>

            {education.map((item, index) => (
              <div key={index} className="group mb-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gray-50/70 dark:bg-gray-700/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faBuilding} className="text-blue-500 dark:text-blue-400 text-xl" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-2 mt-2 text-gray-500 dark:text-gray-400">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 dark:text-blue-400" />
                        <span>{item.date}</span>
                      </div>
                      <div className="mt-2 flex items-center text-gray-600 dark:text-gray-300">
                        <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-blue-500 dark:text-blue-400" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                      {item.certificateUrl && (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          <FontAwesomeIcon icon={faDownload} className="mr-2" />
                          Ver certificado
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experiencia Laboral */}
          <div className="col derecha">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-blue-600 dark:text-blue-400">
              <FontAwesomeIcon icon={faBriefcase} className="mr-3" />
              Experiencia Laboral
            </h3>

            {jobs.map((job, index) => (
              <div key={index} className="group mb-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gray-50/70 dark:bg-gray-700/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faBriefcase} className="text-purple-500 dark:text-purple-400 text-xl" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex items-center space-x-2 mt-2 text-gray-500 dark:text-gray-400">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-500 dark:text-purple-400" />
                        <span>{job.date}</span>
                      </div>
                      <div className="mt-2 flex items-center text-gray-600 dark:text-gray-300">
                        <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-purple-500 dark:text-purple-400" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                            <span className="text-purple-500 dark:text-purple-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;