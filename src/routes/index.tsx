import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Check, Sparkles, Leaf, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";
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
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
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
              <Link to="/contactos" className="inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Formulário de contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
