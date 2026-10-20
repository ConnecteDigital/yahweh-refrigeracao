import React from 'react';
import {
  AirVent, ArrowRight, BadgeCheck, CheckCircle, MapPin, MessageCircle, Phone, Refrigerator, WashingMachine,
} from 'lucide-react';
import { bairrosVizinhos } from '../data/bairros';
import { bairroFaqs } from '../data/bairroFaqs';
import { PHONE_DISPLAY, PHONE_HREF, waLink } from '../config/site';
import SectionHeading from '../components/SectionHeading';
import { fotos } from '../data/fotos';

// Escolhe sempre a mesma variação de texto para o mesmo bairro, para que
// as páginas não fiquem idênticas entre si.
const variacao = (slug, opcoes, semente = 7) => {
  const hash = [...slug].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) >>> 0, semente);
  return opcoes[hash % opcoes.length];
};

const introducoes = [
  (b) => `Sua geladeira parou de gelar, a máquina de lavar não centrifuga ou o ar condicionado está pingando? A Yahweh Refrigeração atende em ${b.nome} com técnicos especializados que vão até a sua casa ou empresa, fazem o diagnóstico no local e resolvem o problema com peças originais.`,
  (b) => `Precisa de assistência técnica em ${b.nome}? A Yahweh Refrigeração faz conserto de geladeiras, máquinas de lavar e ar condicionado com atendimento domiciliar, sem que você precise transportar o equipamento.`,
  (b) => `Quem mora ou trabalha em ${b.nome} conta com a Yahweh Refrigeração para manutenção e conserto de eletrodomésticos. Atendemos geladeiras, máquinas de lavar e ar condicionado de todas as marcas, com orçamento claro e garantia no serviço.`,
  (b) => `Em ${b.nome}, a Yahweh Refrigeração oferece assistência técnica completa para geladeira, máquina de lavar e ar condicionado. A visita é agendada pelo WhatsApp e o técnico chega com as ferramentas e peças necessárias para resolver no mesmo atendimento sempre que possível.`,
  (b) => `Técnico de geladeira, máquina de lavar ou ar condicionado em ${b.nome}: a Yahweh Refrigeração atende em domicílio, com diagnóstico no local, peças originais e garantia de 90 dias em todos os serviços.`,
  (b) => `Eletrodoméstico com defeito em ${b.nome}? Fale com a Yahweh Refrigeração. Fazemos conserto e manutenção de geladeiras, lavadoras e ar condicionado na sua casa, com agendamento rápido pelo WhatsApp.`,
];

const complementos = [
  (b) => `Atendemos ${b.nome} e os bairros vizinhos todos os dias, inclusive fins de semana e feriados. Conte o defeito pelo WhatsApp e já combinamos o melhor horário para a visita.`,
  (b) => `Nossa equipe circula diariamente por ${b.nome} e arredores, o que agiliza o atendimento. Envie a marca, o modelo e o defeito do aparelho pelo WhatsApp para receber orientação e agendar.`,
  (b) => `Em ${b.nome}, o atendimento é feito no seu endereço: avaliamos o aparelho, explicamos o defeito e só executamos o serviço depois da sua aprovação do orçamento.`,
];

// Atalhos do topo: cada um abre o WhatsApp com a mensagem já pronta.
const aparelhos = [
  { icon: Refrigerator, nome: 'Geladeira', mensagem: 'minha geladeira' },
  { icon: WashingMachine, nome: 'Máquina de lavar', mensagem: 'minha máquina de lavar' },
  { icon: AirVent, nome: 'Ar condicionado', mensagem: 'meu ar condicionado' },
];

const garantias = ['Atendimento em casa', 'Garantia de 90 dias', 'Peças originais', 'Todos os dias, 24h'];

const servicos = (b) => [
  {
    foto: fotos.geladeiraSideBySide,
    title: `Conserto de geladeira em ${b.nome}`,
    text: 'Frost free, duplex, inverter e side by side.',
    itens: ['Troca de termostato e sensores', 'Recarga de gás', 'Troca de borracha de vedação', 'Reparo de placa eletrônica'],
  },
  {
    foto: fotos.maquinaDeLavar,
    title: `Conserto de máquina de lavar em ${b.nome}`,
    text: 'Lavadoras e lava e seca de todas as marcas.',
    itens: ['Troca de bomba de drenagem', 'Reparo de motor e câmbio', 'Troca de válvula de entrada', 'Ajuste de suspensão'],
  },
  {
    foto: fotos.arCondicionado,
    title: `Ar condicionado em ${b.nome}`,
    text: 'Split, inverter e janela.',
    itens: ['Instalação profissional', 'Higienização completa', 'Recarga de gás', 'Manutenção preventiva'],
  },
];

const defeitos = [
  { titulo: 'Geladeira', itens: ['Não gela ou gela pouco', 'Freezer gela e a geladeira não', 'Barulho alto ou estalos', 'Gelo acumulado no fundo', 'Vazamento de água', 'Não liga ou desliga sozinha'] },
  { titulo: 'Máquina de lavar', itens: ['Não liga', 'Não enche de água', 'Não centrifuga', 'Não esvazia a água', 'Vaza por baixo', 'Faz barulho ou balança muito'] },
  { titulo: 'Ar condicionado', itens: ['Não gela', 'Pingando água dentro de casa', 'Cheiro ruim ao ligar', 'Barulho na unidade externa', 'Desliga sozinho', 'Luz piscando ou código de erro'] },
];

