import React from 'react';
import { CheckCircle, MapPin, MessageCircle, Phone } from 'lucide-react';
import { bairrosVizinhos } from '../data/bairros';
import { PHONE_DISPLAY, PHONE_HREF, waLink } from '../config/site';
import geladeiraImg from '../assets/geladeira2.jpg';
import maquinaLavarImg from '../assets/maquina_lavar_nova_2.png';
import arCondicionadoImg from '../assets/ar_condicionado1.jpg';

// Escolhe sempre a mesma variação de texto para o mesmo bairro, para que
// as páginas não fiquem idênticas entre si.
const variacao = (slug, opcoes) => {
  const hash = [...slug].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) >>> 0, 7);
  return opcoes[hash % opcoes.length];
};

const introducoes = [
  (b) => `Sua geladeira parou de gelar, a máquina de lavar não centrifuga ou o ar condicionado está pingando? A Yahweh Refrigeração atende em ${b.nome} com técnicos especializados que vão até a sua casa ou empresa, fazem o diagnóstico no local e resolvem o problema com peças originais.`,
  (b) => `Precisa de assistência técnica em ${b.nome}? A Yahweh Refrigeração faz conserto de geladeiras, máquinas de lavar e ar condicionado com atendimento domiciliar em todo o bairro e arredores, sem que você precise transportar o equipamento.`,
  (b) => `Moradores e empresas de ${b.nome} contam com a Yahweh Refrigeração para manutenção e conserto de eletrodomésticos. Atendemos geladeiras, máquinas de lavar e ar condicionado de todas as marcas, com orçamento claro e garantia no serviço.`,
  (b) => `Em ${b.nome}, a Yahweh Refrigeração oferece assistência técnica completa para geladeira, máquina de lavar e ar condicionado. Nossa equipe agenda a visita pelo WhatsApp e chega com as ferramentas e peças necessárias para resolver o problema no mesmo atendimento sempre que possível.`,
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

const faqs = (b) => [
  {
    q: `Vocês atendem em ${b.nome}?`,
    a: `Sim. Atendemos em ${b.nome} e nos bairros próximos${b.regiao ? ` da ${b.regiao}` : ''}, com visita técnica no endereço do cliente. Chame no WhatsApp ${PHONE_DISPLAY} para agendar.`,
  },
  {
    q: 'Quais marcas vocês consertam?',
    a: 'Trabalhamos com Electrolux, Brastemp, Consul, LG, Samsung, Midea, Philco, Panasonic e outras marcas.',
  },
  {
    q: 'O serviço tem garantia?',
    a: 'Sim. Usamos peças originais e todos os serviços realizados têm garantia de 90 dias.',
  },
  {
    q: 'Como faço para pedir um orçamento?',
    a: 'Envie uma mensagem pelo WhatsApp contando o equipamento, a marca e o defeito. Nossa equipe responde com a disponibilidade de visita.',
  },
];

export const bairroFaqs = faqs;

const BairroPage = ({ bairro }) => {
  const whatsappUrl = waLink(`Olá! Estou em ${bairro.nome} e preciso de assistência técnica.`);
  const vizinhos = bairrosVizinhos(bairro);
  const local = bairro.cidade && bairro.cidade !== bairro.nome ? `${bairro.nome}, ${bairro.cidade}` : bairro.nome;

  return (
    <main className="pt-20">
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
            <span className="text-sm font-medium">{local}</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Assistência Técnica de Geladeira, Máquina de Lavar e Ar Condicionado em {bairro.nome}
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
            {variacao(bairro.slug, introducoes)(bairro)}
          </p>

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
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Serviços em {bairro.nome}
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

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {faqs(bairro).map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer">{faq.q}</summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {vizinhos.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Também atendemos perto de {bairro.nome}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
    </main>
  );
};

export default BairroPage;
