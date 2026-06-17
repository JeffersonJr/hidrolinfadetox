import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en" | "es" | "fr" | "it";

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
    "O equilíbrio começa de dentro para fora": "O equilíbrio começa de dentro para fora",
    "Sou Tatiana Penteado, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "Sou Tatiana Penteado, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.",
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
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.",
    "Agenda Especial": "Agenda Especial",
    "Tatiana Penteado na Italia": "Tatiana Penteado na Italia",
    "18 e 19 de Julho": "18 e 19 de Julho",
    "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia": "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia",
    "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.": "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.",
    "Aproveite esta oportunidade única para realizar o seu atendimento personalizado e de estética avançada com a Dra. Tatiana Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.": "Aproveite esta oportunidade única para realizar o seu atendimento personalizado e de estética avançada com a Dra. Tatiana Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.",
    "Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.": "Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.",
    "Agendar no Treatwell": "Agendar no Treatwell",
    "Esclarecer dúvidas por WhatsApp": "Esclarecer dúvidas por WhatsApp",
    "Tirar dúvidas": "Tirar dúvidas",
    "Data e Período": "Data e Período",
    "Local dos Atendimentos": "Local dos Atendimentos",
    "Destaque e Credencial": "Destaque e Credencial",
    "Participação no 1º Congresso de Medicina Integrativa Europa - Portugal": "Participação no 1º Congresso de Medicina Integrativa Europa - Portugal",
    "Terapias Integrativas": "Terapias Integrativas",
    "Medicina Tradicional": "Medicina Tradicional",
    "Chinesa & Bem-Estar": "Chinesa & Bem-Estar",
    "Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.": "Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.",
    "Medicina Tradicional Chinesa MTC": "Medicina Tradicional Chinesa MTC",
    "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.": "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.",
    "Auriculoterapia": "Auriculoterapia",
    "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.": "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.",
    "Reflexologia": "Reflexologia",
    "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.": "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.",
    "Cromopuntura": "Cromopuntura",
    "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.": "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.",
    "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.": "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.",
    "Bambuterapia": "Bambuterapia",
    "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.": "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.",
    "Pedras Quentes": "Pedras Quentes",
    "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.": "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.",
    "Consulta de Medicina Tradicional Chinesa MTC": "Consulta de Medicina Tradicional Chinesa MTC",
    "Sessão de Auriculoterapia": "Sessão de Auriculoterapia",
    "Sessão de Cromopuntura": "Sessão de Cromopuntura",
    "Sessão de Reflexologia": "Sessão de Reflexologia",
    "Terapia de Pedras Quentes": "Terapia de Pedras Quentes",
    "Sob Consulta": "Sob Consulta",
    "Agendar Consulta": "Agendar Consulta"
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
    "O equilíbrio começa de dentro para fora": "Balance begins from the inside out",
    "Sou Tatiana Penteado, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "I am Tatiana Penteado, a specialist in advanced aesthetics and integrative therapies. A space dedicated to revealing your best version, with exclusive protocols and personalized care.",
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
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "London. Personalized consultations and high-performance dedicated support.",
    "Agenda Especial": "Special Agenda",
    "Tatiana Penteado na Italia": "Tatiana Penteado in Portugal",
    "18 e 19 de Julho": "July 18th & 19th",
    "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia": "Espaço Humana · Therapies, Aesthetics, Health & Well-being",
    "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.": "Secure your slot for exclusive sessions in advanced aesthetics and integrative therapies. A unique opportunity for an in-person assessment and treatment.",
    "Aproveite esta oportunidade única para realizar o seu atendimento personalizado e de estética avançada com a Dra. Tatiana Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.": "Take advantage of this unique opportunity for a personalized and advanced aesthetic treatment with Dr. Tatiana Penteado. In-person slots are highly limited to guarantee premium follow-up and exceptional results.",
    "Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.": "Online registration and booking are open directly on the Treatwell app/website.",
    "Agendar no Treatwell": "Book on Treatwell",
    "Esclarecer dúvidas por WhatsApp": "Ask questions on WhatsApp",
    "Tirar dúvidas": "Get Info",
    "Data e Período": "Date & Period",
    "Local dos Atendimentos": "Location of Care",
    "Destaque e Credencial": "Highlight & Credential",
    "Participação no 1º Congresso de Medicina Integrativa Europa - Portugal": "Participation in the 1st Integrative Medicine Congress Europe - Portugal",
    "Terapias Integrativas": "Integrative Therapies",
    "Medicina Tradicional": "Traditional Chinese",
    "Chinesa & Bem-Estar": "Medicine & Well-being",
    "Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.": "Millenary and integrative methods to harmonize mind and body, promoting energetic balance and comprehensive health.",
    "Medicina Tradicional Chinesa MTC": "Traditional Chinese Medicine TCM",
    "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.": "Complete treatment to harmonize Mind, Body, and energetic balance through ancient principles.",
    "Auriculoterapia": "Auriculotherapy",
    "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.": "Therapy based on stimulating specific points in the ear, highly specialized in anxiety and weight loss.",
    "Reflexologia": "Reflexology",
    "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.": "Integrative care and body tension relief through massage and precise stimulation of reflex foot points.",
    "Cromopuntura": "Chromopuncture",
    "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.": "Therapy using color balance 🌈. A non-invasive treatment suitable for all ages, with a special focus on children and the elderly.",
    "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.": "Ancient technique using vacuum cups to release muscle fascia, alleviate body aches, and eliminate accumulated toxins.",
    "Bambuterapia": "Bamboo Therapy",
    "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.": "Body massage combining shaping and relaxing maneuvers using bamboo rods of different sizes.",
    "Pedras Quentes": "Hot Stones",
    "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.": "Deep geothermal therapy using heated volcanic stones to melt stress away, ease tension, and promote total relaxation.",
    "Consulta de Medicina Tradicional Chinesa MTC": "Traditional Chinese Medicine TCM Consultation",
    "Sessão de Auriculoterapia": "Auriculotherapy Session",
    "Sessão de Cromopuntura": "Chromopuncture Session",
    "Sessão de Reflexologia": "Reflexology Session",
    "Terapia de Pedras Quentes": "Hot Stones Therapy",
    "Sob Consulta": "Upon Request",
    "Agendar Consulta": "Book Consultation"
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
    "O equilíbrio começa de dentro para fora": "El equilibrio comienza de adentro hacia afuera",
    "Sou Tatiana Penteado, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "Soy Tatiana Penteado, especialista en estética avanzada y terapias integrativas. Un espacio dedicado a revelar tu mejor versión, con protocolos exclusivos y atención personalizada.",
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
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "Londres. Consultas personalizadas y acompañamiento dedicado de alto rendimiento.",
    "Agenda Especial": "Agenda Especial",
    "Tatiana Penteado na Italia": "Tatiana Penteado en Portugal",
    "18 e 19 de Julho": "18 y 19 de Julio",
    "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia": "Espaço Humana · Terapias, Estética, Salud & Bienestar",
    "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.": "Asegure su plaza para sesiones exclusivas de estética avanzada e terapias integrativas. Una oportunidad única para una evaluación y tratamiento presencial.",
    "Aproveite esta oportunidade única para realizar o seu atendimento personalizado e de estética avançada com a Dra. Tatiana Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.": "Aprovech esta oportunidad única para un tratamiento estético avanzado y personalizado con la Dra. Tatiana Penteado. Las plazas presenciales son muy limitadas para garantizar el mejor seguimiento y resultados excepcionales.",
    "Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.": "Inscripciones y reservas en línea abiertas directamente a través de la aplicación/web de Treatwell.",
    "Agendar no Treatwell": "Reservar en Treatwell",
    "Esclarecer dúvidas por WhatsApp": "Aclarar dudas por WhatsApp",
    "Tirar dúvidas": "Resolver dudas",
    "Data e Período": "Fecha y Período",
    "Local dos Atendimentos": "Lugar de Atención",
    "Destaque e Credencial": "Destacado y Credencial",
    "Participação no 1º Congresso de Medicina Integrativa Europa - Portugal": "Participación en el 1º Congreso de Medicina Integrativa Europa - Portugal",
    "Terapias Integrativas": "Terapias Integrativas",
    "Medicina Tradicional": "Medicina Tradicional",
    "Chinesa & Bem-Estar": "China & Bienestar",
    "Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.": "Métodos integrativos y milenarios para armonizar cuerpo y mente, promoviendo el equilibrio energético y la salud integral.",
    "Medicina Tradicional Chinesa MTC": "Medicina Tradicional China MTC",
    "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.": "Tratamiento completo para armonizar Mente, Cuerpo y equilibrio energético mediante principios milenarios.",
    "Auriculoterapia": "Auriculoterapia",
    "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.": "Terapia basada en la estimulación de puntos específicos en la oreja, altamente especializada en ansiedad y pérdida de peso.",
    "Reflexologia": "Reflexología",
    "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.": "Cuidado integrador y alivio de tensiones corporales mediante masaje y estímulo de puntos reflexológicos del pie.",
    "Cromopuntura": "Cromopuntura",
    "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.": "Terapia mediante el equilibrio de colores 🌈. Tratamiento no invasivo recomendado para todas las edades, con especial atención a niños y ancianos.",
    "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.": "Técnica ancestral que utiliza copas de vacío para liberar la fascia muscular, aliviar dolores corporales y eliminar toxinas acumuladas.",
    "Bambuterapia": "Bambuterapia",
    "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.": "Masaje corporal que combina maniobras modeladoras y relajantes utilizando cañas de bambú de diferentes tamaños.",
    "Pedras Quentes": "Piedras Calientes",
    "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.": "Terapia geotermal profunda que utiliza piedras volcánicas calientes para derretir el estrés, aliviar tensiones y promover relajación total.",
    "Consulta de Medicina Tradicional Chinesa MTC": "Consulta de Medicina Tradicional China MTC",
    "Sessão de Auriculoterapia": "Sesión de Auriculoterapia",
    "Sessão de Cromopuntura": "Sesión de Cromopuntura",
    "Sessão de Reflexologia": "Sesión de Reflexología",
    "Terapia de Pedras Quentes": "Terapia de Piedras Calientes",
    "Sob Consulta": "Bajo Consulta",
    "Agendar Consulta": "Reservar Consulta"
  },
  fr: {
    // Header & Footer & Nav
    "Início": "Accueil",
    "Sobre": "À propos",
    "Serviços": "Services",
    "Preços": "Tarifs",
    "Contactos": "Contacts",
    "Agendar": "Réserver",
    "Marcar consulta": "Prendre RDV",
    "Falar connosco": "Nous contacter",
    "Formulário de contacto": "Formulaire de contact",
    "Telemóvel": "Téléphone portable",
    "Fixo": "Téléphone fixe",
    "Direitos Reservados": "Droits réservés",
    "Todos os direitos reservados.": "Tous droits réservés.",
    "Agende a sua consulta": "Prenez votre rendez-vous",
    "Comece hoje a sua jornada de bem-estar.": "Commencez dès aujourd'hui votre parcours de bien-être.",
    "Avaliação personalizada e plano de tratamento desenhado especificamente para si.": "Évaluation personnalisée et plan de traitement conçu spécifiquement pour vous.",

    // Home Page Hero
    "Lisboa · Caldas da Rainha · Europa": "Lisbonne · Caldas da Rainha · Europe",
    "O equilíbrio começa de dentro para fora": "L'équilibre commence de l'intérieur vers l'extérieur",
    "Sou Tatiana Penteado, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "Je suis Tatiana Penteado, spécialiste en esthétique avancée et thérapies intégratives. Un espace dédié à révéler votre meilleure version, avec des protocoles exclusifs et un accueil personnalisé.",
    "Conheça os tratamentos": "Découvrez les traitements",

    // Home Page Pillars
    "Estética avançada": "Esthétique avancée",
    "Tecnologia de ponta com protocolos personalizados.": "Technologie de pointe avec protocoles personnalisés.",
    "Terapias naturais": "Thérapies naturelles",
    "Métodos integrativos para corpo e mente.": "Méthodes intégratives pour le corps et l'esprit.",
    "Atendimento humano": "Approche humaine",
    "Acompanhamento atento em cada sessão.": "Suivi attentif à chaque séance.",

    // Services section
    "Tratamentos": "Traitements",
    "Protocolos pensados para si.": "Protocoles pensés pour vous.",
    "Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.": "Chaque traitement est conçu pour répondre à vos besoins spécifiques, avec des techniques et des équipements d'excellence.",
    "Ver todos": "Voir tout",
    "Saber mais": "En savoir plus",

    // About section
    "Uma trajectória dedicada à arte do cuidar.": "Un parcours dédié à l'art de prendre soin.",
    "Com formação em estética avançada e terapias integrativas, atuo em Portugal e em diversos países da Europa, levando técnicas atualizadas e um olhar atento a cada cliente.": "Formée en esthétique avancée et en thérapies intégratives, j'exerce au Portugal et dans plusieurs pays d'Europe, apportant des techniques modernes et une attention particulière à chaque client.",
    "Formação contínua em estética avançada": "Formation continue en esthétique avancée",
    "Atendimento em Lisboa, Amadora e Caldas da Rainha": "Prestation de services à Lisbonne, Amadora et Caldas da Rainha",
    "Workshops e formações para profissionais": "Ateliers et formations pour professionnels",
    "Protocolos personalizados e resultados visíveis": "Protocoles personnalisés et résultats visibles",
    "Conhecer a minha história": "Découvrir mon histoire",
    "Anos de experiência": "Années d'expérience",
    "Clientes satisfeitas": "Clientes satisfaites",
    "Espaços de atendimento": "Lieux de consultation",

    // Method section
    "O nosso método": "Notre méthode",
    "Um caminho seguro para os seus resultados.": "Un chemin sûr vers vos résultats.",
    "Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.": "Nous croyons que chaque personne est unique. Notre processus garantit que chaque traitement est parfaitement adapté à vous.",
    "Avaliação Inicial": "Évaluation initiale",
    "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos.": "Un entretien détaillé pour comprendre vos besoins, vos antécédents médicaux et vos objectifs.",
    "Plano à Medida": "Plan sur mesure",
    "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si.": "Conception d'un protocole de traitement personnalisé, combinant les meilleures techniques pour vous.",
    "Acompanhamento": "Suivi personnalisé",
    "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação.": "Suivi continu des résultats et ajustements du plan pour garantir une efficacité et une satisfaction maximales.",

    // Testimonials
    "Depoimentos": "Témoignages",
    "O que dizem os nossos clientes": "Ce que disent nos clients",
    "Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.": "Expériences réelles de ceux qui nous ont fait confiance pour prendre soin de leur bien-être et de leur estime de soi.",

    // FAQ
    "Dúvidas frequentes": "Questions fréquentes",
    "Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.": "Retrouvez ici les réponses aux questions les plus courantes sur nos traitements et nos processus. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.",

    // Europe Presence
    "Presença na Europa": "Présence en Europe",
    "Atendimento Internacional": "Service international",
    "Levamos o melhor da estética avançada e bem-estar a várias cidades e países europeus. Conheça a nossa cobertura e agende a sua consulta.": "Nous apportons le meilleur de l'esthétique avancée et du bien-être dans plusieurs villes et pays européens. Découvrez notre couverture et prenez rendez-vous.",
    "Portugal": "Portugal",
    "França": "France",
    "Espanha": "Espagne",
    "Bélgica": "Belgique",
    "Croácia": "Croatie",
    "Países Baixos": "Pays-Bas",
    "Itália": "Italie",
    "Alemanha": "Allemagne",
    "Reino Unido": "Royaume-Uni",
    "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium.": "Lisbonne, Porto, Algarve et Caldas da Rainha. Traitements du visage et du corps avec un suivi haut de gamme.",
    "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento.": "Paris et Lyon. Consultations exclusives d'esthétique avancée et de rajeunissement.",
    "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios.": "Madrid et Barcelone. Drainage lymphatique intégratif et protocoles post-opératoires.",
    "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo.": "Bruxelles. Thérapies de détoxification et équilibre corporel complet.",
    "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele.": "Zagreb. Protocoles exclusifs de stimulation et de revitalisation de la peau.",
    "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica.": "Amsterdam. Programmes personnalisés d'Hydrolinphe et de détoxification ionique.",
    "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas.": "Rome et Milan. Traitements corporels sculptants et thérapies de relaxation profonde.",
    "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência.": "Berlin et Munich. Technologie de pointe pour des résultats esthétiques d'excellence.",
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "Londres. Consultations personnalisées et suivi dédié de haute performance.",
    "Agenda Especial": "Agenda Spécial",
    "Tatiana Penteado na Italia": "Tatiana Penteado au Portugal",
    "18 e 19 de Julho": "18 et 19 Juillet",
    "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia": "Espaço Humana · Thérapies, Esthétique, Santé & Bien-être",
    "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.": "Garantissez votre place pour des séances exclusives d'esthétique avancée et de thérapies intégratives. Une opportunité unique pour une évaluation et un soin en personne.",
    "Aproveite esta oportunidade única para realizar o seu atendimento personalizado e de estética avançada com a Dra. Tatiana Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.": "Profitez de cette occasion unique pour un soin esthétique avancé et personnalisé avec la Dre Tatiana Penteado. Les places en personne sont très limitées pour garantir le meilleur suivi et des résultats exceptionnels.",
    "Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.": "Inscriptions et rendez-vous en ligne ouverts directement via l'application/le site Treatwell.",
    "Agendar no Treatwell": "Réserver sur Treatwell",
    "Esclarecer dúvidas por WhatsApp": "Poser des questions sur WhatsApp",
    "Tirar dúvidas": "Poser des questions",
    "Data e Período": "Date & Période",
    "Local dos Atendimentos": "Lieu de Consultation",
    "Destaque e Credencial": "À l'honneur & Titre",
    "Participação no 1º Congresso de Medicina Integrativa Europa - Portugal": "Participation au 1er Congrès de Médecine Intégrative Europe - Portugal",
    "Terapias Integrativas": "Thérapies Intégratives",
    "Medicina Tradicional": "Médecine Traditionnelle",
    "Chinesa & Bem-Estar": "Chinoise & Bien-être",
    "Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.": "Méthodes intégratives et millénaires pour harmoniser le corps et l'esprit, favorisant l'équilibre énergétique et la santé globale.",
    "Medicina Tradicional Chinesa MTC": "Médecine Traditionnelle Chinoise MTC",
    "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.": "Traitement complet pour harmoniser l'Esprit, le Corps et l'équilibre énergétique grâce à des principes millénaires.",
    "Auriculoterapia": "Auriculothérapie",
    "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.": "Thérapie basée sur la stimulation de points spécifiques de l'oreille, hautement spécialisée dans l'anxiété et la perte de poids.",
    "Reflexologia": "Réflexologie",
    "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.": "Soins intégrés et soulagement des tensions corporelles par le massage et la stimulation de points précis du pied.",
    "Cromopuntura": "Chromopuncture",
    "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.": "Thérapie par l'équilibre des couleurs 🌈. Traitement non invasif adapté à tous les âges, avec un accent particulier sur les enfants et les personnes âgées.",
    "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.": "Technique ancestrale utilisant des ventouses pour libérer le fascia musculaire, soulager les douleurs corporelles et éliminer les toxines accumulées.",
    "Bambuterapia": "Bambouthérapie",
    "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.": "Massage corporel combinant des manœuvres sculptantes et relaxantes à l'aide de tiges de bambou de différentes tailles.",
    "Pedras Quentes": "Pierres Chaudes",
    "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.": "Thérapie géothermique profonde utilisant des pierres volcaniques chauffées pour dissiper le stress, soulager les tensions et favoriser une relaxation totale.",
    "Consulta de Medicina Tradicional Chinesa MTC": "Consultation de Médecine Traditionnelle Chinoise MTC",
    "Sessão de Auriculoterapia": "Séance d'Auriculothérapie",
    "Sessão de Cromopuntura": "Séance de Chromopuncture",
    "Sessão de Reflexologia": "Séance de Réflexologie",
    "Terapia de Pedras Quentes": "Thérapie aux Pierres Chaudes",
    "Sob Consulta": "Sur Demande",
    "Agendar Consulta": "Réserver Consultation"
  },
  it: {
    // Header & Footer & Nav
    "Início": "Home",
    "Sobre": "Chi Sono",
    "Serviços": "Servizi",
    "Preços": "Prezzi",
    "Contactos": "Contatti",
    "Agendar": "Prenota",
    "Marcar consulta": "Prenota una consulenza",
    "Falar connosco": "Contattaci",
    "Formulário de contacto": "Modulo di contatto",
    "Telemóvel": "Cellulare",
    "Fixo": "Telefono fisso",
    "Direitos Reservados": "Diritti riservati",
    "Todos os direitos reservados.": "Tutti i diritti riservati.",
    "Agende a sua consulta": "Prenota la tua consulenza",
    "Comece hoje a sua jornada de bem-estar.": "Inizia oggi il tuo viaggio nel benessere.",
    "Avaliação personalizada e plano de tratamento desenhado especificamente para si.": "Valutazione personalizzata e piano di tratamento studiato appositamente per te.",

    // Home Page Hero
    "Lisboa · Caldas da Rainha · Europa": "Lisbona · Caldas da Rainha · Europa",
    "O equilíbrio começa de dentro para fora": "L'equilibrio inizia dall'interno verso l'esterno",
    "Sou Tatiana Penteado, especialista em estética avançada e terapias integrativas. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.": "Sono Tatiana Penteado, specialista in estetica avanzata e terapie integrative. Uno spazio dedicato a rivelare la tua versione migliore, con protocolli esclusivi e attenzione personalizzata.",
    "Conheça os tratamentos": "Scopri i trattamenti",

    // Home Page Pillars
    "Estética avançada": "Estetica avanzata",
    "Tecnologia de ponta com protocolos personalizados.": "Tecnologia all'avanguardia con protocolli personalizzati.",
    "Terapias naturais": "Terapie naturali",
    "Métodos integrativos para corpo e mente.": "Metodi integrativi per corpo e mente.",
    "Atendimento humano": "Approccio umano",
    "Acompanhamento atento em cada sessão.": "Supporto attento in ogni seduta.",

    // Services section
    "Tratamentos": "Trattamenti",
    "Protocolos pensados para si.": "Protocolli pensati per te.",
    "Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.": "Ogni trattamento è progettato per rispondere alle tue esigenze specifiche, con tecniche e attrezzature d'eccellenza.",
    "Ver todos": "Vedi tutti",
    "Saber mais": "Scopri di più",

    // About section
    "Uma trajectória dedicada à arte do cuidar.": "Un percorso dedicato all'arte del prendersi cura.",
    "Com formação em estética avançada e terapias integrativas, atuo em Portugal e em diversos países da Europa, levando técnicas atualizadas e um olhar atento a cada cliente.": "Con una formazione in estetica avanzata e terapie integrative, opero in Portogallo e in diversi paesi europei, offrendo tecniche aggiornate e un'attenzione personalizzata a ogni cliente.",
    "Formação contínua em estética avançada": "Formazione continua in estetica avanzata",
    "Atendimento em Lisboa, Amadora e Caldas da Rainha": "Servizio a Lisbona, Amadora e Caldas da Rainha",
    "Workshops e formações para profissionais": "Workshop e corsi di formazione per professionisti",
    "Protocolos personalizados e resultados visíveis": "Protocolli personalizzati e risultati visibili",
    "Conhecer a minha história": "Scopri la mia storia",
    "Anos de experiência": "Anni di esperienza",
    "Clientes satisfeitas": "Clienti soddisatte",
    "Espaços de atendimento": "Sedi dei trattamenti",

    // Method section
    "O nosso método": "Il nostro metodo",
    "Um caminho seguro para os seus resultados.": "Un percorso sicuro per i tuoi risultati.",
    "Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.": "Crediamo che ogni persona sia unica. Il nostro processo garantisce che ogni trattamento sia perfettamente adattato a te.",
    "Avaliação Inicial": "Valutazione iniziale",
    "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos.": "Un colloquio approfondito per comprendere le tue esigenze, la storia clinica e gli obiettivi.",
    "Plano à Medida": "Piano su misura",
    "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si.": "Progettazione di un protocollo di trattamenti personalizzato, combinando le migliori tecniche per te.",
    "Acompanhamento": "Monitoraggio",
    "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação.": "Monitoraggio continuo dei risultati e adeguamenti del piano per garantire la massima efficacia e soddisfazione.",

    // Testimonials
    "Depoimentos": "Testimonianze",
    "O que dizem os nossos clientes": "Cosa dicono i nostri clienti",
    "Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.": "Esperienze reali di chi si è affidato a noi per prendersi cura del proprio benessere e dell'autostima.",

    // FAQ
    "Dúvidas frequentes": "Domande frequenti",
    "Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.": "Trova qui le risposte alle domande più comuni sui nostri trattamenti e processi. Se non trovi quello che cerchi, non esitare a contattarci.",

    // Europe Presence
    "Presença na Europa": "Presenza in Europa",
    "Atendimento Internacional": "Servizio internazionale",
    "Levamos o melhor da estética avançada e bem-estar a várias cidades e países europeus. Conheça a nossa cobertura e agende a sua consulta.": "Portiamo il meglio dell'estetica avanzata e del benessere in varie città e paesi europei. Scopri la nostra copertura e prenota la tua consulenza.",
    "Portugal": "Portogallo",
    "França": "Francia",
    "Espanha": "Spagna",
    "Bélgica": "Belgio",
    "Croácia": "Croazia",
    "Países Baixos": "Paesi Bassi",
    "Itália": "Italia",
    "Alemanha": "Germania",
    "Reino Unido": "Regno Unito",
    "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium.": "Lisbona, Porto, Algarve e Caldas da Rainha. Trattamenti viso e corpo con supporto premium.",
    "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento.": "Parigi e Lione. Consulenze esclusive di estetica avanzata e ringiovanimento.",
    "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios.": "Madrid e Barcellona. Drenaggio linfatico integrativo e protocolli post-operatori.",
    "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo.": "Bruxelles. Terapie di disintossicazione e riequilibrio corporeo completo.",
    "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele.": "Zagabria. Protocolli esclusivi di stimolazione e rivitalizzazione della pelle.",
    "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica.": "Amsterdam. Programmi personalizzati di Hidrolinfa e disintossicazione ionica.",
    "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas.": "Roma e Milano. Trattamenti corpo modellanti e terapie di rilassamento profondo.",
    "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência.": "Berlino e Monaco. Tecnologia all'avanguardia per risultati estetici d'eccellenza.",
    "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance.": "Londra. Consulenze personalizzate e supporto dedicato ad alte prestazioni.",
    "Agenda Especial": "Agenda Speciale",
    "Tatiana Penteado na Italia": "Tatiana Penteado in Portogallo",
    "18 e 19 de Julho": "18 e 19 Luglio",
    "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia": "Espaço Humana · Terapie, Estetica, Salute & Benessere",
    "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.": "Assicurati il tuo posto per sessioni esclusive di estetica avanzata e terapie integrative. Un'opportunità unica per una valutazione e un trattamento in presenza.",
    "Aproveite esta oportunidade única para realizar o seu atendimento personalizado e de estética avançada com a Dra. Tatiana Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.": "Approfitta di questa opportunità unica per un trattamento estetico avanzato e personalizzato con la dott.ssa Tatiana Penteado. I posti in presenza sono molto limitati per garantire il miglior supporto e risultati eccezionali.",
    "Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.": "Iscrizioni e prenotazioni online aperte direttamente tramite l'applicazione/sito Treatwell.",
    "Agendar no Treatwell": "Prenota su Treatwell",
    "Esclarecer dúvidas por WhatsApp": "Chiarire dubbi su WhatsApp",
    "Tirar dúvidas": "Risolvere dubbi",
    "Data e Período": "Data e Periodo",
    "Local dos Atendimentos": "Luogo di Trattamento",
    "Destaque e Credencial": "In Evidenza & Credenziali",
    "Participação no 1º Congresso de Medicina Integrativa Europa - Portugal": "Partecipazione al 1° Congresso di Medicina Integrativa Europa - Portogallo",
    "Terapias Integrativas": "Terapie Integrative",
    "Medicina Tradicional": "Medicina Tradizionale",
    "Chinesa & Bem-Estar": "Cinese & Benessere",
    "Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.": "Metodi integrativi e millenari per armonizzare mente e corpo, favorendo l'equilibrio energetico e la salute totale.",
    "Medicina Tradicional Chinesa MTC": "Medicina Tradizionale Cinese MTC",
    "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.": "Trattamento completo per armonizzare Mente, Corpo ed equilibrio energetico attraverso principi millenari.",
    "Auriculoterapia": "Auricoloterapia",
    "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.": "Terapia basata sulla stimolazione di punti specifici sull'orecchio, altamente specializzata in ansia e dimagrimento.",
    "Reflexologia": "Riflessologia",
    "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.": "Cure integrative e sollievo dalle tensioni corporee attraverso il massaggio e lo stimolo di precisi punti riflessi del piede.",
    "Cromopuntura": "Cromopuntura",
    "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.": "Terapia attraverso l'equilibrio dei colori 🌈. Trattamento non invasivo indicato per tutte le età, con particolare attenzione a bambini e anziani.",
    "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.": "Tecnica ancestrale che utilizza coppette a vuoto per rilasciare la fascia muscolare, alleviare i dolori del corpo ed eliminare le tossine accumulate.",
    "Bambuterapia": "Massaggio con Bambù",
    "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.": "Massaggio corpo che unisce manovre modellanti e rilassanti utilizando canne di bambù di diverse dimensioni.",
    "Pedras Quentes": "Pietre Calde",
    "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.": "Terapia geotermica profonda che utilizza pietre vulcaniche riscaldate per sciogliere lo stress, alleviare le tensioni e favorire il relax totale.",
    "Consulta de Medicina Tradicional Chinesa MTC": "Consulenza di Medicina Tradizionale Cinese MTC",
    "Sessão de Auriculoterapia": "Sessione di Auricoloterapia",
    "Sessão de Cromopuntura": "Sessione di Cromopuntura",
    "Sessão de Reflexologia": "Sessione di Riflessologia",
    "Terapia de Pedras Quentes": "Terapia con Pietre Calde",
    "Sob Consulta": "Su Richiesta",
    "Agendar Consulta": "Prenota Consulenza"
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  // Load language preference from localStorage if available (client-side only)
  useEffect(() => {
    const saved = localStorage.getItem("language-pref") as Language;
    if (saved && (saved === "pt" || saved === "en" || saved === "es" || saved === "fr" || saved === "it")) {
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
