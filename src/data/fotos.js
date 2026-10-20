// Fotos reais da Yahweh Refrigeração (src/assets/fotos), já em WebP.
// "posicao" é o enquadramento usado quando a foto (em pé) é recortada
// num card deitado: mantém o técnico e o aparelho visíveis.
import abrindoGeladeira from '../assets/fotos/tecnico-abrindo-geladeira-inox.webp';
import diagnosticoGeladeira from '../assets/fotos/tecnico-diagnostico-geladeira-multimetro.webp';
import lavaESecaMidea from '../assets/fotos/tecnico-lava-e-seca-midea.webp';
import multimetroMaquinaDeLavar from '../assets/fotos/tecnico-multimetro-maquina-de-lavar.webp';
import atendimentoCliente from '../assets/fotos/tecnico-atendimento-cliente-geladeira.webp';
import arCondicionado from '../assets/fotos/tecnico-medicao-ar-condicionado-split.webp';
import geladeiraSideBySide from '../assets/fotos/tecnico-geladeira-side-by-side-lg.webp';
import multimetroMidea from '../assets/fotos/tecnico-multimetro-geladeira-midea.webp';

export const fotos = {
  abrindoGeladeira: {
    src: abrindoGeladeira,
    alt: 'Técnico da Yahweh Refrigeração verificando geladeira inox de duas portas na casa do cliente',
    posicao: '50% 72%',
  },
  diagnosticoGeladeira: {
    src: diagnosticoGeladeira,
    alt: 'Técnico da Yahweh Refrigeração medindo com multímetro o freezer de uma geladeira',
    posicao: '50% 45%',
  },
  lavaESecaMidea: {
    src: lavaESecaMidea,
    alt: 'Técnico da Yahweh Refrigeração verificando lava e seca Midea de abertura frontal',
    posicao: '50% 50%',
  },
  multimetroMaquinaDeLavar: {
    src: multimetroMaquinaDeLavar,
    alt: 'Técnico da Yahweh Refrigeração medindo com multímetro o painel de uma máquina de lavar',
    posicao: '50% 48%',
  },
  atendimentoCliente: {
    src: atendimentoCliente,
    alt: 'Técnico da Yahweh Refrigeração atendendo cliente e testando o painel da geladeira',
    posicao: '50% 62%',
  },
  arCondicionado: {
    src: arCondicionado,
    alt: 'Técnico da Yahweh Refrigeração medindo com multímetro um ar condicionado split',
    posicao: '50% 35%',
  },
  geladeiraSideBySide: {
    src: geladeiraSideBySide,
    alt: 'Técnico da Yahweh Refrigeração verificando geladeira side by side LG com dispenser de água',
    posicao: '50% 40%',
  },
  multimetroMidea: {
    src: multimetroMidea,
    alt: 'Técnico da Yahweh Refrigeração medindo com multímetro geladeira inverse Midea',
    posicao: '50% 35%',
  },
};
