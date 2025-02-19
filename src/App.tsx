import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faMoon,
  faArrowUp 
} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Services from './components/services';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar preferencia guardada o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Efecto para el tema oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Efecto para el loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Efecto para el botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="App bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen relative">
      <Header />

      {/* Contenedor de botones flotantes */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 sm:gap-6">
        {/* Botón de tema flotante */}
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group flex items-center justify-center"
          aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          <FontAwesomeIcon 
            icon={darkMode ? faSun : faMoon} 
            className={`text-lg sm:text-xl ${
              darkMode 
                ? 'text-yellow-400 group-hover:text-yellow-300' 
                : 'text-gray-600 group-hover:text-gray-800'
            }`}
          />
        </button>

        {/* Botón de scroll to top */}
        <button
          onClick={scrollToTop}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 dark:bg-blue-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center ${
            showScrollTop 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Volver arriba"
        >
          <FontAwesomeIcon 
            icon={faArrowUp} 
            className="text-lg sm:text-xl text-white" 
          />
        </button>
      </div>

      <main className="relative">
        <Home />
        <AboutMe />
        <Skills />
        <Curriculum />
        <Services />
        <Portfolio />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;