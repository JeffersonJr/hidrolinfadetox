import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en" | "es";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translateText: (text: string, source: Language, target: Language) => Promise<string>;
  t: (key: string) => string;
}

const localDictionary: Record<Language, Record<string, string>> = {
  pt: {
    // Header & Footer & Nav
    "Início": "Início",
    "Sobre": "Sobre",
    "Serviços": "Serviços",
    "Preços": "Preços",
    "Contactos": "Contactos",
    "Agendar": "Agendar",
    "Marcar consulta": "Marcar consulta",
    "Falar connosco": "Falar connosco",
    "Formulário de contacto": "Formulário de contacto",
    "Telemóvel": "Telemóvel",
    "Fixo": "Fixo",
    "Direitos Reservados": "Direitos Reservados",
    "Todos os direitos reservados.": "Todos os direitos reservados.",
    "Agende a sua consulta": "Agende a sua consulta",
    "Comece hoje a sua jornada de bem-estar.": "Comece hoje a sua jornada de bem-estar.",
    "Avaliação personalizada e plano de tratamento desenhado especificamente para si.": "Avaliação personalizada e plano de tratamento desenhado especificamente para si.",

    // Home Page Hero
    "Lisboa · Caldas da Rainha · Europa": "Lisboa · Caldas da Rainha · Europa",
    "Beleza que nasce do cuidado e do equilíbrio.": "Beleza que nasce do cuidado e do equilíbrio.",
    "Sou Thatiana Cardoso, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "Sou Thatiana Cardoso, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.",
    "Conheça os tratamentos": "Conheça os tratamentos",

    // Home Page Pillars
    "Estética avançada": "Estética avançada",
    "Tecnologia de ponta com protocolos personalizados.": "Tecnologia de ponta com protocolos personalizados.",
    "Terapias naturais": "Terapias naturais",
    "Métodos integrativos para corpo e mente.": "Métodos integrativos para corpo e mente.",
    "Atendimento humano": "Atendimento humano",
    "Acompanhamento atento em cada sessão.": "Acompanhamento atento em cada sessão.",

    // Services section
    "Tratamentos": "Tratamentos",
    "Protocolos pensados para si.": "Protocolos pensados para si.",
    "Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.": "Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.",
    "Ver todos": "Ver todos",
    "Saber mais": "Saber mais",

    // About section
    "Uma trajectória dedicada à arte do cuidar.": "Uma trajectória dedicada à arte do cuidar.",
    "Com formação em estética avançada e terapias integrativas, atuo em Portugal e em diversos países da Europa, levando técnicas atualizadas e um olhar atento a cada cliente.": "Com formação em estética avançada e terapias integrativas, atuo em Portugal e em diversos países da Europa, levando técnicas atualizadas e um olhar atento a cada cliente.",
    "Formação contínua em estética avançada": "Formação contínua em estética avançada",
    "Atendimento em Lisboa, Amadora e Caldas da Rainha": "Atendimento em Lisboa, Amadora e Caldas da Rainha",
    "Workshops e formações para profissionais": "Workshops e formações para profissionais",
    "Protocolos personalizados e resultados visíveis": "Protocolos personalizados e resultados visíveis",
    "Conhecer a minha história": "Conhecer a minha história",
    "Anos de experiência": "Anos de experiência",
    "Clientes satisfeitas": "Clientes satisfeitas",
    "Espaços de atendimento": "Espaços de atendimento",

    // Method section
    "O nosso método": "O nosso método",
    "Um caminho seguro para os seus resultados.": "Um caminho seguro para os seus resultados.",
    "Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.": "Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.",
    "Avaliação Inicial": "Avaliação Inicial",
    "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos.": "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos.",
    "Plano à Medida": "Plano à Medida",
    "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si.": "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si.",
    "Acompanhamento": "Acompanhamento",
    "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação.": "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação.",

    // Testimonials
    "Depoimentos": "Depoimentos",
    "O que dizem os nossos clientes": "O que dizem os nossos clientes",
    "Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.": "Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.",

    // FAQ
    "Dúvidas frequentes": "Dúvidas frequentes",
    "Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.": "Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.",

    // Europe Presence
    "Presença na Europa": "Presença na Europa",
    "Atendimento Internacional": "Atendimento Internacional",
    "Levamos o melhor da estética avançada e bem-estar a várias cidades e países europeus. Conheça a nossa cobertura e agende a sua consulta.": "Levamos o melhor da estética avançada e bem-estar a várias cidades e países europeus. Conheça a nossa cobertura e agende a sua consulta.",
    "Portugal": "Portugal",
    "França": "França",
    "Espanha": "Espanha",
    "Bélgica": "Bélgica",
    "Croácia": "Croácia",
    "Países Baixos": "Países Baixos",
    "Itália": "Itália",
    "Alemanha": "Alemanha",
    "Reino Unido": "Reino Unido",
    "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium.": "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium.",
    "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento.": "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento.",
    "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios.": "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios.",
    "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo.": "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo.",
    "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele.": "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele.",
    "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica.": "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica.",
    "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas.": "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas.",
    "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência.": "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência.",
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance."
  },
  en: {
    // Header & Footer & Nav
    "Início": "Home",
    "Sobre": "About",
    "Serviços": "Services",
    "Preços": "Prices",
    "Contactos": "Contacts",
    "Agendar": "Book Now",
    "Marcar consulta": "Schedule Consultation",
    "Falar connosco": "Talk with Us",
    "Formulário de contacto": "Contact Form",
    "Telemóvel": "Mobile Phone",
    "Fixo": "Landline",
    "Direitos Reservados": "Rights Reserved",
    "Todos os direitos reservados.": "All rights reserved.",
    "Agende a sua consulta": "Schedule Your Consultation",
    "Comece hoje a sua jornada de bem-estar.": "Start your well-being journey today.",
    "Avaliação personalizada e plano de tratamento desenhado especificamente para si.": "Personalized assessment and treatment plan designed specifically for you.",

    // Home Page Hero
    "Lisboa · Caldas da Rainha · Europa": "Lisbon · Caldas da Rainha · Europe",
    "Beleza que nasce do cuidado e do equilíbrio.": "Beauty born from care and balance.",
    "Sou Thatiana Cardoso, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos and atendimento personalizado.": "I am Thatiana Cardoso, a specialist in advanced aesthetics and integrative therapies. A space dedicated to revealing your best version, with exclusive protocols and personalized care.",
    "Conheça os tratamentos": "Discover Treatments",

    // Home Page Pillars
    "Estética avançada": "Advanced Aesthetics",
    "Tecnologia de ponta com protocolos personalizados.": "State-of-the-art technology with customized protocols.",
    "Terapias naturais": "Natural Therapies",
    "Métodos integrativos para corpo e mente.": "Integrative methods for body and mind.",
    "Atendimento humano": "Human Touch",
    "Acompanhamento atento em cada sessão.": "Attentive support in every session.",

    // Services section
    "Tratamentos": "Treataments",
    "Protocolos pensados para si.": "Protocols designed for you.",
    "Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.": "Each treatment is designed to respond to your specific needs, with outstanding techniques and equipment.",
    "Ver todos": "View All",
    "Saber mais": "Learn More",

    // About section
    "Uma trajectória dedicada à arte do cuidar.": "A trajectory dedicated to the art of caring.",
    "Com formação em estética avançada e terapias integrativas, atuo em Portugal e em diversos países da Europa, levando técnicas atualizadas e um olhar atento a cada cliente.": "With a background in advanced aesthetics and integrative therapies, I operate in Portugal and several European countries, delivering updated techniques and focused attention to each client.",
    "Formação contínua em estética avançada": "Continuous training in advanced aesthetics",
    "Atendimento em Lisboa, Amadora e Caldas da Rainha": "Care in Lisbon, Amadora, and Caldas da Rainha",
    "Workshops e formações para profissionais": "Workshops and training for professionals",
    "Protocolos personalizados e resultados visíveis": "Personalized protocols and visible results",
    "Conhecer a minha história": "Learn My Story",
    "Anos de experiência": "Years of experience",
    "Clientes satisfeitas": "Satisfied clients",
    "Espaços de atendimento": "Service locations",

    // Method section
    "O nosso método": "Our Method",
    "Um caminho seguro para os seus resultados.": "A safe path to your results.",
    "Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.": "We believe each person is unique. Our process ensures every treatment is perfectly tailored to you.",
    "Avaliação Inicial": "Initial Assessment",
    "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos.": "A detailed discussion to understand your needs, clinical history, and goals.",
    "Plano à Medida": "Custom Plan",
    "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si.": "Design of a customized treatment protocol, combining the best techniques for you.",
    "Acompanhamento": "Follow-up",
    "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação.": "Continuous monitoring of results and plan adjustments to ensure maximum efficacy and satisfaction.",

    // Testimonials
    "Depoimentos": "Testimonials",
    "O que dizem os nossos clientes": "What Our Clients Say",
    "Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.": "Real experiences of those who trusted us to take care of their well-being and self-esteem.",

    // FAQ
    "Dúvidas frequentes": "Frequently Asked Questions",
    "Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.": "Find here the answers to the most common questions about our treatments and processes. If you don't find what you are looking for, do not hesitate to contact us.",

    // Europe Presence
    "Presença na Europa": "Presence in Europe",
    "Atendimento Internacional": "International Service",
    "Levamos o melhor da estética avançada e bem-estar a várias cidades e países europeus. Conheça a nossa cobertura e agende a sua consulta.": "We bring the best of advanced aesthetics and well-being to various European cities and countries. Meet our coverage and schedule your consultation.",
    "Portugal": "Portugal",
    "França": "France",
    "Espanha": "Spain",
    "Bélgica": "Belgium",
    "Croácia": "Croatia",
    "Países Baixos": "Netherlands",
    "Itália": "Italy",
    "Alemanha": "Germany",
    "Reino Unido": "United Kingdom",
    "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium.": "Lisbon, Porto, Algarve, and Caldas da Rainha. Facial and body treatments with premium care.",
    "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento.": "Paris and Lyon. Exclusive consultations for advanced aesthetics and rejuvenation.",
    "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios.": "Madrid and Barcelona. Integrative lymphatic drainage and post-operative protocols.",
    "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo.": "Brussels. Detoxification therapies and complete body balance.",
    "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele.": "Zagreb. Exclusive protocols for skin stimulation and revitalization.",
    "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica.": "Amsterdam. Personalized Hidrolinfa programs and ionic detoxification.",
    "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas.": "Rome and Milan. Sculpted body treatments and deep relaxation therapies.",
    "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência.": "Berlin and Munich. State-of-the-art technology for outstanding aesthetic results.",
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "London. Personalized consultations and high-performance dedicated support."
  },
  es: {
    // Header & Footer & Nav
    "Início": "Inicio",
    "Sobre": "Sobre mí",
    "Serviços": "Servicios",
    "Preços": "Precios",
    "Contactos": "Contactos",
    "Agendar": "Reservar",
    "Marcar consulta": "Agendar Consulta",
    "Falar connosco": "Hablar con Nosotros",
    "Formulário de contacto": "Formulario de Contacto",
    "Telemóvel": "Teléfono Móvil",
    "Fixo": "Teléfono Fijo",
    "Direitos Reservados": "Derechos Reservados",
    "Todos os direitos reservados.": "Todos los derechos reservados.",
    "Agende a sua consulta": "Reserve su consulta",
    "Comece hoje a sua jornada de bem-estar.": "Comience hoy su viaje de bienestar.",
    "Avaliação personalizada e plano de tratamento desenhado especificamente para si.": "Evaluación personalizada y plan de tratamiento diseñado específicamente para usted.",

    // Home Page Hero
    "Lisboa · Caldas da Rainha · Europa": "Lisboa · Caldas da Rainha · Europa",
    "Beleza que nasce do cuidado e do equilíbrio.": "Belleza que nace del cuidado y del equilibrio.",
    "Sou Thatiana Cardoso, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "Soy Thatiana Cardoso, especialista en estética avanzada y terapias integrativas. Un espacio dedicado a revelar tu mejor versión, con protocolos exclusivos y atención personalizada.",
    "Conheça os tratamentos": "Conoce los tratamientos",

    // Home Page Pillars
    "Estética avançada": "Estética avanzada",
    "Tecnologia de ponta com protocolos personalizados.": "Tecnología de punta con protocolos personalizados.",
    "Terapias naturais": "Terapias naturales",
    "Métodos integrativos para corpo e mente.": "Métodos integrativos para el cuerpo y la mente.",
    "Atendimento humano": "Atención humana",
    "Acompanhamento atento em cada sessão.": "Acompañamiento atento en cada sesión.",

    // Services section
    "Tratamentos": "Tratamientos",
    "Protocolos pensados para si.": "Protocolos pensados para usted.",
    "Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.": "Cada tratamiento está diseñado para responder a sus necesidades específicas, con técnicas y equipos de excelencia.",
    "Ver todos": "Ver todos",
    "Saber mais": "Saber más",

    // About section
    "Uma trajectória dedicada à arte do cuidar.": "Una trayectoria dedicada al arte de cuidar.",
    "Com formação em estética avançada e terapias integrativas, atuo em Portugal e em diversos países da Europa, levando técnicas atualizadas e um olhar atento a cada cliente.": "Con formación en estética avanzada y terapias integrativas, actúo en Portugal y en diversos países de Europa, llevando técnicas actualizadas y una mirada atenta a cada cliente.",
    "Formação contínua em estética avançada": "Formación continua en estética avanzada",
    "Atendimento em Lisboa, Amadora e Caldas da Rainha": "Atención en Lisboa, Amadora y Caldas da Rainha",
    "Workshops e formações para profissionais": "Talleres y formaciones para profesionales",
    "Protocolos personalizados e resultados visíveis": "Protocolos personalizados y resultados visibles",
    "Conhecer a minha história": "Conocer mi historia",
    "Anos de experiência": "Años de experiencia",
    "Clientes satisfeitas": "Clientes satisfechas",
    "Espaços de atendimento": "Espacios de atención",

    // Method section
    "O nosso método": "Nuestro método",
    "Um caminho seguro para os seus resultados.": "Un camino seguro para sus resultados.",
    "Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.": "Creemos que cada persona es única. Nuestro proceso garantiza que cada tratamiento se adapte perfectamente a usted.",
    "Avaliação Inicial": "Evaluación Inicial",
    "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos.": "Una conversación detallada para entender sus necesidades, historial clínico y objetivos.",
    "Plano à Medida": "Plan a Medida",
    "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si.": "Diseño de un protocolo de tratamiento personalizado, combinando las mejores técnicas para usted.",
    "Acompanhamento": "Acompañamiento",
    "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação.": "Monitoreo continuo de los resultados y ajustes en el plan para garantizar la máxima eficacia y satisfacción.",

    // Testimonials
    "Depoimentos": "Testimonios",
    "O que dizem os nossos clientes": "Lo que dicen nuestros clientes",
    "Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.": "Experiencias reales de quienes confiaron en nosotros para cuidar de su bienestar y autoestima.",

    // FAQ
    "Dúvidas frequentes": "Preguntas frecuentes",
    "Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.": "Encuentre aquí las respuestas a las preguntas más comunes sobre nuestros tratamientos y procesos. Si no encuentra lo que busca, no dude en contactarnos.",

    // Europe Presence
    "Presença na Europa": "Presencia en Europa",
    "Atendimento Internacional": "Atención Internacional",
    "Levamos o melhor da estética avançada e bem-estar a várias cidades e países europeus. Conheça a nossa cobertura e agende a sua consulta.": "Llevamos lo mejor de la estética avanzada y el bienestar a varias ciudades y países europeos. Conozca nuestra cobertura y reserve su consulta.",
    "Portugal": "Portugal",
    "França": "Francia",
    "Espanha": "España",
    "Bélgica": "Bélgica",
    "Croácia": "Croacia",
    "Países Baixos": "Países Bajos",
    "Itália": "Italia",
    "Alemanha": "Alemania",
    "Reino Unido": "Reino Unido",
    "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium.": "Lisboa, Oporto, Algarve y Caldas da Rainha. Tratamientos faciales y corporales con seguimiento premium.",
    "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento.": "París y Lyon. Consultas exclusivas de estética avanzada y rejuvenecimiento.",
    "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios.": "Madrid y Barcelona. Drenaje linfático integrativo y protocolos postoperatorios.",
    "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo.": "Bruselas. Terapias de desintoxicación y equilibrio corporal completo.",
    "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele.": "Zagreb. Protocolos exclusivos de estimulación y revitalización de la piel.",
    "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica.": "Ámsterdam. Programas personalizados de Hidrolinfa y desintoxicación iónica.",
    "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas.": "Roma y Milán. Tratamientos corporales esculpidos y terapias de relajación profunda.",
    "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência.": "Berlín y Múnich. Tecnología de punta para resultados estéticos de excelencia.",
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "Londres. Consultas personalizadas y acompañamiento dedicado de alto rendimiento."
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  // Load language preference from localStorage if available (client-side only)
  useEffect(() => {
    const saved = localStorage.getItem("language-pref") as Language;
    if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language-pref", lang);
    // Update lang attribute in html
    document.documentElement.lang = lang;
  };

  // Asynchronous dynamic translation using LibreTranslate API
  const translateText = async (text: string, source: Language, target: Language): Promise<string> => {
    if (source === target) return text;
    
    // Check local dictionary cache first
    const local = localDictionary[target]?.[text];
    if (local) return local;

    try {
      // Use public stable LibreTranslate mirror
      const response = await fetch("https://translate.argosopentech.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: source,
          target: target,
          format: "text",
          api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.translatedText) {
          return data.translatedText;
        }
      }
    } catch (err) {
      console.warn("LibreTranslate API failed or ratelimited, using local dictionary or original text.", err);
    }

    return text;
  };

  const t = (key: string): string => {
    return localDictionary[language]?.[key] ?? key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translateText, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}

export function Translate({ children }: { children: string }) {
  const { translateText, language, t } = useTranslation();
  const [translated, setTranslated] = useState(t(children));

  useEffect(() => {
    let active = true;
    
    // Check local dictionary first (instant)
    const localVal = t(children);
    if (localVal !== children || language === "pt") {
      setTranslated(localVal);
      return;
    }

    // Call LibreTranslate API as fallback
    translateText(children, "pt", language).then((res) => {
      if (active) setTranslated(res);
    });

    return () => {
      active = false;
    };
  }, [children, language, t]);

  return <>{translated}</>;
}
