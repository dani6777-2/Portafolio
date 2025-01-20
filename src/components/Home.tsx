import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faDownload 
} from '@fortawesome/free-solid-svg-icons';

// Importamos las imágenes
import perfilImg from '../assets/img/perfil.jpeg';
import fondoImg from '../assets/img/fondo.jpg';
import CV from '../assets/img/Daniel_Morales_Arias.jpg';

const Home: React.FC = () => {
  const handleDownload = () => {
    window.location.href = CV;
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con efecto parallax y overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${fondoImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70 backdrop-blur-sm"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Contenedor de la imagen */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative">
              <img 
                src={perfilImg} 
                alt="Perfil de Daniel Morales" 
                className="w-40 h-40 rounded-full object-cover border-4 border-white/20 transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Texto principal con animaciones */}
          <div className="mt-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              DANIEL MORALES
            </h1>
            <h2 className="text-2xl font-light text-gray-300 mb-6 flex items-center justify-center space-x-3">
              <FontAwesomeIcon icon={faCode} className="text-blue-400" />
              <span>Analista Desarrollador</span>
            </h2>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={handleDownload}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span>Descargar CV</span>
                <FontAwesomeIcon icon={faDownload} className="ml-2" />
              </button>
            </div>

            {/* Redes sociales */}
            <div className="mt-10 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/daniel-23dma/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3"
                aria-label="LinkedIn de Daniel Morales"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transform group-hover:scale-110 transition-all duration-300"></div>
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-3xl text-gray-300 group-hover:text-blue-400 transform group-hover:scale-110 transition-all duration-300" 
                />
              </a>
              
              <a
                href="https://github.com/Dani6777/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3"
                aria-label="GitHub de Daniel Morales"
              >
                <div className="absolute inset-0 bg-gray-500 rounded-lg opacity-0 group-hover:opacity-20 transform group-hover:scale-110 transition-all duration-300"></div>
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-3xl text-gray-300 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;