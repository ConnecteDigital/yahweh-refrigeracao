import React from 'react';

const Brands = () => {
  const brands = [
    { name: "Electrolux", color: "#0066CC" },
    { name: "Brastemp", color: "#E31E24" },
    { name: "Consul", color: "#FF6B35" },
    { name: "LG", color: "#A50034" },
    { name: "Samsung", color: "#1428A0" },
    { name: "Midea", color: "#00A651" },
    { name: "Philco", color: "#FF0000" },
    { name: "Panasonic", color: "#0033A0" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trabalhamos com as Melhores Marcas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos técnicos são especializados em todas as principais marcas do mercado, 
            garantindo um serviço de qualidade para o seu equipamento.
          </p>
        </div>

        {/* Desktop: Grid normal */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
            >
              <div 
                className="text-2xl font-bold text-center"
                style={{ color: brand.color }}
              >
                {brand.name}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carrossel animado */}
        <div className="md:hidden overflow-hidden">
          <div className="flex animate-scroll-brands">
            {/* Primeira sequência */}
            {brands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-40 mx-2"
              >
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                  <div 
                    className="text-lg font-bold text-center"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Segunda sequência para loop contínuo */}
            {brands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-40 mx-2"
              >
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                  <div 
                    className="text-lg font-bold text-center"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            E muitas outras marcas! Não encontrou a sua? Entre em contato conosco.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Garantia de Qualidade</h3>
            <p className="text-gray-600">
              Trabalhamos apenas com peças originais e oferecemos garantia de 90 dias 
              em todos os serviços realizados, independente da marca do seu equipamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

