import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faPlane,
  faCode,
  faPalette,
  faMedal,
  faCat,
  faDog,
  faLaptopCode,
  faRocket,
  faPeopleArrows,
  faHandshake,
  faMicrophone,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import CV from '../assets/img/MORALES_ARIAS_DANIEL_CV.pdf';
import './AboutMe.css'; // Importa el archivo de estilos para la animación

const AboutMe: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    console.log("Iniciando descarga del CV...");

    setTimeout(() => {
      window.location.href = CV;
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <section id="sobremi" className="sobremi min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="contenido-seccion max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative z-10 transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Sobre Mí
        </h2>
        
        <p className="mb-12 text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
          <span className="font-semibold text-blue-600 dark:text-blue-400">Hola, soy Daniel Morales.</span> Soy Desarrollador Full Stack apasionado por la tecnología e innovación, con experiencia en el diseño y desarrollo de soluciones integrales para aplicaciones web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
              <FontAwesomeIcon icon={faHandshake} className="mr-3 text-blue-500" />
              Datos Personales
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="font-semibold">Cumpleaños:</span>
                <span>05 Julio 2000</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="font-semibold">Teléfono:</span>
                <span>9 8130 9352</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="font-semibold">Cargo:</span>
                <span>Desarrollador Full Stack</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
              <FontAwesomeIcon icon={faRocket} className="mr-3 text-blue-500" />
              Intereses
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: faMusic, label: 'Música' },
                { icon: faPlane, label: 'Viajar' },
                { icon: faCode, label: 'Codear' },
                { icon: faPalette, label: 'Pintar' },
                { icon: faMedal, label: 'Boxeo' },
                { icon: faCat, label: 'Gatos' },
                { icon: faDog, label: 'Perros' },
                { icon: faLaptopCode, label: 'Tecnología' },
                { icon: faRocket, label: 'Innovación' },
                { icon: faPeopleArrows, label: 'Crecimiento' },
                { icon: faHandshake, label: 'Networking' },
                { icon: faMicrophone, label: 'Comunicación' },
              ].map((interes, index) => (
                <div
                  key={index}
                  className="interes flex items-center space-x-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                >
                  <FontAwesomeIcon 
                    icon={interes.icon} 
                    className="text-2xl text-blue-500 dark:text-blue-400" 
                  />
                  <span className="text-gray-700 dark:text-gray-300">{interes.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handleDownload}
            className={`group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:shadow-xl ${
              isDownloading ? "animate-bounce scale-105" : ""
            }`}
          >
            <span className="relative z-10 flex items-center">
              Ver Currículum 
              <FontAwesomeIcon icon={faDownload} className="ml-2 group-hover:animate-bounce" />
            </span>
            <div className="absolute inset-0 bg-white rounded-full opacity-25 group-hover:opacity-35 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;