import React from 'react';
import {
  CalendarCheck, CheckCircle, Clock, Home, MapPin, MessageCircle, Phone, ShieldCheck, Wrench,
} from 'lucide-react';
import { bairrosVizinhos } from '../data/bairros';
import { bairroFaqs } from '../data/bairroFaqs';
import { PHONE_DISPLAY, PHONE_HREF, waLink } from '../config/site';
import geladeiraImg from '../assets/geladeira2.jpg';
import maquinaLavarImg from '../assets/maquina_lavar_nova_2.png';
import arCondicionadoImg from '../assets/ar_condicionado1.jpg';

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

const servicos = (b) => [
  {
    image: geladeiraImg,
    title: `Conserto de geladeira em ${b.nome}`,
    text: 'Geladeira que não gela, faz barulho, forma gelo demais ou vaza água. Atendemos modelos frost free, duplex, inverter e side by side.',
    itens: ['Troca de termostato e sensores', 'Recarga de gás', 'Troca de borracha de vedação', 'Reparo de placa eletrônica'],
  },
  {
    image: maquinaLavarImg,
    title: `Conserto de máquina de lavar em ${b.nome}`,
    text: 'Máquina que não liga, não enche, não centrifuga, vaza ou faz barulho. Reparo em lavadoras e lava e seca de todas as marcas.',
    itens: ['Troca de bomba de drenagem', 'Reparo de motor e câmbio', 'Troca de válvula de entrada', 'Ajuste de suspensão'],
  },
  {
    image: arCondicionadoImg,
    title: `Ar condicionado em ${b.nome}`,
    text: 'Instalação, limpeza, manutenção preventiva e conserto de ar condicionado split, inverter e janela.',
    itens: ['Instalação profissional', 'Higienização completa', 'Recarga de gás', 'Manutenção preventiva'],
  },
];

const defeitos = [
  {
    titulo: 'Geladeira',
    itens: ['Não gela ou gela pouco', 'Freezer gelando e geladeira não', 'Barulho alto ou estalos', 'Acúmulo de gelo no fundo', 'Vazamento de água', 'Não liga ou desliga sozinha'],
  },
  {
    titulo: 'Máquina de lavar',
    itens: ['Não liga', 'Não enche de água', 'Não centrifuga', 'Não esvazia a água', 'Vaza pela parte de baixo', 'Faz barulho ou balança muito'],
  },
  {
    titulo: 'Ar condicionado',
    itens: ['Não gela', 'Pingando água dentro de casa', 'Cheiro ruim ao ligar', 'Barulho na unidade externa', 'Desliga sozinho', 'Luz piscando ou código de erro'],
  },
];

const passos = (b) => [
  { icon: MessageCircle, titulo: 'Chame no WhatsApp', texto: `Conte o aparelho, a marca e o defeito, e informe que está em ${b.nome}.` },
  { icon: CalendarCheck, titulo: 'Agende a visita', texto: 'Combinamos o melhor dia e horário para você, inclusive fins de semana.' },
  { icon: Wrench, titulo: 'Diagnóstico no local', texto: 'O técnico avalia o aparelho na sua casa e passa o orçamento antes de começar.' },
  { icon: ShieldCheck, titulo: 'Serviço com garantia', texto: 'Conserto com peças originais e garantia de 90 dias.' },
];

const diferenciais = [
  { icon: Home, titulo: 'Atendimento domiciliar', texto: 'Vamos até você, sem precisar transportar o aparelho.' },
  { icon: ShieldCheck, titulo: 'Garantia de 90 dias', texto: 'Em todos os serviços realizados.' },
  { icon: Wrench, titulo: 'Peças originais', texto: 'Mais durabilidade e segurança no conserto.' },
  { icon: Clock, titulo: 'Todos os dias', texto: 'Atendimento 24 horas, inclusive fins de semana e feriados.' },
];

const marcas = ['Electrolux', 'Brastemp', 'Consul', 'LG', 'Samsung', 'Midea', 'Philco', 'Panasonic'];

