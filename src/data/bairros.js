// Lista de bairros com página própria (/assistencia-tecnica/<slug>).
// Cada item: { nome, regiao, cidade }. O slug é gerado a partir do nome.
// "regiao" agrupa os bairros na página de Áreas Atendidas e define os
// "bairros vizinhos" linkados no rodapé de cada página.
const lista = [];

export const slugify = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const bairros = lista.map((bairro) => ({
  cidade: 'Rio de Janeiro',
  ...bairro,
  slug: slugify(bairro.cidade && bairro.cidade !== 'Rio de Janeiro' && bairro.nome !== bairro.cidade
    ? `${bairro.nome} ${bairro.cidade}`
    : bairro.nome),
}));

export const getBairro = (slug) => bairros.find((bairro) => bairro.slug === slug);

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
