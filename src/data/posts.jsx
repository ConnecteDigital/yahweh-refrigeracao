import geladeiraImg from '../assets/geladeira1.jpg';
import maquinaLavarImg from '../assets/maquina_lavar2.webp';
import arCondicionadoImg from '../assets/ar_condicionado2.webp';

export const posts = [
  {
    id: 1,
    title: "5 Dicas Essenciais para Manter sua Geladeira Funcionando Perfeitamente",
    excerpt: "Descubra como prolongar a vida útil da sua geladeira e evitar problemas comuns com essas dicas simples de manutenção preventiva.",
    date: "15 de Janeiro, 2024",
    isoDate: "2024-01-15",
    readTime: "5 min de leitura",
    category: "Manutenção",
    image: geladeiraImg,
    slug: "dicas-manutencao-geladeira",
    content: (
      <div>
        <p>Manter sua geladeira funcionando perfeitamente é essencial para preservar seus alimentos e economizar energia. Aqui estão 5 dicas fundamentais:</p>

        <h3>1. Limpeza Regular do Condensador</h3>
        <p>O condensador (serpentina na parte traseira) deve ser limpo a cada 6 meses. Acúmulo de poeira reduz a eficiência e aumenta o consumo de energia.</p>

        <h3>2. Verifique as Borrachas de Vedação</h3>
        <p>Borrachas ressecadas ou danificadas permitem entrada de ar quente, forçando o motor a trabalhar mais. Teste fechando uma folha de papel na porta - se sair facilmente, é hora de trocar.</p>

        <h3>3. Mantenha a Temperatura Ideal</h3>
        <p>A temperatura ideal do refrigerador é entre 2°C e 4°C, e do freezer entre -15°C e -18°C. Temperaturas muito baixas desperdiçam energia.</p>

        <h3>4. Não Sobrecarregue</h3>
        <p>Deixe espaço para circulação do ar frio. Uma geladeira muito cheia impede a circulação adequada e força o motor.</p>

        <h3>5. Degelo Regular</h3>
        <p>Se sua geladeira não é frost-free, faça o degelo quando a camada de gelo atingir 5mm de espessura.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Problemas Mais Comuns em Máquinas de Lavar e Como Resolvê-los",
    excerpt: "Conheça os principais problemas que podem afetar sua máquina de lavar e aprenda quando é hora de chamar um técnico especializado.",
    date: "8 de Janeiro, 2024",
    isoDate: "2024-01-08",
    readTime: "7 min de leitura",
    category: "Diagnóstico",
    image: maquinaLavarImg,
    slug: "problemas-maquina-lavar",
    content: (
      <div>
        <p>As máquinas de lavar são equipamentos complexos que podem apresentar diversos problemas. Vamos abordar os mais comuns:</p>

        <h3>1. Máquina Não Liga</h3>
        <p>Verifique se está conectada à energia, se a tomada funciona e se não há problemas no cabo. Também verifique se a porta está bem fechada.</p>

        <h3>2. Não Enche de Água</h3>
        <p>Pode ser problema na válvula de entrada, filtro entupido ou falta de pressão na rede. Verifique se as torneiras estão abertas.</p>

        <h3>3. Não Centrifuga</h3>
        <p>Geralmente causado por sobrecarga, roupas desbalanceadas ou problemas no motor. Redistribua as roupas e tente novamente.</p>

        <h3>4. Vazamentos</h3>
        <p>Podem ocorrer por mangueiras soltas, vedações danificadas ou excesso de sabão. Verifique todas as conexões.</p>

        <h3>5. Ruídos Excessivos</h3>
        <p>Objetos nos bolsos, máquina desnivelada ou rolamentos desgastados podem causar ruídos. Sempre esvazie os bolsos antes de lavar.</p>

        <p><strong>Quando chamar um técnico:</strong> Se os problemas persistirem após verificações básicas, é hora de chamar um profissional.</p>
      </div>
    )
  },
  {
    id: 3,
    title: "Como Economizar Energia com seu Ar Condicionado",
    excerpt: "Aprenda técnicas eficazes para reduzir o consumo de energia do seu ar condicionado sem abrir mão do conforto térmico.",
    date: "2 de Janeiro, 2024",
    isoDate: "2024-01-02",
    readTime: "6 min de leitura",
    category: "Economia",
    image: arCondicionadoImg,
    slug: "economizar-energia-ar-condicionado",
    content: (
      <div>
        <p>O ar condicionado pode representar até 40% da conta de energia. Veja como economizar sem perder o conforto:</p>

        <h3>1. Temperatura Ideal</h3>
        <p>Mantenha entre 23°C e 25°C. Cada grau a menos aumenta o consumo em 8%. Use ventiladores para melhorar a sensação térmica.</p>

        <h3>2. Limpeza Regular</h3>
        <p>Filtros sujos reduzem a eficiência em até 15%. Limpe mensalmente e troque quando necessário.</p>

        <h3>3. Vedação do Ambiente</h3>
        <p>Mantenha portas e janelas fechadas. Frestas permitem entrada de ar quente, forçando o equipamento.</p>

        <h3>4. Uso do Timer</h3>
        <p>Programme para desligar durante a madrugada ou quando não houver ninguém no ambiente.</p>

        <h3>5. Manutenção Preventiva</h3>
        <p>Faça limpeza profissional anualmente. Equipamentos bem mantidos consomem menos energia e duram mais.</p>

        <h3>6. Isolamento Térmico</h3>
        <p>Use cortinas blackout e evite equipamentos que geram calor no mesmo ambiente.</p>

        <p><strong>Dica extra:</strong> Ar condicionado inverter pode economizar até 40% de energia comparado aos modelos convencionais.</p>
      </div>
    )
  }
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
