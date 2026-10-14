import React from 'react';
import { MessageCircle } from 'lucide-react';
import { bairrosPorRegiao } from '../data/bairros';
import { waLink } from '../config/site';

const AreasPage = () => {
  const regioes = Object.entries(bairrosPorRegiao());

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Áreas Atendidas
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            A Yahweh Refrigeração faz assistência técnica domiciliar de geladeiras, máquinas de lavar
            e ar condicionado no Rio de Janeiro e Região Metropolitana. Encontre o seu bairro abaixo.
          </p>
          <a
            href={waLink('Olá! Gostaria de saber se vocês atendem no meu bairro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg inline-flex items-center space-x-2 hover:bg-green-600 font-semibold"
          >
            <MessageCircle size={20} />
            <span>Não achou seu bairro? Fale com a gente</span>
          </a>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {regioes.map(([regiao, lista]) => (
            <div key={regiao}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{regiao}</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {lista.map((bairro) => (
                  <li key={bairro.slug}>
                    <a href={`/assistencia-tecnica/${bairro.slug}`} className="text-blue-600 hover:underline">
                      {bairro.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AreasPage;
