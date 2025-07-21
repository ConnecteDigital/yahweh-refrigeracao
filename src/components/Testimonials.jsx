import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Copacabana, RJ",
      rating: 5,
      text: "Excelente serviço! Minha geladeira estava com problema no motor e o técnico chegou rápido e resolveu na hora. Super recomendo a Yahweh Refrigeração!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      location: "Tijuca, RJ",
      rating: 5,
      text: "Minha máquina de lavar parou de funcionar no final de semana, liguei para eles e no mesmo dia já estavam aqui. Serviço rápido e preço justo.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      location: "Barra da Tijuca, RJ",
      rating: 5,
      text: "Contratei o serviço para manutenção do meu ar condicionado. Excelente atendimento, profissional muito educado e que realmente entendia do assunto.",
      avatar: "AC"
    },
    {
      name: "Carlos Mendes",
      location: "Niterói, RJ",
      rating: 5,
      text: "Técnico muito competente! Explicou todo o problema da minha geladeira e fez o reparo com muita agilidade. Recomendo sem dúvidas!",
      avatar: "CM"
    },
    {
      name: "Fernanda Lima",
      location: "Nova Iguaçu, RJ",
      rating: 5,
      text: "Atendimento excepcional! Além de resolver o problema da minha máquina de lavar, ainda me deram dicas de manutenção. Muito profissionais!",
      avatar: "FL"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossos serviços de manutenção e reparo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-blue-600 mb-6" />
            
            <div className="mb-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

