import React from 'react';
import IlustracaoAr from './IlustracaoAr';
import { ArrowLeft, Calendar, Clock, MessageCircle, Phone } from 'lucide-react';
import { PHONE_HREF, waLink } from '../config/site';

const BlogPost = ({ post }) => {
  const whatsappMessage = "Olá! Li o artigo no blog e gostaria de mais informações sobre os serviços.";
  const whatsappUrl = waLink(whatsappMessage);

  if (!post) return null;

  return (
    <article className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Botão Voltar */}
        <a
          href="/#blog"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Voltar ao Blog</span>
        </a>

        {/* Cabeçalho do Post */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {post.foto ? (
            <img
              src={post.foto.src}
              alt={post.foto.alt}
              style={{ objectPosition: post.foto.posicao }}
              className="w-full h-64 object-cover"
            />
          ) : (
            <IlustracaoAr className="h-64" />
          )}
          
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Conteúdo do Post */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de Ajuda Profissional?
          </h3>
          <p className="text-lg mb-6 opacity-90">
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
              <MessageCircle size={20} />
              <span>Chamar no WhatsApp</span>
            </a>
            <a 
              href={PHONE_HREF}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

