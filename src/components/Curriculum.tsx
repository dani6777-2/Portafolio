import React from 'react';

const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="curriculum bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      <div className="contenido-seccion max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Trayectoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
         {/* Education */}


<div className="col izquierda">
  <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Educación</h3>


  <div className="item izq mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Programación y Análisis de Sistemas</h4>
    <span className="casa block text-gray-500 dark:text-gray-300">Instituto Profesional AIEP</span>
    <span className="fecha block text-gray-400 dark:text-gray-400">Actualmente</span>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
    Actualmente estoy cursando la carrera técnica de Técnico en Programación y Análisis de Sistemas en AIEP. Me estoy formando para convertirme en un técnico de nivel superior con habilidades avanzadas en el desarrollo de software. Mi formación integral me está capacitando para llevar a cabo el proceso completo de creación de soluciones informáticas, abarcando el análisis, diseño, construcción, pruebas e implementación.

Destaco por mi capacidad para diseñar y construir soluciones seguras, cumpliendo con los estándares de calidad y los requisitos específicos del cliente. Mi perfil versátil y actualizado me permitirá integrarme exitosamente al dinámico campo de la programación y análisis de sistemas una vez que haya egresado.
    </p>
  </div>

  <div className="item izq mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Desarrollador Full Stack Java</h4>
    <span className="casa block text-gray-500 dark:text-gray-300">SENCE, TALENTO DIGITAL</span>
    <span className="fecha block text-gray-400 dark:text-gray-400">Febrero 2024 | Julio 2024</span>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Participé en un programa especializado en el que adquirí habilidades clave en el desarrollo de software utilizando Java bajo el paradigma de orientación a objetos. Este programa cubrió desde la creación y mantenimiento de software hasta el desarrollo full stack de aplicaciones web en Java, incluyendo la gestión de bases de datos. Me enfoqué en aplicar buenas prácticas de programación para ofrecer soluciones efectivas a problemáticas organizacionales, garantizando altos estándares de calidad en los proyectos. Este curso me preparó para integrarme en equipos de desarrollo y contribuir al éxito de proyectos tecnológicos.
    </p>
  </div>

  <div className="item izq mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Desarrollo de habilidades blandas</h4>
    <span className="casa block text-gray-500 dark:text-gray-300">Fundación Forge</span>
    <span className="fecha block text-gray-400 dark:text-gray-400">Octubre 2022 | Enero 2024</span>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Participé en un curso intensivo de oratoria y comunicación efectiva, enfocado en desarrollar habilidades clave como la estructura del discurso, manejo de la voz y adaptación al público.
    </p>
  </div>

  <div className="item izq mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Técnicas de desarrollo de aplicaciones Full Stack en Java</h4>
    <span className="casa block text-gray-500 dark:text-gray-300">Coding Dojo</span>
    <span className="fecha block text-gray-400 dark:text-gray-400">Noviembre 2022 | Febrero 2023</span>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Completé un curso integral de Desarrollo Full Stack en Java, destacando en tecnologías backend como Java Spring Boot para el desarrollo y consumo de APIs. En el frontend, desarrollé habilidades en HTML, CSS con enfoque en Responsive Design y JavaScript. También adquirí experiencia en el manejo y modelado de bases de datos relacionales, especialmente en MySQL. Este curso, impartido por Coding Dojo en colaboración con Accenture y Forge, enriqueció mi conjunto de habilidades en el desarrollo web integral.
    </p>
  </div>
</div>
          {/* Work Experience */}
          <div className="col derecha">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Experiencia de Trabajo</h3>

            <div className="item der mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Analista Desarrollador</h4>
              <span className="casa block text-gray-500 dark:text-gray-300">VR Group Consulting</span>
              <span className="fecha block text-gray-400 dark:text-gray-400">Febrero 2024 | Actualmente</span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • Desarrollo y mantenimiento de microservicios utilizando Quarkus y Panache, mejorando la eficiencia del sistema. <br />
                • Refactorización de endpoints para optimizar el manejo de archivos y mejorar la estructura de datos proporcionada a los consumidores de servicios.<br />
                • Implementación de pruebas unitarias con una cobertura del 86%, asegurando la solidez y calidad del código.<br />
                • Migración del proyecto a Quarkus 3.10.1 y reorganización de la estructura del proyecto, separando las carpetas de servicios y repositorios.<br />
                • Coordinación de la actualización de dependencias para garantizar la compatibilidad con la última versión del núcleo del proyecto.<br />
              </p>
            </div>

            <div className="item der mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Analista de Sistemas</h4>
              <span className="casa block text-gray-500 dark:text-gray-300">Zurich Santander</span>
              <span className="fecha block text-gray-400 dark:text-gray-400">Julio 2023 | Diciembre 2023</span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • Gestión del núcleo del sistema de comunicaciones utilizando Java y SOAP para una interacción eficiente con otros sistemas.<br />
                • Desarrollo de servicios REST con Spring Boot e integración con bases de datos Oracle 19C mediante Hibernate.<br />
                • Liderazgo en la implementación de repositorios en GitLab y gestión de proyectos utilizando Maven.<br />
              </p>
            </div>

            <div className="item der mb-8 p-4 bg-gray-50 dark:bg-gray-700 shadow-sm rounded-md hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Desarrollador de Software</h4>
              <span className="casa block text-gray-500 dark:text-gray-300">Colibris LTDA</span>
              <span className="fecha block text-gray-400 dark:text-gray-400">Marzo 2023 | Julio 2023</span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                • Diseño y desarrollo de un sistema de gestión de ventas e inventarios utilizando Java y MySQL.<br />
                • Implementación de Hibernate para la capa de persistencia y desarrollo del frontend utilizando JFrame.<br />
                • Mejora de la interfaz de usuario y optimización del rendimiento del sistema.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;