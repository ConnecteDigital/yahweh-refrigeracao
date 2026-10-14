// Gera um HTML estático para cada rota do site (home, blog, áreas atendidas e
// páginas de bairro), com <head> de SEO próprio, além de sitemap.xml e 404.html.
// Roda depois do build do cliente (dist/) e do build SSR (dist-ssr/).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, getRoutes, getSeo, renderHead } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);
const { SITE_URL } = await import(pathToFileURL(path.join(root, 'src/config/site.js')).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const page = (url) =>
  template
    .replace('<!--app-head-->', renderHead(getSeo(url)))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);

const routes = getRoutes();
for (const url of routes) {
  // /areas-atendidas -> dist/areas-atendidas.html (servido sem extensão via cleanUrls)
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url));
}

fs.writeFileSync(path.join(dist, '404.html'), page('/404'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((url) => `  <url><loc>${SITE_URL}${url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pré-renderizadas ${routes.length} páginas + 404.html + sitemap.xml`);
