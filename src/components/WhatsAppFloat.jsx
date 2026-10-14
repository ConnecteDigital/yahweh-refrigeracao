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
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl"
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

