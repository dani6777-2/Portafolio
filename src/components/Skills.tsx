import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faCloud,
  faGears,
  faBrain,
  faUsers,
  faLightbulb,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      icon: faCode,
      category: "Desarrollo Backend",
      skills: ["Java (Spring Boot, Quarkus)", "Python/Django", "JavaScript/NodeJS"]
    },
    {
      icon: faGears,
      category: "Arquitectura & Testing",
      skills: ["Microservicios", "API REST", "JMeter", "JaCoCo", "Jest/JUnit"]
    },
    {
      icon: faDatabase,
      category: "Bases de Datos",
      skills: ["MySQL", "Oracle 19C", "DynamoDB"]
    },
    {
      icon: faCloud,
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "GitLab CI", "GitHub Actions"]
    }
  ];

  const professionalSkills = [
    {
      icon: faBrain,
      category: "Habilidades Cognitivas",
      skills: ["Resolución de problemas", "Pensamiento crítico", "Análisis y diseño"]
    },
    {
      icon: faUsers,
      category: "Trabajo en Equipo",
      skills: ["Comunicación efectiva", "Liderazgo", "Gestión de conflictos"]
    },
    {
      icon: faLightbulb,
      category: "Metodologías",
      skills: ["SCRUM", "Agile", "Gestión de proyectos"]
    },
    {
      icon: faRocket,
      category: "Desarrollo Personal",
      skills: ["Aprendizaje continuo", "Autogestión", "Adaptabilidad"]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Habilidades
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Combinación de expertise técnico y habilidades profesionales para crear soluciones efectivas
          </p>
        </div>

        <div className="space-y-16">
          {/* Habilidades Técnicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4 space-x-3">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                    <FontAwesomeIcon icon={category.icon} className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Habilidades Profesionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalSkills.map((category, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4 space-x-3">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg">
                    <FontAwesomeIcon icon={category.icon} className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;