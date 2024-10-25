import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white p-8">
      <div className="text-center">
        {/* Botón para volver al inicio */}
        <a href="#inicio" className="text-xl hover:text-blue-500 transition-colors duration-300">
          <i className="fa-solid fa-angles-up"></i>
        </a>
        
        {/* Redes sociales */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/Dani6777/" className="hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-300">
            <i className="fa-brands fa-github text-3xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/daniel-23dma/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <i className="fa-brands fa-linkedin text-3xl"></i>
          </a>
          <a href="mailto:daniel.morales23@outlook.cl" className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">
            <i className="fa-solid fa-envelope text-3xl"></i>
          </a>
        </div>

        {/* Información del pie de página */}
        <div className="mt-6">
          <p className="text-sm text-gray-400 dark:text-gray-500">© 2024 Daniel Morales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;