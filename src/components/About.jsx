import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import aboutImage from '../assets/tecnico1.jpeg';

const About = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "10+",
      label: "Anos de Experiência"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "1000+",
      label: "Clientes Atendidos"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      number: "24h",
      label: "Atendimento Disponível"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      number: "90",
      label: "Dias de Garantia"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Técnico especializado da Yahweh Refrigeração" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">Yahweh</div>
                  <div className="text-sm">Refrigeração</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Conheça Nossa História
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Especialistas em Refrigeração
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Yahweh Refrigeração nasceu da paixão pela refrigeração e do compromisso com a qualidade. 
                Há mais de 10 anos, oferecemos serviços especializados em geladeiras, máquinas de lavar e 
                ar condicionado, atendendo com excelência e profissionalismo.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa equipe é formada por técnicos altamente qualificados e experientes, sempre atualizados 
                com as mais recentes tecnologias do mercado. Trabalhamos com peças originais e oferecemos 
                garantia em todos os nossos serviços.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Nossa Missão</h4>
              <p className="text-gray-600">
                Proporcionar soluções rápidas e eficientes para problemas de refrigeração, 
                garantindo a satisfação total dos nossos clientes através de um atendimento 
                personalizado e de qualidade superior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

