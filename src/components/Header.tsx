import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`container-header ${menuOpen ? 'overflow-hidden' : ''}`}>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-gray-800 text-white shadow-lg">
        {/* Logo */}
        <div className="logo text-xl font-bold">
          <a href="#sobremi" className="hover:text-blue-500 transition-colors duration-300">Daniel</a>
        </div>

        {/* Menu Desktop */}
        <nav id="nav" className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="hover:text-blue-500 transition-colors duration-300">INICIO</a></li>
            <li><a href="#sobremi" className="hover:text-blue-500 transition-colors duration-300">SOBRE MÍ</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition-colors duration-300">SKILLS</a></li>
            <li><a href="#curriculum" className="hover:text-blue-500 transition-colors duration-300">TRAYECTORIA</a></li>
            <li><a href="#portafolio" className="hover:text-blue-500 transition-colors duration-300">PORTAFOLIO</a></li>
          </ul>
        </nav>

        {/* Menu Responsive */}
        <div className="nav-responsive md:hidden cursor-pointer" onClick={toggleMenu}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>

        {/* Responsive Menu */}
        {menuOpen && (
          <nav className="absolute top-16 right-0 w-full bg-gray-800 text-white md:hidden transition-all duration-300 ease-in-out">
            <ul className="flex flex-col space-y-4 p-6">
              <li><a href="#inicio" className="hover:text-blue-500" onClick={toggleMenu}>INICIO</a></li>
              <li><a href="#sobremi" className="hover:text-blue-500" onClick={toggleMenu}>SOBRE MÍ</a></li>
              <li><a href="#skills" className="hover:text-blue-500" onClick={toggleMenu}>SKILLS</a></li>
              <li><a href="#curriculum" className="hover:text-blue-500" onClick={toggleMenu}>TRAYECTORIA</a></li>
              <li><a href="#portafolio" className="hover:text-blue-500" onClick={toggleMenu}>PORTAFOLIO</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Bloquear scroll en el fondo cuando el menú está abierto */}
      <style>{`
        body {
          overflow: ${menuOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </div>
  );
};

export default Header;