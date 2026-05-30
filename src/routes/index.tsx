import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Check, Sparkles, Leaf, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/img hero.png";
import portrait from "@/assets/portrait.jpg";
import { services } from "@/lib/services";
import { ContactMenu } from "@/components/site/ContactMenu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thatiana Cardoso · Estética & Bem-Estar em Portugal" },
      {
        name: "description",
        content:
          "Tratamentos de estética avançada e bem-estar em Portugal e Europa por Thatiana Cardoso: HIFU, drenagem linfática, ventosaterapia e mais.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-narrow grid gap-14 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Lisboa · Caldas da Rainha · Europa
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              Beleza que nasce do <em className="text-gold">cuidado</em> e do equilíbrio.
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Sou Thatiana Cardoso, especialista em estética avançada e terapias
              integrativas. Um espaço dedicado a revelar a sua melhor versão, com
              protocolos exclusivos e atendimento personalizado.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/servicos"
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Conheça os tratamentos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
              <ContactMenu variant="link" label="Marcar consulta" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gold-soft/30" />
            <img
              src={heroImg}
              alt="Espaço de estética Thatiana Cardoso"
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
            { icon: Sparkles, title: "Estética avançada", text: "Tecnologia de ponta com protocolos personalizados." },
            { icon: Leaf, title: "Terapias naturais", text: "Métodos integrativos para corpo e mente." },
            { icon: HeartHandshake, title: "Atendimento humano", text: "Acompanhamento atento em cada sessão." },
          ].map((p) => (
            <div key={p.title} className="flex flex-col items-start">
              <p.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
              <h3 className="mt-5 font-serif text-2xl text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="flex items-end justify-between gap-10">
            <SectionHeading
              eyebrow="Tratamentos"
              title={<>Protocolos pensados para <em className="text-gold">si</em>.</>}
              description="Cada tratamento é desenhado para responder às suas necessidades específicas, com técnicas e equipamentos de excelência."
            />
            <Link to="/servicos" className="hidden text-sm tracking-wide text-primary hover:text-gold md:inline-flex md:items-center md:gap-2">
              Ver todos <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
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
                <h3 className="mt-6 font-serif text-2xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <Link to="/servicos" hash={s.slug} className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                  Saber mais <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
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
              <img src={portrait} alt="Thatiana Cardoso" loading="lazy" width={1080} height={1440} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionHeading
              eyebrow="Sobre"
              title={<>Uma trajectória dedicada à <em className="text-gold">arte</em> do cuidar.</>}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Com formação em estética avançada e terapias integrativas, atuo em
              Portugal e em diversos países da Europa, levando técnicas atualizadas
              e um olhar atento a cada cliente.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Formação contínua em estética avançada",
                "Atendimento em Lisboa, Amadora e Caldas da Rainha",
                "Workshops e formações para profissionais",
                "Protocolos personalizados e resultados visíveis",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/sobre" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary hover:text-gold">
              Conhecer a minha história <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border/50 pt-8 sm:grid-cols-3">
              {[
                { n: "+10", l: "Anos de experiência" },
                { n: "+1k", l: "Clientes satisfeitas" },
                { n: "3", l: "Espaços de atendimento" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-serif text-3xl text-gold">{s.n}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHOD / PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="O nosso método"
            title={<>Um caminho <em className="text-gold">seguro</em> para os seus resultados.</>}
            description="Acreditamos que cada pessoa é única. O nosso processo garante que cada tratamento é perfeitamente adaptado a si."
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
                <h3 className="mt-6 font-serif text-xl text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Depoimentos"
            title={<>O que dizem os nossos <em className="text-gold">clientes</em></>}
            description="Experiências reais de quem confiou em nós para cuidar do seu bem-estar e da sua auto-estima."
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
            ].map((t, i) => (
              <div key={i} className="flex flex-col border border-border/60 bg-cream p-8">
                <p className="flex-1 text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-8 border-t border-border/50 pt-4">
                  <p className="font-serif text-lg text-primary">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-gold">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32 border-y border-border/50">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-16">
            <div className="md:w-1/3">
              <SectionHeading
                eyebrow="FAQ"
                title={<>Dúvidas <em className="text-gold">frequentes</em></>}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Encontre aqui as respostas às questões mais comuns sobre os nossos tratamentos e processos. Se não encontrar o que procura, não hesite em contactar-nos.
              </p>
              <div className="mt-8">
                <ContactMenu variant="link" label="Falar connosco" />
              </div>
            </div>
            
            <div className="mt-12 md:mt-0 md:w-2/3">
              <div className="grid gap-6">
                {[
                  {
                    q: "Os tratamentos são dolorosos?",
                    a: "A grande maioria dos nossos protocolos são indolores ou provocam apenas um ligeiro desconforto temporário. Priorizamos sempre o seu bem-estar durante cada sessão.",
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
                    <h4 className="font-serif text-lg text-primary">{faq.q}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
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
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Agende a sua consulta</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-primary md:text-5xl">
              Comece hoje a sua jornada de <em className="text-gold">bem-estar</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Avaliação personalizada e plano de tratamento desenhado especificamente para si.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactMenu variant="primary" />
              <Link to="/contactos" className="inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Formulário de contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