const BairroPage = ({ bairro }) => {
  const whatsappUrl = waLink(`Olá! Estou em ${bairro.nome} e preciso de assistência técnica.`);
  const vizinhos = bairrosVizinhos(bairro);

  const ctas = (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 font-semibold text-lg"
      >
        <MessageCircle size={20} />
        <span>Chamar no WhatsApp</span>
      </a>
      <a
        href={PHONE_HREF}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 font-semibold text-lg"
      >
        <Phone size={20} />
        <span>{PHONE_DISPLAY}</span>
      </a>
    </div>
  );

  return (
    <main className="pt-20">
      {/* Topo: palavra-chave principal + chamada para ação */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav aria-label="Navegação estrutural" className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-blue-600">Início</a>
            <span className="mx-2">/</span>
            <a href="/areas-atendidas" className="hover:text-blue-600">Áreas Atendidas</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{bairro.nome}</span>
          </nav>

          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            <MapPin size={18} />
            <span className="text-sm font-medium">{bairro.local}</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Assistência Técnica de Geladeira, Máquina de Lavar e Ar Condicionado em {bairro.nome}
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-4 leading-relaxed">
            {variacao(bairro.slug, introducoes)(bairro)}
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {variacao(bairro.slug, complementos, 13)(bairro)}
          </p>

          {ctas}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="flex items-start space-x-3">
                <Icon className="w-7 h-7 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">{titulo}</h3>
                  <p className="text-sm text-gray-600">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Serviços de assistência técnica em {bairro.nome}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicos(bairro).map((servico) => (
              <div key={servico.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={servico.image}
                  alt={servico.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{servico.title}</h3>
                  <p className="text-gray-600 mb-4">{servico.text}</p>
                  <ul className="space-y-2">
                    {servico.itens.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defeitos comuns: cobre as buscas de quem descreve o problema */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-center">
            Defeitos que consertamos em {bairro.nome}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Se o seu aparelho apresenta algum destes problemas, chame um técnico antes que o defeito piore.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {defeitos.map((grupo) => (
              <div key={grupo.titulo} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {grupo.titulo} com defeito em {bairro.nome}
                </h3>
                <ul className="space-y-2">
                  {grupo.itens.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Como funciona o atendimento em {bairro.nome}
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos(bairro).map(({ icon: Icon, titulo, texto }, index) => (
              <li key={titulo} className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{titulo}</h3>
                <p className="text-gray-600 text-sm">{texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Marcas que atendemos em {bairro.nome}
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {marcas.map((marca) => (
              <li key={marca} className="bg-white px-5 py-3 rounded-xl shadow-sm font-semibold text-gray-800">
                {marca}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-6">E muitas outras marcas. Não encontrou a sua? Fale com a gente.</p>
        </div>
      </section>

      {/* Perguntas frequentes (também vão para o Google como FAQPage) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Perguntas frequentes sobre assistência técnica em {bairro.nome}
          </h2>
          <div className="space-y-4">
            {bairroFaqs(bairro).map((faq) => (
              <details key={faq.q} className="bg-gray-50 rounded-xl p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">{faq.q}</summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bairros vizinhos: links internos entre as páginas */}
      {vizinhos.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Também atendemos perto de {bairro.nome}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {vizinhos.map((vizinho) => (
                <li key={vizinho.slug}>
                  <a href={`/assistencia-tecnica/${vizinho.slug}`} className="text-blue-600 hover:underline">
                    Assistência técnica em {vizinho.nome}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/areas-atendidas" className="inline-block mt-6 font-semibold text-blue-600 hover:underline">
              Ver todas as áreas atendidas
            </a>
          </div>
        </section>
      )}

      {/* Chamada final */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Precisa de técnico em {bairro.nome}?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Fale agora com a Yahweh Refrigeração e agende a visita de um técnico especializado.
          </p>
          <div className="flex justify-center">{ctas}</div>
        </div>
      </section>
    </main>
  );
};

export default BairroPage;
