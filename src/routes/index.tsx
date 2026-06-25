import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, ArrowUpRight, Check, MapPin, Instagram, Facebook, GraduationCap, Users, Sparkles, Calendar, MessageCircle, Leaf, HeartHandshake, Award } from "lucide-react";
import heroImg from "@/assets/img hero.png";
import portrait from "@/assets/portrait.png";
import { services } from "@/lib/services";
import { ContactMenu } from "@/components/site/ContactMenu";
import benefitsImg from "@/assets/logo.svg"; // PLACEHOLDER: Mudar para Group 140.svg quando o colocar na pasta
import { useTranslation, Translate } from "@/hooks/useTranslation";
import { EventModal } from "@/components/site/EventModal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tatiane Penteado · Estética & Bem-Estar em Portugal" },
      {
        name: "description",
        content:
          "Tratamentos de terapias integrativas, bem-estar e estética avançada em Portugal e Europa por Tatiane Penteado: drenagem linfática, ventosaterapia, HIFU e mais.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <EventModal />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-narrow grid gap-14 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
              {t("Lisboa · Caldas da Rainha · Europa")}
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              <Translate>O equilíbrio começa de dentro para fora</Translate>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("Sou Tatiane Penteado, especialista em terapias integrativas e estética avançada. Um espaço dedicado a revelar a sua melhor versão, com protocolos exclusivos e atendimento personalizado.")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ContactMenu variant="primary" label={t("Agendar")} />
              <a 
                href="https://wa.me/351915943309?text=Gostaria%20de%20saber%20mais%20sobre%20a%20venda%20da%20máquina%20Hidrolinfa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center gap-3 border border-gold bg-gold-soft/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                {t("Comprar Máquina Hidrolinfa")}
              </a>
              <Link
                to="/servicos"
                className="group inline-flex items-center gap-3 border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition-all hover:border-gold hover:text-gold"
              >
                {t("Serviços")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gold-soft/30" />
            <img
              src={heroImg}
              alt="Espaço de estética Tatiane Penteado"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-cream py-16">
        <div className="container-narrow grid gap-10 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Terapias naturais", text: "Métodos integrativos para corpo e mente." },
            { icon: HeartHandshake, title: "Atendimento humano", text: "Acompanhamento atento em cada sessão." },
            { icon: Sparkles, title: "Estética avançada", text: "Tecnologia de ponta com protocolos personalizados." },
          ].map((p) => (
            <div key={p.title} className="flex flex-col items-start">
              <p.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
              <h3 className="mt-5 font-serif text-2xl text-primary">{t(p.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.text)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA DA TRAJETÓRIA PROFISSIONAL */}
      <section className="py-20 md:py-24 bg-background border-y border-border/50">
        <div className="container-narrow px-6 md:px-16">
           <SectionHeading
             eyebrow={t("Trajetória Profissional")}
             align="center"
             title={<><Translate>Momentos de </Translate><em className="text-gold"><Translate>Excelência</Translate></em></>}
             description={t("Registos de encontros, formações e congressos que enriquecem a nossa prática, como a participação ao lado do Dr. Peter Mendel.")}
           />
           <div className="mt-16 relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <CarouselItem key={i} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/4">
                      <div className="aspect-square bg-muted/50 border border-border/60 flex flex-col items-center justify-center text-center p-4 transition-colors hover:border-gold/60 cursor-pointer">
                         <Award className="h-6 w-6 text-gold mb-2 opacity-50" />
                         <p className="text-[10px] uppercase text-muted-foreground">{t("Foto da Trajetória")} {i}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 border-border/60 text-muted-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-colors h-10 w-10" />
                <CarouselNext className="hidden md:flex -right-12 border-border/60 text-muted-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-colors h-10 w-10" />
              </Carousel>
           </div>
        </div>
      </section>

      {/* AGENDA ESPECIAL / DOBRA PORTUGAL */}
      <section className="py-20 md:py-24 border-b border-border/50 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gold-soft/10 rounded-full blur-3xl opacity-60" />
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

            {/* Lado Esquerdo - Chamada Principal e Data */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold-soft/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold w-fit">
                <Sparkles className="h-3 w-3 animate-pulse" />
                {t("Agenda Especial")}
              </div>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-primary md:text-5xl">
                {t("Tatiane Penteado na Italia")}
              </h2>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream border border-gold-soft/30 text-gold shrink-0">
                    <Calendar className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Data e Período")}</p>
                    <p className="font-serif text-xl font-medium text-primary mt-0.5">{t("18 e 19 de Julho")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream border border-gold-soft/30 text-gold shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Local dos Atendimentos")}</p>
                    <p className="font-serif text-lg font-medium text-primary mt-0.5">
                      {t("Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Bologna, Italia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Descrição e Ações */}
            <div className="lg:col-span-7 flex flex-col justify-center border-t border-border/50 pt-8 lg:border-t-0 lg:border-l lg:border-border/50 lg:pt-0 lg:pl-12">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("Aproveite esta oportunidade única para realizar o seu atendimento personalizado de terapias integrativas e estética avançada com a Terapeuta credenciada Tatiane Penteado. Vagas presenciais limitadas para garantir o máximo acompanhamento e resultados excecionais.")}
              </p>

              <p className="mt-4 text-sm font-medium text-primary font-serif italic">
                {t("Inscrições e agendamentos online abertos diretamente através do aplicativo/site Treatwell.")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.treatwell.pt/estabelecimento/espaco-humana-terapias-estetica-saude-bem-estar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary min-h-[44px] cursor-pointer"
                >
                  {t("Agendar no Treatwell")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </a>

                <a
                  href={`https://wa.me/351961551592?text=${encodeURIComponent(
                    "Olá! Gostaria de obter mais informações sobre os atendimentos da Tatiane na Italia nos dias 18 e 19 de Julho."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:border-gold hover:text-gold min-h-[44px] cursor-pointer bg-background/50"
                >
                  <MessageCircle className="h-4 w-4 text-muted-foreground group-hover:text-gold" strokeWidth={1.5} />
                  {t("Tirar dúvidas")}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="flex items-end justify-between gap-10">
            <SectionHeading
              eyebrow={t("Tratamentos")}
              title={<><Translate>Protocolos pensados para si.</Translate></>}
              description={t("Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência.")}
            />
            <Link to="/servicos" className="hidden text-sm tracking-wide text-primary hover:text-gold md:inline-flex md:items-center md:gap-2">
              {t("Ver todos")} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.short)}</p>
                <Link to="/servicos" hash={s.slug} className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                  {t("Saber mais")} <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-narrow grid gap-14 md:grid-cols-5 md:gap-20">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-gold-soft/30" />
              <img src={portrait} alt="Tatiane Penteado" loading="lazy" width={1080} height={1440} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionHeading
              eyebrow="Sobre"
              title={<><Translate>Cuidar é a minha vocação.</Translate></>}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {t("A verdadeira saúde e vitalidade começam no nosso interior. É com esta convicção que dedico o meu trabalho às Terapias Integrativas, à Medicina Tradicional Chinesa (MTC) e à Osteopatia, promovendo um profundo reequilíbrio do organismo de dentro para fora.")}
              </p>
              <p>
                {t("A beleza exterior e a estética avançada surgem assim não como o foco único, mas como a consequência natural e visível de um corpo curado, desintoxicado e em plena harmonia. Cada protocolo que desenvolvo respeita a individualidade biológica, garantindo resultados sustentáveis e transformadores.")}
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { 
                  i: GraduationCap, 
                  t: "Forte base em Terapias Integrativas, MTC e Osteopatia como pilares do bem-estar." 
                },
                { 
                  i: Leaf, 
                  t: "Abordagem holística: a estética avançada como reflexo da saúde interior." 
                },
                { 
                  i: Users, 
                  t: "Atendimento humano, focado na raiz das queixas e não apenas nos sintomas visíveis." 
                },
                { 
                  i: MapPin, 
                  t: "Atendimento presencial em Lisboa, Amadora e Caldas da Rainha." 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-sm border border-gold-soft/30 bg-background/50 p-4 transition-colors hover:border-gold/60">
                  <item.i className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed text-foreground">
                    {t(item.t)}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/sobre" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary hover:text-gold">
              {t("Conhecer a minha história")} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border/50 pt-8 sm:grid-cols-3">
              {[
                { n: "+30", l: "Anos de experiência" },
                { n: "+1k", l: "Clientes satisfeitas" },
                { n: "3", l: "Espaços de atendimento" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-serif text-3xl text-gold">{s.n}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{t(s.l)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* PRESENÇA NA EUROPA (FLAGS) */}
      <section className="bg-background py-24 md:py-32 border-b border-border/50">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={t("Atendimento Internacional")}
            title={<>{t("Presença na")} <em className="text-gold">{t("Europa")}</em></>}
            description={t("Levamos conhecimento com excelência e referência no que há de mais avançado nos cuidados, saúde e bem-estar. Agenda um horário conosco.")}
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Portugal", flag: "https://flagcdn.com/w160/pt.png", desc: "Lisboa, Porto, Algarve e Caldas da Rainha. Tratamentos faciais e corporais com acompanhamento premium." },
              { name: "França", flag: "https://flagcdn.com/w160/fr.png", desc: "Paris e Lyon. Consultas exclusivas de estética avançada e rejuvenescimento." },
              { name: "Espanha", flag: "https://flagcdn.com/w160/es.png", desc: "Madrid e Barcelona. Drenagem linfática integrativa e protocolos pós-operatórios." },
              { name: "Bélgica", flag: "https://flagcdn.com/w160/be.png", desc: "Bruxelas. Terapias de desintoxicação e equilíbrio corporal completo." },
              { name: "Croácia", flag: "https://flagcdn.com/w160/hr.png", desc: "Zagreb. Protocolos exclusivos de estimulação e revitalização da pele." },
              { name: "Países Baixos", flag: "https://flagcdn.com/w160/nl.png", desc: "Amsterdã. Programas personalizados de Hidrolinfa e desintoxicação iónica." },
              { name: "Itália", flag: "https://flagcdn.com/w160/it.png", desc: "Roma e Milão. Tratamentos corporais esculpidos e terapias de relaxamento profundas." },
              { name: "Alemanha", flag: "https://flagcdn.com/w160/de.png", desc: "Berlim e Munique. Tecnologia de ponta para resultados estéticos de excelência." },
              { name: "Reino Unido", flag: "https://flagcdn.com/w160/gb.png", desc: "Londres. Consultas personalizadas e acompanhamento dedicado de alta performance." }
            ].map((c) => (
              <div
                key={c.name}
                className="group relative flex flex-col items-start border border-border/60 bg-cream p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-md border border-border/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={c.flag}
                      alt={c.name}
                      className="h-10 w-15 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-primary">{t(c.name)}</h4>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t(c.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD / PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={t("O nosso método")}
            title={<><Translate>Um caminho seguro para os seus resultados.</Translate></>}
            description={t("Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si.")}
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-border/50" />
            {[
              { step: "01", title: "Avaliação Inicial", text: "Uma conversa detalhada para entender as suas necessidades, historial clínico e objetivos." },
              { step: "02", title: "Plano à Medida", text: "Desenho de um protocolo de tratamentos personalizado, combinando as melhores técnicas para si." },
              { step: "03", title: "Acompanhamento", text: "Monitorização contínua dos resultados e ajustes no plano para garantir a máxima eficácia e satisfação." },
            ].map((p, i) => (
              <div key={i} className="relative flex flex-col items-start bg-background md:px-6 md:-mx-6">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream font-serif text-2xl text-gold border border-border/50 shadow-sm">{p.step}</span>
                <h3 className="mt-6 font-serif text-xl text-primary">{t(p.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (Oculto temporariamente) */}
      {/*
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={t("Depoimentos")}
            title={<>{t("O que dizem os nossos")} <em className="text-gold">{t("clientes")}</em></>}
            description={t("Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima.")}
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                text: "Profissionalismo incrível. Fiz o tratamento de HIFU e os resultados foram visíveis logo na primeira sessão. Recomendo de olhos fechados!",
                name: "Maria Santos",
                service: "HIFU Facial",
              },
              {
                text: "A drenagem linfática com a Thatiana é um momento único. Sinto-me sempre muito mais leve e desinchada após cada sessão.",
                name: "Ana Pereira",
                service: "Drenagem Linfática",
              },
              {
                text: "As sessões de ventosaterapia aliviaram imenso as minhas dores nas costas e tensão acumulada. O espaço é muito relaxante.",
                name: "João Martins",
                service: "Ventosaterapia",
              },
            ].map((tItem, i) => (
              <div key={i} className="flex flex-col border border-border/60 bg-cream p-8">
                <p className="flex-1 text-sm italic leading-relaxed text-muted-foreground">"{t(tItem.text)}"</p>
                <div className="mt-8 border-t border-border/50 pt-4">
                  <p className="font-serif text-lg text-primary">{tItem.name}</p>
                  <p className="text-xs uppercase tracking-widest text-gold">{t(tItem.service)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32 border-y border-border/50">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-16">
            <div className="md:w-1/3">
              <SectionHeading
                eyebrow="FAQ"
                title={<>{t("Dúvidas")} <em className="text-gold">{t("frequentes")}</em></>}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {t("Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.")}
              </p>
              <div className="mt-8">
                <ContactMenu variant="link" label={t("Falar connosco")} />
              </div>
            </div>

            <div className="mt-12 md:mt-0 md:w-2/3">
              <div className="grid gap-6">
                {[
                  {
                    q: "Os tratamentos são dolorosos?",
                    a: "A grande maioria dos nossos protocols são indolores ou provocam apenas um ligeiro desconforto temporário. Priorizamos sempre o seu bem-estar durante cada sessão.",
                  },
                  {
                    q: "Quantas sessões são necessárias para ver resultados?",
                    a: "Depende muito do tratamento e do organismo de cada pessoa. Alguns tratamentos como a Drenagem Linfática oferecem resultados imediatos, enquanto outros requerem um plano de 3 a 6 sessões.",
                  },
                  {
                    q: "Existe algum tempo de recuperação?",
                    a: "A maioria dos nossos tratamentos não-invasivos não exige tempo de recuperação (downtime). Pode retomar as suas atividades diárias normais logo após a sessão.",
                  },
                  {
                    q: "Os produtos utilizados são seguros?",
                    a: "Sim, utilizamos apenas produtos de alta qualidade, certificados e testados dermatologicamente, adequados até para as peles mais sensíveis.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-border/60 pb-6 last:border-0 last:pb-0">
                    <h4 className="font-serif text-lg text-primary">{t(faq.q)}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(faq.a)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="border border-border bg-background px-8 py-16 text-center md:px-16 md:py-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("Agende a sua consulta")}</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-primary md:text-5xl">
              <Translate>Comece hoje a sua jornada de bem-estar.</Translate>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t("Avaliação personalizada e plano de tratamento desenhado especificamente para si.")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactMenu variant="primary" label={t("Marcar consulta")} />
              <a 
                href="https://wa.me/351915943309?text=Gostaria%20de%20saber%20mais%20sobre%20a%20venda%20da%20máquina%20Hidrolinfa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                {t("Comprar Máquina Hidrolinfa")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
