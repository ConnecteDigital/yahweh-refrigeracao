import React from 'react';

const NotFoundPage = () => (
  <main className="pt-32 pb-24">
    <div className="site-container text-center">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
      <p className="text-lg text-gray-600 mb-8">O endereço que você acessou não existe ou foi alterado.</p>
      <a href="/" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
        Voltar para o início
      </a>
    </div>
  </main>
);

export default NotFoundPage;
