import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { fotos } from '../data/fotos';
import { waLink } from '../config/site';

const Services = () => {
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para serviço de assistência técnica.";
  const whatsappUrl = waLink(whatsappMessage);

  const services = [
    {
      foto: fotos.geladeiraSideBySide,
      title: "Reparo de Geladeiras",
      description: "Diagnosticamos e consertamos todos os tipos de geladeiras: frost free, inverter e side by side com rapidez e eficiência.",
      benefits: [
        "Peças originais",
        "Garantia de 90 dias",
        "Atendimento no mesmo dia"
      ]
    },
    {
      foto: fotos.maquinaDeLavar,
      title: "Máquinas de Lavar",
      description: "Especialistas em manutenção e reparo de máquinas de lavar de todas as marcas.",
      benefits: [
        "Técnicos especializados",
        "Reparo rápido",
        "Preço justo",
        "Serviço domiciliar"
      ]
    },
    {
      foto: fotos.arCondicionado,
      title: "Ar Condicionado",
      description: "Instalação, manutenção e reparo de ar condicionado split e janela.",
      benefits: [
        "Instalação profissional",
        "Limpeza completa",
        "Recarga de gás",
        "Manutenção preventiva"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="site-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções profissionais para todos os seus problemas com eletrodomésticos de refrigeração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.foto.src} 
                  alt={service.foto.alt}
                  style={{ objectPosition: service.foto.posicao }}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 font-semibold"
                >
                  <MessageCircle size={18} />
                  <span>Solicitar Orçamento</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

