// Loader.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Círculos decorativos animados */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        {/* Contenedor principal del loader */}
        <div className="flex flex-col items-center space-y-4">
          {/* Animación de código */}
          <div className="flex items-center justify-center space-x-2">
            <FontAwesomeIcon 
              icon={faLessThan} 
              className="text-blue-400 text-2xl animate-pulse" 
            />
            <FontAwesomeIcon 
              icon={faCode} 
              className="text-4xl text-blue-500 animate-bounce" 
            />
            <FontAwesomeIcon 
              icon={faGreaterThan} 
              className="text-blue-400 text-2xl animate-pulse" 
            />
          </div>

          {/* Texto "Cargando" con efecto de escritura */}
          <div className="text-white font-mono">
            <span className="inline-flex overflow-hidden animate-typing">
              console.log("Cargando...")
            </span>
          </div>

          {/* Barra de progreso */}
          <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;