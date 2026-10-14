import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { PHONE_DISPLAY, PHONE_HREF, waLink } from '../config/site';

const whatsappUrl = waLink('Olá! Vim pelo site e gostaria de mais informações sobre os serviços da Yahweh Refrigeração.');

// Botões flutuantes pequenos: ligar no canto esquerdo e WhatsApp no direito.
const WhatsAppFloat = () => (
  <>
    <a
      href={PHONE_HREF}
      aria-label={`Ligar para ${PHONE_DISPLAY}`}
      title="Ligar agora"
      className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-ink/20 hover:bg-brand-dark"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
    </a>
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-ink/20 hover:brightness-95"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  </>
);

export default WhatsAppFloat;
