// Bairros e cidades com página própria (/assistencia-tecnica/<slug>), na
// ordem e com os nomes enviados pelo cliente, agrupados por região.
// Cada região define a cidade padrão dos seus bairros; um bairro pode
// sobrescrever com { nome, cidade }. Nomes repetidos entre regiões geram
// uma única página (vale a primeira ocorrência).
const regioes = [
  {
    nome: 'Niterói e Região Oceânica',
    cidade: 'Niterói',
    bairros: [
      'Camboinhas', 'Itacoatiara', 'Charitas', 'São Francisco', 'Icaraí', 'Piratininga',
      'Boa Viagem', 'Ingá', 'Jardim Icaraí', 'Itaipu', 'Pendotiba', 'Cafubá', 'Santa Rosa',
      'Vital Brazil', 'Pé Pequeno', 'São Domingos', 'Jardim Imbuí', 'Serra Grande', 'Maravista',
      'Engenho do Mato', 'Vila Progresso', 'Maria Paula', 'Badu', 'Matapaca', 'Maceió',
      'Largo da Batalha', 'Cantagalo', 'Ititioca', 'Centro de Niterói', 'Fonseca', 'Barreto',
      'Cubango', 'Ponta da Areia', { nome: 'Itaipuaçu', cidade: 'Maricá' },
    ],
  },
  {
    nome: 'Rio de Janeiro — Zona Sul e Áreas Centrais',
    cidade: 'Rio de Janeiro',
    bairros: [
      'Leblon', 'Ipanema', 'Lagoa', 'Gávea', 'Jardim Botânico', 'Urca', 'Joá', 'São Conrado',
      'Leme', 'Copacabana', 'Botafogo', 'Humaitá', 'Flamengo', 'Laranjeiras', 'Cosme Velho',
      'Catete', 'Glória', 'Santa Teresa', 'Alto da Boa Vista', 'Tijuca', 'Grajaú', 'Vila Isabel',
      'Maracanã', 'Andaraí', 'Praça da Bandeira', 'Rio Comprido', 'Centro do Rio de Janeiro',
      'Lapa', 'Cidade Nova', 'Estácio', 'Catumbi', 'São Cristóvão', 'Benfica', 'Saúde', 'Gamboa',
      'Santo Cristo', 'Jardim Guanabara', 'Portuguesa', 'Moneró', 'Tauá', 'Jardim Carioca',
      'Cocotá', 'Ribeira', 'Freguesia da Ilha', 'Bancários',
    ],
  },
  {
    nome: 'Barra da Tijuca, Recreio e Jacarepaguá',
    cidade: 'Rio de Janeiro',
    bairros: [
      'Barra da Tijuca', 'Recreio dos Bandeirantes', 'Itanhangá', 'Freguesia de Jacarepaguá',
      'Pechincha', 'Anil', 'Taquara', 'Jacarepaguá', 'Curicica', 'Camorim', 'Vargem Grande',
      'Vargem Pequena', 'Vila Valqueire', 'Tanque', 'Praça Seca', 'Gardênia Azul', 'Rio das Pedras',
      'Cidade de Deus', 'Grumari', 'Barra Olímpica', 'Colônia Juliano Moreira', 'Jardim Oceânico',
      'Recreio — Gleba A', 'Recreio — Gleba B', 'Barra — Jardim Barra da Tijuca', 'Barra — Península',
      'Barra — Ilha Pura', 'Barra — Rio Mar', 'Barra — Novo Leblon', 'Barra — Mandala',
      'Barra — Santa Mônica', 'Barra — Santa Mônica Jardins', 'Barra — ABM',
      'Barra — Bosque Marapendi', 'Barra — Parque das Rosas', 'Barra — Alfa Barra',
      'Barra — Cidade Jardim', 'Barra — Riviera', 'Barra — Jardim Oceânico',
      'Recreio — Pontal Oceânico',
    ],
  },
  {
    nome: 'Zona Oeste — Guaratiba e Regiões Próximas',
    cidade: 'Rio de Janeiro',
    bairros: [
      'Barra de Guaratiba', 'Ilha de Guaratiba', 'Pedra de Guaratiba', 'Recreio', 'Campo Grande',
      'Santíssimo', 'Bangu', 'Padre Miguel', 'Realengo', 'Vila Valqueire', 'Deodoro',
      'Vila Militar', 'Magalhães Bastos', 'Sepetiba', 'Senador Camará', 'Vila Kennedy',
      'Gericinó', 'Jabour',
    ],
  },
  {
    nome: 'Zona Norte',
    cidade: 'Rio de Janeiro',
    bairros: [
      'Méier', 'Jardim Guanabara', 'Cachambi', 'Todos os Santos', 'Engenho de Dentro',
      'Del Castilho', 'Maria da Graça', 'Vila da Penha', 'Vista Alegre', 'Irajá', 'Madureira',
      'Cascadura', 'Campinho', 'Oswaldo Cruz', 'Bento Ribeiro', 'Marechal Hermes', 'Rocha Miranda',
      'Quintino Bocaiúva', 'Piedade', 'Encantado', 'Água Santa', 'Pilares', 'Engenho Novo',
      'Lins de Vasconcelos', 'Riachuelo',
    ],
  },
  {
    nome: 'Duque de Caxias',
    cidade: 'Duque de Caxias',
    bairros: [
      'Jardim 25 de Agosto', 'Vila São Luís', 'Parque Duque', 'Jardim Primavera',
      'Centro de Duque de Caxias', 'Parque Lafaiete', 'Doutor Laureano', 'Parque Beira-Mar',
      'Engenho do Porto', 'Centenário', 'Gramacho', 'Jardim Leal', 'Olavo Bilac', 'Vila Sarapuí',
      'Sarapuí', 'Parque Fluminense', 'Pilar', 'Santa Cruz da Serra', 'Xerém', 'Imbariê',
    ],
  },
  {
    nome: 'Demais Municípios da Baixada Fluminense',
    // Aqui cada item é o próprio município.
    cidade: null,
    bairros: [
      'São João de Meriti', 'Nova Iguaçu', 'Nilópolis', 'Mesquita', 'Belford Roxo', 'Itaboraí',
      'Itaguaí', 'Niterói', 'Rio de Janeiro',
    ],
  },
];

