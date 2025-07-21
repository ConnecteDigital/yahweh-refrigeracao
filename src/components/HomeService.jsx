import React from 'react';
import { Home, Clock, MapPin, Shield, MessageCircle } from 'lucide-react';
import serviceImage from '../assets/tecnico2.jpg';

const HomeService = () => {
  const whatsappNumber = "5521984619958";
  const whatsappMessage = "Olá! Gostaria de agendar um atendimento domiciliar.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  const features = [
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Atendimento Domiciliar",
      description: "Vamos até você! Não precisa se preocupar em transportar seu equipamento."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Horário Flexível",
      description: "Atendemos de segunda a domingo, incluindo feriados e emergências."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Cobertura Total RJ",
      description: "Atendemos toda a região metropolitana do Rio de Janeiro."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Segurança Garantida",
      description: "Técnicos uniformizados, identificados e com todas as ferramentas necessárias."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Atendimento Domiciliar
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oferecemos total comodidade com nosso serviço de atendimento domiciliar. 
              Nossos técnicos especializados vão até sua casa ou empresa com todas as 
              ferramentas e peças necessárias.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-2">Taxa de Visita</h3>
              <p className="mb-4">
                Cobramos apenas uma taxa simbólica de visita que é totalmente descontada 
                caso você aprove o orçamento do serviço.
              </p>
              <div className="text-2xl font-bold">R$ 50,00*</div>
              <div className="text-sm opacity-90">*Descontado do valor do serviço</div>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors font-semibold text-lg w-full md:w-auto"
            >
              <MessageCircle size={20} />
              <span>Agendar Visita</span>
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="Técnico realizando atendimento domiciliar" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">24h</div>
                  <div className="text-xs">Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;

