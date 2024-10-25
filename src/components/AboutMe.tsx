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
  faGlobe,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import CV from '../assets/img/Daniel_Morales_Arias.jpg';
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
    <section id="sobremi" className="sobremi bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10 relative">
      <div className="contenido-seccion max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">Sobre Mí</h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center">
          <span className="font-semibold text-blue-600 dark:text-blue-400">Hola, soy Daniel Morales.</span> Soy Desarrollador Full Stack apasionado por la tecnología e innovación, con experiencia en el diseño y desarrollo de soluciones integrales para aplicaciones web.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Datos Personales</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>Cumpleaños:</strong> 05 Julio 2000</li>
              <li><strong>Teléfono:</strong> 9 8130 9352</li>
              <li><strong>Cargo:</strong> Analista Desarrollador</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Intereses</h3>
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
    { icon: faPeopleArrows, label: 'Crecimiento Profesional' },
    { icon: faHandshake, label: 'Networking' },
    { icon: faMicrophone, label: 'Comunicación' },
  ].map((interes, index) => (
    <div
      key={index}
      className="interes flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 ease-out"
    >
      <FontAwesomeIcon icon={interes.icon} className="text-2xl text-blue-600 dark:text-blue-400" />
      <span className="text-gray-700 dark:text-gray-300 font-semibold">{interes.label}</span>
    </div>
  ))}
</div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleDownload}
            className={`wiggle-button px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 ${
              isDownloading ? "animate-bounce scale-105" : ""
            }`}
          >
            Descargar CV <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </button>
        </div>
      </div>
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-purple-300 dark:from-blue-900 dark:to-purple-900 opacity-20"></div>
    </section>
  );
};

export default AboutMe;