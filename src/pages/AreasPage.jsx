import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { bairrosPorRegiao, slugify } from '../data/bairros';
import { waLink } from '../config/site';
import BuscaBairro from '../components/nav/BuscaBairro';

const AreasPage = () => {
  const regioes = Object.entries(bairrosPorRegiao());

  return (
    <main className="pt-16 lg:pt-[72px]">
      <section className="bg-gradient-to-b from-ice to-white pt-12 pb-10 md:pt-16">
        <div className="site-container text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">Áreas atendidas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Assistência técnica em casa no Rio de Janeiro, Niterói, Duque de Caxias e Baixada Fluminense.
          </p>
          <div className="mx-auto mt-8 max-w-xl text-left">
            <BuscaBairro />
          </div>
          <nav aria-label="Regiões" className="mt-8 flex flex-wrap justify-center gap-2">
            {regioes.map(([regiao]) => (
              <a
                key={regiao}
                href={`#${slugify(regiao)}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand"
              >
                {regiao}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="site-container space-y-6">
          {regioes.map(([regiao, lista]) => (
            <div key={regiao} id={slugify(regiao)} className="scroll-mt-24 rounded-3xl border border-slate-200 p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">{regiao}</h2>
                <span className="text-sm font-semibold text-slate-500">{lista.length} {lista.length === 1 ? 'local' : 'locais'}</span>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {lista.map((bairro) => (
                  <li key={bairro.slug}>
                    <a
                      href={`/assistencia-tecnica/${bairro.slug}`}
                      className="flex min-h-11 items-center gap-2 rounded-xl bg-ice px-3 py-2 text-[15px] font-medium text-slate-700 hover:bg-ice-2 hover:text-brand"
                    >
                      <MapPin className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                      {bairro.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-3xl bg-ink px-6 py-10 text-center">
            <h2 className="text-2xl font-extrabold text-white">Não encontrou seu bairro?</h2>
            <p className="mt-2 text-slate-300">Atendemos toda a região metropolitana. Pergunte pelo WhatsApp.</p>
            <a
              href={waLink('Olá! Gostaria de saber se vocês atendem no meu bairro.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-zap px-8 py-4 font-bold text-white hover:bg-zap-dark"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Perguntar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AreasPage;
