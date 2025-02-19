import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faGears,
  faLaptopCode,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: '#inicio', label: 'INICIO', icon: faHome },
    { href: '#sobremi', label: 'SOBRE MÍ', icon: faUser },
    { href: '#skills', label: 'SKILLS', icon: faCode },
    { href: '#curriculum', label: 'TRAYECTORIA', icon: faBriefcase },
    { href: '#services', label: 'SERVICIOS', icon: faGears },
    { href: '#portafolio', label: 'PORTAFOLIO', icon: faLaptopCode },
    { href: '#faq', label: 'FAQ', icon: faQuestionCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body scroll
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  return (
    <div className={`container-header ${menuOpen ? 'overflow-hidden' : ''}`}>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
          ${scrolled 
            ? 'py-2 bg-gray-900/95 backdrop-blur-lg shadow-lg' 
            : 'py-4 bg-gray-900/75 backdrop-blur-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="logo">
              <a 
                href="#sobremi" 
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Daniel
              </a>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className="text-sm opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                      />
                      <span className="relative text-sm">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Menu Responsive Button */}
            <div className="lg:hidden flex items-center">
              <button
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-300 focus:outline-none"
                onClick={toggleMenu}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {menuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Menu */}
        <div 
          className={`fixed inset-x-0 top-[3.5rem] bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            menuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-full invisible'
          } lg:hidden`}
        >
          <nav className="max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <ul className="flex flex-col py-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="flex items-center space-x-4 px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-xl w-6" />
                    <span className="text-base">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Header;