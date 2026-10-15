// Metadados de SEO (title, description, canonical, Open Graph, JSON-LD) de
// cada rota. Usado por scripts/prerender.js para gerar o <head> de cada página.
import { BUSINESS_NAME, EMAIL, INSTAGRAM_URL, PHONE_E164, SITE_URL } from './config/site.js';
import { bairros, getBairro } from './data/bairros.js';
import { getPost, posts } from './data/posts.jsx';
import { bairroFaqs } from './data/bairroFaqs.js';
import logo from './assets/yahweh_refrigeracao_logo.png';
import { fotos } from './data/fotos.js';

const heroImage = fotos.abrindoGeladeira.src;

const absolute = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

const business = {
  '@type': 'HVACBusiness',
  '@id': `${SITE_URL}/#empresa`,
  name: BUSINESS_NAME,
  url: `${SITE_URL}/`,
  logo: absolute(logo),
  image: absolute(heroImage),
  telephone: PHONE_E164,
  email: EMAIL,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  areaServed: [
    ...['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'São João de Meriti', 'Nova Iguaçu', 'Nilópolis',
      'Mesquita', 'Belford Roxo', 'Itaboraí', 'Itaguaí', 'Maricá'].map((name) => ({ '@type': 'City', name })),
    { '@type': 'AdministrativeArea', name: 'Região Metropolitana do Rio de Janeiro' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [INSTAGRAM_URL],
};

const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    item: absolute(path),
  })),
});

export const getRoutes = () => [
  '/',
  '/areas-atendidas',
  ...posts.map((post) => `/blog/${post.slug}`),
  ...bairros.map((bairro) => `/assistencia-tecnica/${bairro.slug}`),
];

export const getSeo = (path) => {
  if (path === '/') {
    return {
      title: 'Yahweh Refrigeração | Conserto de Geladeira, Máquina de Lavar e Ar Condicionado no RJ',
      description: 'Assistência técnica de geladeira, máquina de lavar e ar condicionado no Rio de Janeiro. Atendimento domiciliar 24h, peças originais e garantia de 90 dias. Chame no WhatsApp.',
      path,
      jsonLd: [
        { '@context': 'https://schema.org', ...business },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: BUSINESS_NAME,
          url: `${SITE_URL}/`,
          inLanguage: 'pt-BR',
        },
      ],
    };
  }

  if (path === '/areas-atendidas') {
    return {
      title: 'Áreas Atendidas no Rio de Janeiro | Yahweh Refrigeração',
      description: 'Veja os bairros do Rio de Janeiro e Região Metropolitana onde a Yahweh Refrigeração faz assistência técnica domiciliar de geladeira, máquina de lavar e ar condicionado.',
      path,
      jsonLd: [breadcrumb([['Início', '/'], ['Áreas Atendidas', path]])],
    };
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  const post = blogMatch && getPost(blogMatch[1]);
  if (post) {
    return {
      title: `${post.title} | Yahweh Refrigeração`,
      description: post.excerpt,
      path,
      image: post.foto.src,
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.isoDate,
          image: absolute(post.foto.src),
          inLanguage: 'pt-BR',
          mainEntityOfPage: absolute(path),
          author: { '@id': `${SITE_URL}/#empresa` },
          publisher: { '@type': 'Organization', name: BUSINESS_NAME, logo: absolute(logo) },
        },
        breadcrumb([['Início', '/'], [post.title, path]]),
      ],
    };
  }

  const bairroMatch = path.match(/^\/assistencia-tecnica\/([^/]+)$/);
  const bairro = bairroMatch && getBairro(bairroMatch[1]);
  if (bairro) {
    return {
      title: `Conserto de Geladeira, Máquina de Lavar e Ar em ${bairro.nome} | Yahweh`,
      description: `Assistência técnica em ${bairro.local}: conserto de geladeira, máquina de lavar e ar condicionado com atendimento domiciliar, peças originais e garantia de 90 dias.`,
      path,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Assistência técnica de eletrodomésticos em ${bairro.nome}`,
          serviceType: 'Conserto de geladeira, máquina de lavar e ar condicionado',
          provider: { '@id': `${SITE_URL}/#empresa`, '@type': 'HVACBusiness', name: BUSINESS_NAME, telephone: PHONE_E164 },
          areaServed: {
            '@type': 'Place',
            name: bairro.local,
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: bairroFaqs(bairro).map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
        breadcrumb([['Início', '/'], ['Áreas Atendidas', '/areas-atendidas'], [bairro.nome, path]]),
      ],
    };
  }

  return {
    title: 'Página não encontrada | Yahweh Refrigeração',
    description: 'A página que você procura não existe.',
    path,
    noindex: true,
    jsonLd: [],
  };
};

const escape = (text) =>
  String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const renderHead = (seo) => {
  const url = absolute(seo.path);
  // JPG fixo para a prévia de links (WhatsApp/Facebook não exibem WebP de forma confiável).
  const image = absolute(seo.image && !seo.image.endsWith('.webp') ? seo.image : '/og-image.jpg');
  const tags = [
    `<title>${escape(seo.title)}</title>`,
    `<meta name="description" content="${escape(seo.description)}" />`,
    seo.noindex
      ? '<meta name="robots" content="noindex" />'
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${seo.type || 'website'}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${BUSINESS_NAME}" />`,
    `<meta property="og:title" content="${escape(seo.title)}" />`,
    `<meta property="og:description" content="${escape(seo.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    ...seo.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ];
  return tags.join('\n    ');
};
