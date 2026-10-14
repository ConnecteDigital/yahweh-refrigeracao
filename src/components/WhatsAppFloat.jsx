import React from 'react';
import whatsappIcon from '../assets/whatsapp_icon.png';
import { waLink } from '../config/site';

const WhatsAppFloat = () => {
  const whatsappMessage = "Olá! Vim pelo site e gostaria de mais informações sobre os serviços da Yahweh Refrigeração.";
  const whatsappUrl = waLink(whatsappMessage);

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-zap p-4 text-white shadow-lg hover:bg-zap-dark hover:shadow-xl lg:block"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-6 h-6 filter brightness-0 invert"
      />
    </button>
  );
};

export default WhatsAppFloat;