const passos = (b) => [
  { titulo: 'Chame no WhatsApp', texto: `Conte o aparelho, a marca e o defeito, e informe que está em ${b.nome}.` },
  { titulo: 'Agende a visita', texto: 'Combinamos o melhor dia e horário, inclusive fins de semana.' },
  { titulo: 'Diagnóstico no local', texto: 'O técnico avalia o aparelho e passa o orçamento antes de começar.' },
  { titulo: 'Conserto com garantia', texto: 'Peças originais e garantia de 90 dias no serviço.' },
];

const marcas = ['Electrolux', 'Brastemp', 'Consul', 'LG', 'Samsung', 'Midea', 'Philco', 'Panasonic'];

const BairroPage = ({ bairro }) => {
  const vizinhos = bairrosVizinhos(bairro);
  const whatsappGeral = waLink(`Olá! Estou em ${bairro.nome} e preciso de assistência técnica.`);

  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Topo: título curto, centralizado, e atalho direto por aparelho */}
      <section className="bg-gradient-to-b from-ice to-white pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="site-container text-center">
          <nav aria-label="Navegação estrutural" className="text-sm text-slate-500">
            <a href="/" className="hover:text-brand">Início</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/areas-atendidas" className="hover:text-brand">Áreas atendidas</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-slate-700">{bairro.nome}</span>
          </nav>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm ring-1 ring-ice-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {bairro.local}
          </p>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Assistência técnica em <span className="text-brand">{bairro.nome}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Conserto de geladeira, máquina de lavar e ar condicionado na sua casa, com garantia de 90 dias.
          </p>

          <p className="mt-10 text-sm font-bold uppercase tracking-wider text-slate-500">O que precisa de conserto?</p>
          <ul className="mx-auto mt-4 grid max-w-3xl gap-3 sm:grid-cols-3">
            {aparelhos.map((aparelho) => {
              const Icon = aparelho.icon;
              return (
                <li key={aparelho.nome}>
                  <a
                    href={waLink(`Olá! Estou em ${bairro.nome} e ${aparelho.mensagem} precisa de conserto.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm hover:border-brand hover:shadow-md sm:flex-col sm:items-center sm:p-6 sm:text-center"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ice text-brand group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-bold text-ink">{aparelho.nome}</span>
                      <span className="mt-0.5 inline-flex items-center gap-1 text-sm font-semibold text-zap">
                        Chamar no WhatsApp
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-slate-600">
            Prefere ligar?{' '}
            <a href={PHONE_HREF} className="font-bold text-ink underline decoration-ice-2 decoration-2 underline-offset-4 hover:text-brand">
              {PHONE_DISPLAY}
            </a>
          </p>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
            {garantias.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 md:py-20">
        <div className="site-container">
          <SectionHeading eyebrow="Serviços" title={`O que fazemos em ${bairro.nome}`} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicos(bairro).map((servico) => (
              <article key={servico.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <img
                  src={servico.foto.src}
                  alt={servico.foto.alt}
                  style={{ objectPosition: servico.foto.posicao }}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-snug text-ink">{servico.title}</h3>
                  <p className="mt-1 text-slate-600">{servico.text}</p>
                  <ul className="mt-4 space-y-2">
                    {servico.itens.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-zap" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o atendimento + como funciona */}
      <section className="bg-ice py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Atendimento local" title={`Técnico em ${bairro.nome}`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
              <p>{variacao(bairro.slug, introducoes)(bairro)}</p>
              <p>{variacao(bairro.slug, complementos, 13)(bairro)}</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-extrabold text-ink">Como funciona</h2>
            <ol className="mt-6 space-y-6">
              {passos(bairro).map((passo, index) => (
                <li key={passo.titulo} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{passo.titulo}</h3>
                    <p className="mt-1 text-slate-600">{passo.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Defeitos comuns + marcas */}
      <section className="py-16 md:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Defeitos comuns"
            title={`Problemas que resolvemos em ${bairro.nome}`}
            subtitle="Se o seu aparelho tem algum destes sinais, chame um técnico antes que o defeito piore."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {defeitos.map((grupo) => (
              <div key={grupo.titulo} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-ink">{grupo.titulo} com defeito</h3>
                <ul className="mt-4 space-y-2.5">
                  {grupo.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Marcas que atendemos em {bairro.nome}</h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {marcas.map((marca) => (
                <li key={marca} className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700">
                  {marca}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perguntas frequentes (também vão para o Google como FAQPage) */}
      <section className="bg-ice py-16 md:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-10 space-y-3">
            {bairroFaqs(bairro).map((faq) => (
              <details key={faq.q} className="group rounded-2xl bg-white p-5 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-2xl font-normal leading-none text-brand group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bairros vizinhos: links internos entre as páginas */}
      {vizinhos.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="site-container">
            <SectionHeading eyebrow={bairro.regiao} title={`Também atendemos perto de ${bairro.nome}`} />
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {vizinhos.map((vizinho) => (
                <li key={vizinho.slug}>
                  <a
                    href={`/assistencia-tecnica/${vizinho.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ice px-4 py-2 font-semibold text-ink hover:bg-ice-2 hover:text-brand"
                  >
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {vizinho.nome}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center">
              <a href="/areas-atendidas" className="font-semibold text-brand hover:underline">Ver todas as áreas atendidas</a>
            </p>
          </div>
        </section>
      )}

      {/* Chamada final */}
      <section className="pb-16 md:pb-20">
        <div className="site-container">
          <div className="rounded-3xl bg-ink px-6 py-12 text-center md:px-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Precisa de técnico em {bairro.nome}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Fale agora com a Yahweh Refrigeração e agende a visita.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappGeral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zap px-8 py-4 text-lg font-bold text-white hover:bg-zap-dark"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-lg font-bold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BairroPage;
