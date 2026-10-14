import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Menu, X } from 'lucide-react';
import logo from '../assets/yahweh_refrigeracao_logo.png';
import { PHONE_DISPLAY, PHONE_HREF, waLink } from '../config/site';
import { bairrosPorRegiao, slugify } from '../data/bairros';
import BuscaBairro from './nav/BuscaBairro';

const navAntes = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#sobre', label: 'Sobre' },
];

const navDepois = [
  { href: '/#blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
];

const regioes = Object.entries(bairrosPorRegiao());
const linkBairro = (bairro) => `/assistencia-tecnica/${bairro.slug}`;
const whatsappUrl = waLink('Olá! Vim pelo site e gostaria de agendar um atendimento.');

// Painel do PC: busca no topo, regiões à esquerda, bairros da região à direita.
const PainelAreas = ({ onNavigate }) => {
  const [regiaoAtiva, setRegiaoAtiva] = useState(regioes[0][0]);
  const lista = regioes.find(([regiao]) => regiao === regiaoAtiva)[1];

  return (
    <div className="site-container pt-2 pb-4">
      <div className="grid grid-cols-[17rem_1fr] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-ink/10">
        <div className="bg-ice p-3">
          <p className="px-3 pt-2 pb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Regiões</p>
          <ul className="space-y-1">
            {regioes.map(([regiao, bairros]) => (
              <li key={regiao}>
                <button
                  type="button"
                  aria-pressed={regiao === regiaoAtiva}
                  onMouseEnter={() => setRegiaoAtiva(regiao)}
                  onFocus={() => setRegiaoAtiva(regiao)}
                  onClick={() => setRegiaoAtiva(regiao)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold leading-snug ${
                    regiao === regiaoAtiva ? 'bg-white text-brand shadow-sm' : 'text-slate-700 hover:bg-white/60'
                  }`}
                >
                  <span>{regiao}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${regiao === regiaoAtiva ? 'bg-ice-2 text-brand' : 'bg-white text-slate-500'}`}>
                    {bairros.length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex max-h-[min(36rem,calc(100vh-7rem))] flex-col p-6">
          <BuscaBairro onNavigate={onNavigate} />

          <div className="mt-5 flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-extrabold text-ink">{regiaoAtiva}</h2>
            <a
              href={`/areas-atendidas#${slugify(regiaoAtiva)}`}
              onClick={onNavigate}
              className="text-sm font-semibold text-brand hover:underline"
            >
              Ver região
            </a>
          </div>

          <ul className="mt-3 grid flex-1 grid-cols-3 content-start gap-1 overflow-y-auto pr-1 xl:grid-cols-4">
            {lista.map((bairro) => (
              <li key={bairro.slug}>
                <a
                  href={linkBairro(bairro)}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-2 text-[15px] text-slate-700 hover:bg-ice hover:text-brand"
                >
                  {bairro.nome}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
            <a href="/areas-atendidas" onClick={onNavigate} className="font-semibold text-ink hover:text-brand">
              Ver todas as áreas atendidas
            </a>
            <a
              href={waLink('Olá! Gostaria de saber se vocês atendem no meu bairro.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zap hover:underline"
            >
              Não achou seu bairro? Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lista de regiões em sanfona para a gaveta do celular.
const RegioesMobile = ({ onNavigate }) => {
  const [aberta, setAberta] = useState(null);

  return (
    <ul className="space-y-2">
      {regioes.map(([regiao, bairros]) => {
        const estaAberta = aberta === regiao;
        return (
          <li key={regiao} className="rounded-2xl bg-ice">
            <button
              type="button"
              onClick={() => setAberta(estaAberta ? null : regiao)}
              aria-expanded={estaAberta}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
            >
              <span className="flex-1 font-bold leading-snug text-ink">{regiao}</span>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-500">{bairros.length}</span>
              <ChevronDown className={`h-5 w-5 flex-shrink-0 text-slate-500 ${estaAberta ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {estaAberta && (
              <div className="px-3 pb-3">
                <ul className="grid grid-cols-2 gap-2">
                  {bairros.map((bairro) => (
                    <li key={bairro.slug}>
                      <a
                        href={linkBairro(bairro)}
                        onClick={onNavigate}
                        className="flex min-h-11 items-center rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-700 active:bg-ice-2"
                      >
                        {bairro.nome}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={`/areas-atendidas#${slugify(regiao)}`}
                  onClick={onNavigate}
                  className="mt-3 block px-1 text-sm font-semibold text-brand"
                >
                  Ver região completa
                </a>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const [gavetaAberta, setGavetaAberta] = useState(false);
  const [painelAberto, setPainelAberto] = useState(false);
  const headerRef = useRef(null);
  const fecharTimer = useRef(null);

  const fecharTudo = () => {
    setGavetaAberta(false);
    setPainelAberto(false);
  };

  // Painel do PC: fecha com Esc ou clique fora.
  useEffect(() => {
    if (!painelAberto) return undefined;
    const fecharFora = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setPainelAberto(false);
    };
    const fecharEsc = (event) => {
      if (event.key === 'Escape') setPainelAberto(false);
    };
    document.addEventListener('mousedown', fecharFora);
    document.addEventListener('keydown', fecharEsc);
    return () => {
      document.removeEventListener('mousedown', fecharFora);
      document.removeEventListener('keydown', fecharEsc);
    };
  }, [painelAberto]);

  // Gaveta do celular: trava a rolagem da página por trás enquanto aberta,
  // para que o dedo role só o menu.
  useEffect(() => {
    if (!gavetaAberta) return undefined;
    const raiz = document.documentElement;
    const anterior = raiz.style.overflow;
    raiz.style.overflow = 'hidden';
    const fecharEmTelaGrande = () => {
      if (window.innerWidth >= 1024) setGavetaAberta(false);
    };
    window.addEventListener('resize', fecharEmTelaGrande);
    return () => {
      raiz.style.overflow = anterior;
      window.removeEventListener('resize', fecharEmTelaGrande);
    };
  }, [gavetaAberta]);

  useEffect(() => () => clearTimeout(fecharTimer.current), []);

  // Abre ao passar o mouse; ao sair, espera um instante e não fecha se o
  // usuário estiver digitando na busca do painel.
  const abrirPainel = () => {
    clearTimeout(fecharTimer.current);
    setPainelAberto(true);
  };
  const agendarFechamento = () => {
    clearTimeout(fecharTimer.current);
    fecharTimer.current = setTimeout(() => {
      const digitando = document.activeElement?.tagName === 'INPUT' && headerRef.current?.contains(document.activeElement);
      if (!digitando) setPainelAberto(false);
    }, 250);
  };

  const linkNav = 'rounded-full px-3.5 py-2 text-[15px] font-semibold text-slate-600 hover:bg-slate-100 hover:text-ink';

  return (
    <header
      ref={headerRef}
      onMouseLeave={agendarFechamento}
      onMouseEnter={() => clearTimeout(fecharTimer.current)}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white"
    >
      <div className="site-container flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="/" className="flex-shrink-0" onClick={fecharTudo}>
          <img src={logo} alt="Yahweh Refrigeração" width="168" height="48" className="h-9 w-auto lg:h-10" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navAntes.map((item) => (
            <a key={item.href} href={item.href} className={linkNav}>{item.label}</a>
          ))}
          <button
            type="button"
            onClick={() => setPainelAberto(!painelAberto)}
            onMouseEnter={abrirPainel}
            aria-expanded={painelAberto}
            className={`${linkNav} inline-flex items-center gap-1 ${painelAberto ? 'bg-ice text-brand' : ''}`}
          >
            Áreas atendidas
            <ChevronDown className={`h-4 w-4 ${painelAberto ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {navDepois.map((item) => (
            <a key={item.href} href={item.href} className={linkNav}>{item.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[15px] font-bold text-ink hover:bg-slate-100">
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zap px-5 py-2.5 text-[15px] font-bold text-white hover:bg-zap-dark"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamar no WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zap text-white"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setGavetaAberta(!gavetaAberta)}
            aria-expanded={gavetaAberta}
            aria-label={gavetaAberta ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-ink"
          >
            {gavetaAberta ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {painelAberto && (
        <div className="absolute inset-x-0 top-full hidden lg:block">
          <PainelAreas onNavigate={fecharTudo} />
        </div>
      )}

      {gavetaAberta && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-white lg:hidden">
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6">
            <nav aria-label="Principal" className="divide-y divide-slate-100">
              {[...navAntes, ...navDepois].map((item) => (
                <a key={item.href} href={item.href} onClick={fecharTudo} className="block py-4 text-lg font-bold text-ink">
                  {item.label}
                </a>
              ))}
            </nav>

            <section aria-label="Áreas atendidas" className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Áreas atendidas</h2>
              <div className="mt-3">
                <BuscaBairro onNavigate={fecharTudo} />
              </div>
              <div className="mt-4">
                <RegioesMobile onNavigate={fecharTudo} />
              </div>
              <a href="/areas-atendidas" onClick={fecharTudo} className="mt-4 block text-center text-sm font-semibold text-brand">
                Ver todas as áreas atendidas
              </a>
            </section>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-slate-200 bg-white p-4">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3.5 font-bold text-ink">
              <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
              Ligar
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-zap py-3.5 font-bold text-white"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
