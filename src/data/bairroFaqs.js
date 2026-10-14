import { PHONE_DISPLAY } from '../config/site.js';

// Perguntas frequentes das páginas de bairro. Usadas no conteúdo da página
// e no JSON-LD FAQPage (src/seo.js), então o texto precisa ser o mesmo.
export const bairroFaqs = (b) => [
  {
    q: `Vocês atendem em ${b.nome}?`,
    a: `Sim. Atendemos em ${b.local} e nos bairros vizinhos, com visita técnica no seu endereço. Chame no WhatsApp ${PHONE_DISPLAY} para agendar.`,
  },
  {
    q: `Quanto tempo demora para um técnico chegar em ${b.nome}?`,
    a: 'Depende da agenda do dia, mas sempre que possível o atendimento é feito no mesmo dia. Ao chamar no WhatsApp, informamos o horário disponível mais próximo.',
  },
  {
    q: 'Vocês atendem aos fins de semana e feriados?',
    a: 'Sim. Atendemos 24 horas, todos os dias, inclusive fins de semana e feriados.',
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
    a: 'Envie uma mensagem pelo WhatsApp contando o equipamento, a marca e o defeito. O técnico avalia o aparelho no local e passa o orçamento antes de iniciar o serviço.',
  },
];
