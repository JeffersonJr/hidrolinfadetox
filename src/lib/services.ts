import hifu from "@/assets/treatment-hifu.jpg";
import drainage from "@/assets/treatment-drainage.jpg";
import cupping from "@/assets/treatment-cupping.jpg";
// Placeholders for new services
import acupuncture from "@/assets/treatment-acupuncture.png";
import osteopathy from "@/assets/treatment-osteopathy.png";
import massage from "@/assets/treatment-massage.jpg"; // specific image

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  longDescription: string[];
  indications: string[];
  duration: string;
  sessionsRecommendation: string;
  image: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "massoterapia",
    title: "Massoterapia",
    short: "Tratamento profundo para alívio de tensões e dores musculares.",
    description:
      "Conjunto de manobras terapêuticas que atuam diretamente sobre o sistema muscular, promovendo relaxamento profundo, alívio de tensões acumuladas e melhoria da circulação sanguínea.",
    longDescription: [
      "A massoterapia é muito mais do que um momento de relaxamento. Trata-se de uma abordagem terapêutica que identifica e trata zonas de tensão, contraturas e bloqueios musculares decorrentes do stress diário, más posturas ou esforço físico.",
      "Através da manipulação cuidada dos tecidos moles, estimulamos a libertação de endorfinas (os analgésicos naturais do corpo), melhoramos a oxigenação celular e promovemos uma sensação de leveza e vitalidade que perdura muito para além da sessão.",
    ],
    indications: [
      "Dores musculares crónicas",
      "Stress e ansiedade",
      "Tensão na cervical e lombar",
      "Fadiga geral",
    ],
    duration: "50 min",
    sessionsRecommendation: "Sessões regulares ou de manutenção",
    image: massage,
    benefits: [
      "Alivia tensões e dores",
      "Melhora a flexibilidade",
      "Reduz o stress físico e mental",
      "Ativa a circulação sanguínea",
    ],
  },
  {
    slug: "acupuntura",
    title: "Acupuntura",
    short: "Reequilíbrio energético através da Medicina Tradicional Chinesa.",
    description:
      "Técnica milenar que utiliza a inserção de agulhas finíssimas em pontos específicos do corpo para restaurar o fluxo de energia (Qi), promovendo a cura e o alívio da dor.",
    longDescription: [
      "A Acupuntura é um dos pilares da Medicina Tradicional Chinesa. Baseia-se no princípio de que a saúde depende do livre fluxo de energia (Qi) através dos meridianos do corpo. Quando este fluxo é bloqueado, surgem doenças, dores e desequilíbrios emocionais.",
      "Ao estimular pontos precisos, a acupuntura envia sinais ao sistema nervoso para libertar substâncias químicas nos músculos, medula espinhal e cérebro. Estas substâncias alteram a experiência da dor ou desencadeiam a libertação de outras hormonas que influenciam o sistema de regulação interna, promovendo as capacidades naturais de cura do próprio corpo.",
    ],
    indications: [
      "Dores crónicas (costas, pescoço, articulações)",
      "Enxaquecas e dores de cabeça",
      "Ansiedade, stress e insónias",
      "Desordens digestivas e hormonais",
    ],
    duration: "60 min",
    sessionsRecommendation: "Plano personalizado consoante avaliação",
    image: acupuncture,
    benefits: [
      "Alívio natural e eficaz da dor",
      "Redução dos níveis de stress e ansiedade",
      "Regulação do sono e do sistema nervoso",
      "Reequilíbrio global do organismo",
    ],
  },
  {
    slug: "osteopatia",
    title: "Osteopatia",
    short: "Terapia manual focada na integridade estrutural do corpo.",
    description:
      "Abordagem holística que diagnostica e trata disfunções de mobilidade dos tecidos do corpo humano, restabelecendo o equilíbrio mecânico e prevenindo lesões.",
    longDescription: [
      "A Osteopatia foca-se na compreensão profunda da anatomia e fisiologia humana, reconhecendo que a estrutura e a função do corpo estão intimamente ligadas. O objetivo não é apenas tratar a dor localizada, mas sim procurar a origem mecânica que está a causar o sintoma.",
      "Através de técnicas manuais seguras e precisas — que vão desde manipulações articulares a mobilizações suaves dos tecidos (músculos, fáscias, ligamentos) e órgãos internos —, a Osteopatia devolve a mobilidade natural ao corpo. Isto permite que o sistema nervoso, circulatório e linfático funcionem livremente, otimizando o estado de saúde global e promovendo a autocura.",
    ],
    indications: [
      "Dores de coluna (lombalgias, cervicalgias)",
      "Dores articulares (ombros, joelhos)",
      "Alterações posturais",
      "Lesões desportivas e ciáticas",
    ],
    duration: "60 min",
    sessionsRecommendation: "Mediante avaliação estrutural",
    image: osteopathy,
    benefits: [
      "Corrige desvios e melhora a postura",
      "Restaura a mobilidade articular perdida",
      "Reduz a inflamação e a compressão nervosa",
      "Trata a causa raiz da dor estrutural",
    ],
  },
  {
    slug: "ventosaterapia",
    title: "Ventosaterapia",
    short: "Terapia natural milenar de descompressão e relaxamento muscular.",
    description:
      "Técnica da Medicina Tradicional Chinesa que utiliza ventosas para criar vácuo, libertando tensões musculares profundas, estimulando a circulação e desintoxicando os tecidos.",
    longDescription: [
      "Baseada em princípios ancestrais, a ventosaterapia atua criando uma pressão negativa (vácuo) na superfície da pele. Esta sucção mecânica separa ligeiramente os tecidos musculares da fáscia que os envolve. Esta descompressão aumenta drasticamente o fluxo sanguíneo local e a oxigenação celular.",
      "Ao atrair sangue fresco, rico em oxigénio e nutrientes para regiões com estagnação, o corpo dissolve nódulos musculares e elimina toxinas acumuladas muito mais rapidamente. As marcas circulares temporárias deixadas pelas ventosas são indicadores terapêuticos valiosos que mostram exatamente onde o corpo estava a reter tensão, inflamação ou estagnação energética.",
    ],
    indications: [
      "Dores musculares e articulares agudas ou crónicas",
      "Contraturas e rigidez",
      "Fadiga física e sobrecarga desportiva",
      "Problemas respiratórios leves",
    ],
    duration: "45 min",
    sessionsRecommendation: "Sessões avulsas ou protocolo contínuo",
    image: cupping,
    benefits: [
      "Descontrai a musculatura e desfaz nódulos de tensão",
      "Aumenta intensamente o fluxo sanguíneo local",
      "Facilita a drenagem de toxinas presas nos tecidos",
      "Acelera a recuperação muscular e alivia a dor",
    ],
  },
  {
    slug: "drenagem-linfatica",
    title: "Drenagem Linfática",
    short: "Estimula a circulação e a eliminação de toxinas.",
    description:
      "Massagem manual suave e rítmica que ativa o sistema linfático, reduz a retenção de líquidos, alivia o inchaço e devolve leveza ao corpo, desintoxicando o organismo.",
    longDescription: [
      "O sistema linfático é uma complexa rede responsável por filtrar e eliminar toxinas e resíduos do organismo. Quando este sistema se torna lento — devido a stress, má alimentação, desequilíbrios hormonais ou sedentarismo —, o corpo começa a acumular líquidos que causam inchaço, inflamação e desconforto generalizado.",
      "Através de manobras manuais muito precisas, lentas e com a pressão exata, a nossa drenagem linfática direciona este excesso de líquidos estagnados para os gânglios, facilitando a sua eliminação natural. Além dos benefícios estéticos visíveis na redução de volume, é um tratamento essencial para desintoxicar o organismo, combater a celulite edematosa e fortalecer o sistema imunitário.",
    ],
    indications: [
      "Retenção de líquidos severa ou ligeira",
      "Sensação de peso nas pernas",
      "Recuperação Pós-operatória",
      "Celulite edematosa",
    ],
    duration: "50 min",
    sessionsRecommendation: "Pack de 6 a 12 sessões",
    image: drainage,
    benefits: [
      "Acelera o metabolismo e a eliminação de toxinas",
      "Reduz drasticamente inchaço e edemas",
      "Melhora a oxigenação dos tecidos celulares",
      "Fortalece o sistema imunitário",
    ],
  },
  {
    slug: "hifu",
    title: "Estética Avançada: HIFU",
    short: "Lifting não-invasivo com ultrassom focalizado.",
    description:
      "Tecnologia de ultrassom microfocalizado que estimula a produção natural de colagénio em camadas profundas, devolvendo firmeza ao rosto, pescoço e corpo.",
    longDescription: [
      "O HIFU (High Intensity Focused Ultrasound) representa o mais alto padrão em rejuvenescimento não cirúrgico. Ao direcionar energia térmica de forma extremamente precisa para a fáscia muscular (SMAS) e para a derme profunda, este tratamento cria micropontos de coagulação que desencadeiam a resposta natural de cicatrização do corpo, regenerando os tecidos.",
      "Este processo contínuo atua 'de dentro para fora', estimulando uma produção maciça de novo colagénio e elastina ao longo das semanas seguintes à sessão. O resultado final é um efeito lifting visível, contornos muito mais definidos e uma pele estruturalmente mais firme e jovem, sem necessitar de cortes, agulhas ou qualquer período de repouso.",
    ],
    indications: [
      "Flacidez facial e corporal",
      "Perda de definição no contorno da mandíbula",
      "Rugas e linhas finas de expressão",
      "Papada / Duplo queixo",
    ],
    duration: "60 a 90 min",
    sessionsRecommendation: "1 a 3 sessões (anuais)",
    image: hifu,
    benefits: [
      "Lifting facial sem cirurgia",
      "Estimulação profunda de colagénio e elastina",
      "Melhoria visível do tónus e textura da pele",
      "Resultados progressivos, naturais e duradouros",
    ],
  },
];
