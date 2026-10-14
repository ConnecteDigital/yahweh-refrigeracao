import React from 'react';
import { MapPin } from 'lucide-react';
import { bairrosPorRegiao, slugify } from '../data/bairros';

// Resumo das áreas atendidas na home: dá ao Google (e ao cliente) um caminho
// direto até as páginas de bairro.
const AreasHome = () => {
  const regioes = Object.entries(bairrosPorRegiao());

  return (
    <section id="areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Áreas Atendidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assistência técnica domiciliar no Rio de Janeiro, Niterói, Duque de Caxias e Baixada Fluminense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regioes.map(([regiao, lista]) => (
            <div key={regiao} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="flex items-center space-x-2 text-lg font-bold text-gray-900 mb-4">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{regiao}</span>
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                {lista.slice(0, 8).map((bairro) => (
                  <li key={bairro.slug}>
                    <a href={`/assistencia-tecnica/${bairro.slug}`} className="text-blue-600 hover:underline">
                      {bairro.nome}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={`/areas-atendidas#${slugify(regiao)}`} className="font-semibold text-gray-900 hover:text-blue-600">
                Ver todos ({lista.length})
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasHome;
