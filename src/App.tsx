import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Actualizar la clase del modo oscuro en el <html> cuando cambia el estado
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Header />

      {/* Botón para alternar el modo oscuro, ahora en la parte inferior derecha */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-lg border border-gray-400 dark:border-gray-600"
        >
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>

      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Curriculum />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;