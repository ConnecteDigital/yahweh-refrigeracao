import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/yahweh_refrigeracao_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Yahweh Refrigeração" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Phone Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:21984619958" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <Phone size={18} />
              <span>(21) 98461-9958</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Contato
              </button>
              <a 
                href="tel:21984619958" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors w-fit"
              >
                <Phone size={18} />
                <span>(21) 98461-9958</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

