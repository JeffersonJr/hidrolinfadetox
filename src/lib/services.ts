import hifu from "@/assets/treatment-hifu.jpg";
import drainage from "@/assets/treatment-drainage.jpg";
import cupping from "@/assets/treatment-cupping.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "hifu",
    title: "HIFU Facial e Corporal",
    short: "Lifting não-invasivo com ultrassom focalizado.",
    description:
      "Tecnologia de ultrassom microfocalizado que estimula o colagénio em camadas profundas, devolvendo firmeza ao rosto, pescoço e corpo, sem cirurgia e sem tempo de recuperação.",
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
    description:
      "Massagem manual suave e rítmica que ativa o sistema linfático, reduz retenção de líquidos, alivia o inchaço e devolve leveza ao corpo.",
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
    description:
      "Técnica natural que utiliza ventosas para libertar tensões musculares, estimular a circulação e auxiliar o organismo na eliminação de toxinas.",
    image: cupping,
    benefits: [
      "Alivia dores musculares",
      "Reduz tensões e contracturas",
      "Auxilia na eliminação de toxinas",
      "Promove relaxamento profundo",
    ],
  },
];
