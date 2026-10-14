import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/yahweh_refrigeracao_logo.png';
import { PHONE_DISPLAY, PHONE_HREF } from '../config/site';

const navItems = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/areas-atendidas', label: 'Áreas Atendidas' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80">
            <img src={logo} alt="Yahweh Refrigeração" width="168" height="48" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone Button */}
          <div className="hidden md:flex items-center">
            <a 
              href={PHONE_HREF} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
            >
              <Phone size={18} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={PHONE_HREF} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 w-fit"
              >
                <Phone size={18} />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
