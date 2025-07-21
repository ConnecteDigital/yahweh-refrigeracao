import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import whatsappIcon from '../assets/whatsapp_icon.png';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = "5521984619958";
  const whatsappMessage = "Olá! Vim pelo site e gostaria de mais informações sobre os serviços da Yahweh Refrigeração.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip após 3 segundos
      setTimeout(() => {
        setShowTooltip(true);
        // Esconder tooltip após 5 segundos
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowTooltip(false);
    window.open(whatsappUrl, '_blank');
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-bounce">
          <button
            onClick={closeTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          <div className="pr-4">
            <p className="text-sm font-semibold text-gray-800 mb-1">
              💬 Precisa de ajuda?
            </p>
            <p className="text-xs text-gray-600">
              Fale conosco no WhatsApp! Atendimento 24h para emergências.
            </p>
          </div>
          <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
        </div>
      )}

      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-6 h-6 filter brightness-0 invert"
        />
        
        {/* Efeito de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </button>
    </>
  );
};

export default WhatsAppFloat;

