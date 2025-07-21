import React from 'react';
import whatsappIcon from '../assets/whatsapp_icon.png';

const WhatsAppFloat = () => {
  const whatsappNumber = "5521984619958";
  const whatsappMessage = "Olá! Vim pelo site e gostaria de mais informações sobre os serviços da Yahweh Refrigeração.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
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

