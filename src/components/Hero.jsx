import React from 'react';
import { MessageCircle, Phone, Clock } from 'lucide-react';
import heroImage from '../assets/geladeira1.jpg';

const Hero = () => {
  const whatsappNumber = "5521984619958";
  const whatsappMessage = "Olá! Gostaria de agendar um serviço de assistência técnica.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-6">
              <Clock size={18} />
              <span className="text-sm font-medium">Atendimento 24 horas, todos os dias!</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Especialistas em <span className="text-blue-600">Refrigeração</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Assistência técnica especializada em geladeiras, máquinas de lavar e ar condicionado. 
              Atendimento domiciliar com qualidade e agilidade!
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                <MessageCircle size={20} />
                <span>Agende um Serviço</span>
              </a>
              
              <a 
                href="tel:21984619958"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                <span>Ligar Agora</span>
              </a>
            </div>

            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Atendimento</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Técnico consertando geladeira" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Disponível agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

