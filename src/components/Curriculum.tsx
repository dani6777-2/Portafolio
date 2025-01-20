import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faBuilding,
  faCalendarAlt,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Curriculum: React.FC = () => {
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

            {[
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
                description: "Participé en un programa especializado en el que adquirí habilidades clave en el desarrollo de software utilizando Java bajo el paradigma de orientación a objetos. Este programa cubrió desde la creación y mantenimiento de software hasta el desarrollo full stack de aplicaciones web en Java, incluyendo la gestión de bases de datos. Me enfoqué en aplicar buenas prácticas de programación para ofrecer soluciones efectivas a problemáticas organizacionales, garantizando altos estándares de calidad en los proyectos. Este curso me preparó para integrarme en equipos de desarrollo y contribuir al éxito de proyectos tecnológicos."
              },
              {
                title: "Desarrollo de habilidades blandas",
                institution: "Fundación Forge",
                date: "Octubre 2022 | Enero 2024",
                description: "Participé en un curso intensivo de oratoria y comunicación efectiva, enfocado en desarrollar habilidades clave como la estructura del discurso, manejo de la voz y adaptación al público."
              },
              {
                title: "Técnicas de desarrollo de aplicaciones Full Stack en Java",
                institution: "Coding Dojo",
                date: "Noviembre 2022 | Febrero 2023",
                description: "Completé un curso integral de Desarrollo Full Stack en Java, destacando en tecnologías backend como Java Spring Boot para el desarrollo y consumo de APIs. En el frontend, desarrollé habilidades en HTML, CSS con enfoque en Responsive Design y JavaScript. También adquirí experiencia en el manejo y modelado de bases de datos relacionales, especialmente en MySQL. Este curso, impartido por Coding Dojo en colaboración con Accenture y Forge, enriqueció mi conjunto de habilidades en el desarrollo web integral."
              }
            ].map((item, index) => (
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

            {[
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
              }
            ].map((job, index) => (
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