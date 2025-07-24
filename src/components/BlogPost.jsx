import React from 'react';
import { ArrowLeft, Calendar, Clock, MessageCircle, Phone } from 'lucide-react';

const BlogPost = ({ post, onBack }) => {
  const whatsappNumber = "5521984619958";
  const whatsappMessage = "Olá! Li o artigo no blog e gostaria de mais informações sobre os serviços.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Botão Voltar */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar ao Blog</span>
        </button>

        {/* Cabeçalho do Post */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-blue-600 text-8xl font-bold opacity-20">
              {post.id}
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
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
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Chamar no WhatsApp</span>
            </a>
            <a 
              href="tel:21984619958"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

