import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      <div className="contenido-seccion max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Habilidades Técnicas */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Habilidades Técnicas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Desarrollo Backend: Java (Spring Boot, Quarkus)</li>
              <li className="text-lg">Microservicios y API REST</li>
              <li className="text-lg">Bases de Datos Relacionales: MySQL, Oracle 19C</li>
              <li className="text-lg">Bases de Datos NoSQL: DynamoDB</li>
              <li className="text-lg">Frontend: React, HTML5, CSS3, Bootstrap, Tailwind CSS</li>
              <li className="text-lg">JavaScript/NodeJS</li>
              <li className="text-lg">Python/Django</li>
              <li className="text-lg">Pruebas Unitarias: Jest, JUnit</li>
              <li className="text-lg">Control de Versiones: Git (GitLab, GitHub)</li>
              <li className="text-lg">Despliegue en la Nube: AWS (S3, RDS, EC2, Elastic Beanstalk)</li>
              <li className="text-lg">Manejo de CI/CD: GitLab CI, GitHub Actions</li>
            </ul>
          </div>

          {/* Habilidades Profesionales */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Habilidades Profesionales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Comunicación efectiva en equipos multidisciplinarios</li>
              <li className="text-lg">Resolución de problemas y pensamiento crítico</li>
              <li className="text-lg">Trabajo en equipo en entornos ágiles</li>
              <li className="text-lg">Liderazgo en la gestión de proyectos</li>
              <li className="text-lg">Adaptabilidad y aprendizaje continuo</li>
              <li className="text-lg">Capacidad de análisis y diseño de soluciones</li>
              <li className="text-lg">Gestión de dependencias y actualización de proyectos</li>
              <li className="text-lg">Autogestión y organización de tareas</li>
              <li className="text-lg">Capacidad de resolución de conflictos</li>
              <li className="text-lg">Gestión de la calidad</li>
              <li className="text-lg">SCRUM</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;