export const slugify = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Mostra a cidade junto do nome só quando ela acrescenta informação:
// "Icaraí, Niterói", mas não "Centro de Niterói, Niterói" nem "Copacabana, Rio de Janeiro"
// no slug (bairros do Rio ficam só com o nome, que é como as pessoas buscam).
const incluiCidade = (nome, cidade) => slugify(nome).includes(slugify(cidade));

const montarBairro = (item, regiao) => {
  const { nome, cidade: cidadeItem } = typeof item === 'string' ? { nome: item } : item;
  const cidade = cidadeItem || regiao.cidade || nome;
  const cidadeNoSlug = cidade !== 'Rio de Janeiro' && !incluiCidade(nome, cidade);
  return {
    nome,
    cidade,
    regiao: regiao.nome,
    municipio: !regiao.cidade && !cidadeItem,
    local: incluiCidade(nome, cidade) ? nome : `${nome}, ${cidade}`,
    slug: slugify(cidadeNoSlug ? `${nome} ${cidade}` : nome),
  };
};

export const bairros = regioes
  .flatMap((regiao) => regiao.bairros.map((item) => montarBairro(item, regiao)))
  .filter((bairro, index, todos) => todos.findIndex((outro) => outro.slug === bairro.slug) === index);

export const getBairro = (slug) => bairros.find((bairro) => bairro.slug === slug);

export const nomesRegioes = regioes.map((regiao) => regiao.nome);

export const bairrosPorRegiao = () =>
  bairros.reduce((grupos, bairro) => {
    (grupos[bairro.regiao] ||= []).push(bairro);
    return grupos;
  }, {});

// Pega os próximos bairros da mesma região em ordem circular, para que os
// links internos se distribuam por todas as páginas (e não só pelos primeiros).
export const bairrosVizinhos = (bairro, limite = 12) => {
  const regiao = bairros.filter((outro) => outro.regiao === bairro.regiao);
  const inicio = regiao.findIndex((outro) => outro.slug === bairro.slug);
  return Array.from({ length: Math.min(limite, regiao.length - 1) }, (_, i) =>
    regiao[(inicio + 1 + i) % regiao.length]);
};
