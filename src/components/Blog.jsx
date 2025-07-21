import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Dicas Essenciais para Manter sua Geladeira Funcionando Perfeitamente",
      excerpt: "Descubra como prolongar a vida útil da sua geladeira e evitar problemas comuns com essas dicas simples de manutenção preventiva.",
      date: "15 de Janeiro, 2024",
      readTime: "5 min de leitura",
      category: "Manutenção",
      image: "/api/placeholder/400/250",
      slug: "dicas-manutencao-geladeira"
    },
    {
      id: 2,
      title: "Problemas Mais Comuns em Máquinas de Lavar e Como Resolvê-los",
      excerpt: "Conheça os principais problemas que podem afetar sua máquina de lavar e aprenda quando é hora de chamar um técnico especializado.",
      date: "8 de Janeiro, 2024",
      readTime: "7 min de leitura",
      category: "Diagnóstico",
      image: "/api/placeholder/400/250",
      slug: "problemas-maquina-lavar"
    },
    {
      id: 3,
      title: "Como Economizar Energia com seu Ar Condicionado",
      excerpt: "Aprenda técnicas eficazes para reduzir o consumo de energia do seu ar condicionado sem abrir mão do conforto térmico.",
      date: "2 de Janeiro, 2024",
      readTime: "6 min de leitura",
      category: "Economia",
      image: "/api/placeholder/400/250",
      slug: "economizar-energia-ar-condicionado"
    }
  ];

  const whatsappNumber = "5521984619958";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os serviços.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dicas e Novidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra dicas importantes para manter seus eletrodomésticos funcionando por muito mais tempo 
            e economizar energia no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-blue-600 text-6xl font-bold opacity-20">
                  {post.id}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 transition-colors">
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de Ajuda Profissional?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Nossos técnicos especializados estão prontos para resolver qualquer problema 
            com seus eletrodomésticos. Atendimento 24 horas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Chamar no WhatsApp</span>
            </a>
            <a 
              href="tel:21984619958"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

