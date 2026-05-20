import hifu from "@/assets/treatment-hifu.jpg";
import drainage from "@/assets/treatment-drainage.jpg";
import cupping from "@/assets/treatment-cupping.jpg";

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
    slug: "hifu",
    title: "HIFU Facial e Corporal",
    short: "Lifting não-invasivo com ultrassom focalizado.",
    description: "Tecnologia de ultrassom microfocalizado que estimula o colagénio em camadas profundas, devolvendo firmeza ao rosto, pescoço e corpo, sem cirurgia e sem tempo de recuperação.",
    longDescription: [
      "O HIFU (High Intensity Focused Ultrasound) representa o mais alto padrão em rejuvenescimento não cirúrgico. Ao direcionar energia térmica de forma extremamente precisa para a fáscia muscular (SMAS) e para a derme profunda, este tratamento cria micropontos de coagulação que desencadeiam a resposta natural de cicatrização do próprio corpo.",
      "Este processo contínuo atua de dentro para fora, estimulando uma produção maciça de novo colagénio e elastina ao longo das semanas seguintes à sessão. O resultado final é um efeito lifting visível, contornos muito mais definidos e uma pele estruturalmente mais firme e jovem, sem necessitar de cortes, agulhas ou qualquer período de repouso."
    ],
    indications: ["Flacidez facial e corporal", "Perda de definição no contorno da mandíbula", "Rugas e linhas finas de expressão", "Papada / Duplo queixo"],
    duration: "60 a 90 min",
    sessionsRecommendation: "1 a 3 sessões (anuais)",
    image: hifu,
    benefits: [
      "Trata flacidez leve a moderada",
      "Melhora contornos faciais",
      "Reduz papada e linhas de expressão",
      "Resultados progressivos e naturais",
    ],
  },
  {
    slug: "drenagem-linfatica",
    title: "Drenagem Linfática",
    short: "Estimula a circulação e a eliminação de toxinas.",
    description: "Massagem manual suave e rítmica que ativa o sistema linfático, reduz retenção de líquidos, alivia o inchaço e devolve leveza ao corpo.",
    longDescription: [
      "O nosso sistema linfático é uma complexa rede responsável por filtrar e eliminar as toxinas e resíduos do organismo. Quando este sistema se torna lento — muitas vezes devido ao stress, má alimentação, hormonas ou sedentarismo —, o corpo começa a acumular líquidos que causam inchaço, inflamação e desconforto generalizado.",
      "Através de manobras manuais muito precisas, lentas e com a pressão exata, a nossa drenagem linfática direciona este excesso de líquidos estagnados para os gânglios, facilitando a sua eliminação natural. Além dos benefícios estéticos e desintoxicantes, é um tratamento extremamente relaxante que promove a saúde geral e fortalece o sistema imunitário."
    ],
    indications: ["Retenção de líquidos severa ou ligeira", "Sensação de peso nas pernas", "Recuperação Pós-operatória", "Celulite edematosa"],
    duration: "50 min",
    sessionsRecommendation: "Pack de 6 a 12 sessões",
    image: drainage,
    benefits: [
      "Reduz retenção de líquidos",
      "Alivia pernas pesadas",
      "Melhora circulação sanguínea",
      "Promove relaxamento profundo",
    ],
  },
  {
    slug: "ventosaterapia",
    title: "Ventosaterapia",
    short: "Terapia natural milenar de relaxamento muscular.",
    description: "Técnica natural que utiliza ventosas para libertar tensões musculares, estimular a circulação e auxiliar o organismo na eliminação de toxinas.",
    longDescription: [
      "Baseada em princípios ancestrais da Medicina Tradicional Chinesa, a ventosaterapia atua criando uma pressão negativa (vácuo) na superfície da pele. Esta sucção mecânica suave separa ligeiramente os tecidos musculares da fáscia que os envolve. Esta descompressão aumenta drasticamente o fluxo sanguíneo e a oxigenação na área que está a ser tratada.",
      "Ao atrair sangue fresco, rico em oxigénio e nutrientes para regiões com estagnação ou tensão, o corpo consegue dissolver nódulos musculares e eliminar toxinas acumuladas de forma muito mais rápida do que através de uma massagem convencional. As marcas circulares temporárias deixadas pelas ventosas são, na verdade, indicadores terapêuticos valiosos que mostram onde o corpo estava a reter tensão."
    ],
    indications: ["Dores musculares e articulares", "Contraturas e tensões crónicas", "Fadiga física e sobrecarga mental", "Recuperação desportiva"],
    duration: "45 min",
    sessionsRecommendation: "Sessões avulsas ou protocolo contínuo",
    image: cupping,
    benefits: [
      "Alivia dores musculares",
      "Reduz tensões e contracturas",
      "Auxilia na eliminação de toxinas",
      "Promove relaxamento profundo",
    ],
  },
];
