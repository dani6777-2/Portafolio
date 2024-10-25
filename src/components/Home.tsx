import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Importamos las imágenes
import perfilImg from '../assets/img/perfil.webp';
import fondoImg from '../assets/img/fondo.jpg';

const Home: React.FC = () => {
  return (
    <section
      id="inicio"
      className="inicio bg-cover bg-center text-white h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${fondoImg})`,
      }}
    >
      <div className="contenido-banner text-center backdrop-blur-md bg-black/30 dark:bg-black/50 p-8 rounded-lg">
        <div className="container-img mb-4">
          {/* Usamos la imagen importada */}
          <img src={perfilImg} alt="Perfil de Daniel Morales" className="rounded-full w-32 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold">DANIEL MORALES</h1>
        <h2 className="text-2xl font-light">Analista Desarrollador</h2>
        <div className="redes mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/daniel-23dma/" aria-label="LinkedIn de Daniel Morales">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://github.com/Dani6777/" aria-label="GitHub de Daniel Morales">
            <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;