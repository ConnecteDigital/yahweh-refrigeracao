import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/yahweh_refrigeracao_logo.png';
import { EMAIL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF, waLink } from '../config/site';

const Footer = () => {
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os serviços.";
  const whatsappUrl = waLink(whatsappMessage);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="site-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Yahweh Refrigeração" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A Yahweh Refrigeração é especializada em assistência técnica de geladeiras, 
              máquinas de lavar e ar condicionado. Oferecemos atendimento domiciliar 24 horas 
              em toda a região metropolitana com qualidade e agilidade.
            </p>
            <div className="flex space-x-4">
              <a 
                href={whatsappUrl}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:bg-green-600"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href={INSTAGRAM_URL}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 p-3 rounded-full hover:bg-purple-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={`mailto:${EMAIL}`}
                aria-label="E-mail"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#inicio"
                  className="text-gray-300 hover:text-white"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="/#sobre"
                  className="text-gray-300 hover:text-white"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="/#servicos"
                  className="text-gray-300 hover:text-white"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="/areas-atendidas"
                  className="text-gray-300 hover:text-white"
                >
                  Áreas Atendidas
                </a>
              </li>
              <li>
                <a 
                  href="/#blog"
                  className="text-gray-300 hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/#contato"
                  className="text-gray-300 hover:text-white"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href={PHONE_HREF} className="text-gray-300 hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-white break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <a href="/areas-atendidas" className="text-gray-300 hover:text-white">Rio de Janeiro e Região Metropolitana</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">24h, 7 dias por semana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Yahweh Refrigeração. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

