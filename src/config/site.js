// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
export const SITE_URL = 'https://www.yahwehrefrigeracao.com.br';
export const BUSINESS_NAME = 'Yahweh Refrigeração';

export const PHONE_DISPLAY = '(21) 96769-0097';
export const PHONE_E164 = '+5521967690097';
export const WHATSAPP_NUMBER = '5521967690097';
export const PHONE_HREF = `tel:${PHONE_E164}`;

export const EMAIL = 'contato@yahwehrefrigeracoes.com.br';
export const INSTAGRAM_URL = 'https://www.instagram.com/yahweh_refrigeracao.rj/';

export const waLink = (message) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
