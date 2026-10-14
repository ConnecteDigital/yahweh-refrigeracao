import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Phone, Menu, X } from 'lucide-react';
import logo from '../assets/yahweh_refrigeracao_logo.png';
import { PHONE_DISPLAY, PHONE_HREF } from '../config/site';
import { bairrosPorRegiao, slugify } from '../data/bairros';

const navAntes = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
];

const navDepois = [
  { href: '/#blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
];

const regioes = Object.entries(bairrosPorRegiao());
const linkBairro = (bairro) => `/assistencia-tecnica/${bairro.slug}`;

// Menu suspenso do desktop: regiões à esquerda, bairros da região escolhida à direita.
const AreasDesktop = ({ onClose }) => {
  const [regiaoAtiva, setRegiaoAtiva] = useState(regioes[0][0]);
  const lista = regioes.find(([regiao]) => regiao === regiaoAtiva)[1];

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 flex gap-8 max-h-[75vh]">
        <ul className="w-72 flex-shrink-0 space-y-1 overflow-y-auto">
          {regioes.map(([regiao, bairros]) => (
            <li key={regiao}>
              <button
                type="button"
                onMouseEnter={() => setRegiaoAtiva(regiao)}
                onFocus={() => setRegiaoAtiva(regiao)}
                onClick={() => setRegiaoAtiva(regiao)}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                  regiao === regiaoAtiva ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{regiao}</span>
                <span className="text-xs text-gray-500 ml-2">{bairros.length}</span>
              </button>
            </li>
          ))}
          <li className="pt-2 border-t border-gray-100 mt-2">
            <a href="/areas-atendidas" onClick={onClose} className="block px-3 py-2 font-semibold text-blue-600 hover:underline">
              Ver todas as áreas atendidas
            </a>
          </li>
        </ul>

        <div className="flex-1 overflow-y-auto">
          <a
            href={`/areas-atendidas#${slugify(regiaoAtiva)}`}
            onClick={onClose}
            className="inline-block text-lg font-bold text-gray-900 hover:text-blue-600 mb-4"
          >
            {regiaoAtiva}
          </a>
          <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2">
            {lista.map((bairro) => (
              <li key={bairro.slug}>
                <a href={linkBairro(bairro)} onClick={onClose} className="text-gray-700 hover:text-blue-600 hover:underline">
                  {bairro.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Sanfona do celular: região > bairros.
const AreasMobile = ({ onClose }) => {
  const [aberta, setAberta] = useState(null);

  return (
    <ul className="mt-2 ml-2 border-l-2 border-blue-100 pl-3 space-y-1">
      {regioes.map(([regiao, bairros]) => (
        <li key={regiao}>
          <button
            type="button"
            onClick={() => setAberta(aberta === regiao ? null : regiao)}
            aria-expanded={aberta === regiao}
            className="w-full flex items-center justify-between py-2 text-left text-gray-800 font-medium"
          >
            <span>{regiao} <span className="text-xs text-gray-500">({bairros.length})</span></span>
            {aberta === regiao ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {aberta === regiao && (
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pb-3 pl-2">
              {bairros.map((bairro) => (
                <li key={bairro.slug}>
                  <a href={linkBairro(bairro)} onClick={onClose} className="text-sm text-blue-600">
                    {bairro.nome}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li>
        <a href="/areas-atendidas" onClick={onClose} className="block py-2 text-sm font-semibold text-blue-600">
          Ver todas as áreas atendidas
        </a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areasDesktop, setAreasDesktop] = useState(false);
  const [areasMobile, setAreasMobile] = useState(false);
  const headerRef = useRef(null);

  // Fecha o menu de áreas ao clicar fora ou apertar Esc.
  useEffect(() => {
    if (!areasDesktop) return undefined;
    const fecharFora = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setAreasDesktop(false);
    };
    const fecharEsc = (event) => {
      if (event.key === 'Escape') setAreasDesktop(false);
    };
    document.addEventListener('mousedown', fecharFora);
    document.addEventListener('keydown', fecharEsc);
    return () => {
      document.removeEventListener('mousedown', fecharFora);
      document.removeEventListener('keydown', fecharEsc);
    };
  }, [areasDesktop]);

  const fecharTudo = () => {
    setIsMenuOpen(false);
    setAreasDesktop(false);
    setAreasMobile(false);
  };

  const linkClasse = 'text-gray-700 hover:text-blue-600';

  return (
    <header ref={headerRef} onMouseLeave={() => setAreasDesktop(false)} className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80">
            <img src={logo} alt="Yahweh Refrigeração" width="168" height="48" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navAntes.map((item) => (
              <a key={item.href} href={item.href} className={linkClasse}>{item.label}</a>
            ))}
            <button
              type="button"
              onClick={() => setAreasDesktop(!areasDesktop)}
              onMouseEnter={() => setAreasDesktop(true)}
              aria-expanded={areasDesktop}
              aria-haspopup="true"
              className={`flex items-center space-x-1 ${areasDesktop ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              <span>Áreas Atendidas</span>
              <ChevronDown size={16} />
            </button>
            {navDepois.map((item) => (
              <a key={item.href} href={item.href} className={linkClasse}>{item.label}</a>
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-4 pt-4">
              {navAntes.map((item) => (
                <a key={item.href} href={item.href} onClick={fecharTudo} className={linkClasse}>{item.label}</a>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => setAreasMobile(!areasMobile)}
                  aria-expanded={areasMobile}
                  className="w-full flex items-center justify-between text-gray-700"
                >
                  <span className="flex items-center space-x-2">
                    <MapPin size={18} className="text-blue-600" />
                    <span>Áreas Atendidas</span>
                  </span>
                  {areasMobile ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {areasMobile && <AreasMobile onClose={fecharTudo} />}
              </div>
              {navDepois.map((item) => (
                <a key={item.href} href={item.href} onClick={fecharTudo} className={linkClasse}>{item.label}</a>
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

      {areasDesktop && (
        <div className="hidden md:block">
          <AreasDesktop onClose={fecharTudo} />
        </div>
      )}
    </header>
  );
};

export default Header;
