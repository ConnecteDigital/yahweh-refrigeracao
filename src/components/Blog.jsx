import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';
import { PHONE_HREF, waLink } from '../config/site';

const Blog = () => {
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os serviços.";
  const whatsappUrl = waLink(whatsappMessage);

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="site-container">
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
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl">
              <a href={`/blog/${post.slug}`} className="block">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.foto.src} 
                  alt={post.foto.alt}
                  style={{ objectPosition: post.foto.posicao }}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
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
                  
                  <span className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1">
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              </a>
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
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 inline-flex items-center justify-center space-x-2"
            >
              <span>Chamar no WhatsApp</span>
            </a>
            <a 
              href={PHONE_HREF}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center space-x-2"
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

