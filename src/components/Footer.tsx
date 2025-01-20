import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faEnvelope,
  faCode,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white py-12 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Botón para volver al inicio */}
          <button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl"
            aria-label="Volver al inicio"
          >
            <FontAwesomeIcon 
              icon={faAngleUp} 
              className="text-2xl text-white group-hover:animate-bounce" 
            />
          </button>

          {/* Redes sociales */}
          <div className="mt-8 flex justify-center space-x-8">
            <a
              href="https://github.com/Dani6777/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group relative"
              aria-label="GitHub"
            >
              <div className="transform hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl text-gray-300 group-hover:text-white transition-colors"
                />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400">
                  GitHub
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-23dma/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group relative"
              aria-label="LinkedIn"
            >
              <div className="transform hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl text-gray-300 group-hover:text-blue-400 transition-colors"
                />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400">
                  LinkedIn
                </span>
              </div>
            </a>

            <a
              href="mailto:daniel.morales23@outlook.cl"
              className="social-link group relative"
              aria-label="Email"
            >
              <div className="transform hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-3xl text-gray-300 group-hover:text-red-400 transition-colors"
                />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400">
                  Email
                </span>
              </div>
            </a>
          </div>

          {/* Línea divisoria con gradiente */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto my-8"></div>

          {/* Información del pie de página */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              © 2024 Daniel Morales. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              Hecho con 
              <FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500 animate-pulse" />
              y
              <FontAwesomeIcon icon={faCode} className="mx-2 text-blue-400" />
              en Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;