import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services";
import { Check } from "lucide-react";
import { ContactMenu } from "@/components/site/ContactMenu";
import { useTranslation } from "@/hooks/useTranslation";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços · Hidrolinfa Detox" },
      { name: "description", content: "HIFU facial e corporal, drenagem linfática, ventosaterapia, massagens e mais — tratamentos de estética e bem-estar." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="container-narrow py-20 md:py-24">
        <SectionHeading
          eyebrow="Serviços"
          align="center"
          title={<>Tratamentos para corpo, rosto e <em className="text-gold">alma</em>.</>}
          description="Cada protocolo é construído com tecnologia atualizada e olhar personalizado, para que o resultado seja sentido — e visto."
        />
      </section>

      {/* DIFFERENTIALS */}
      <section className="border-y border-border/50 bg-cream py-12 md:py-16">
        <div className="container-narrow grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { title: "Alta Tecnologia", text: "Equipamentos avançados" },
            { title: "Personalização", text: "Protocolos adaptados a si" },
            { title: "Conforto Absoluto", text: "Ambiente relaxante" },
            { title: "Acompanhamento", text: "Foco nos resultados" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <h3 className="font-serif text-lg text-primary">{item.title}</h3>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow space-y-24 py-24 md:space-y-32 md:py-32">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className={`grid scroll-mt-28 gap-12 md:grid-cols-2 md:gap-20 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 bg-gold-soft/30" />
                <img src={s.image} alt={s.title} loading="lazy" width={1024} height={1024} className="aspect-[4/5] h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold">0{i + 1} — Tratamento</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-primary md:text-5xl">{s.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-8 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border/50 pt-8">
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                >
                  Saber mais detalhes
                </Link>
                <ContactMenu variant="outline" label="Agendar agora" />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* TERAPIAS INTEGRATIVAS & MTC */}
      <section className="bg-background py-24 md:py-32 border-t border-border/50">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={t("Terapias Integrativas")}
            title={<>{t("Medicina Tradicional")} <em className="text-gold">{t("Chinesa & Bem-Estar")}</em></>}
            description={t("Métodos integrativos e milenares para harmonizar mente e corpo, promovendo equilíbrio energético e saúde integral.")}
          />
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Medicina Tradicional Chinesa MTC",
                desc: "Tratamento completo para harmonizar Mente, Corpo e equilíbrio energético através de princípios milenares.",
                icon: "☯️"
              },
              {
                title: "Auriculoterapia",
                desc: "Terapia baseada na estimulação de pontos específicos na orelha, altamente especializada em ansiedade e emagrecimento.",
                icon: "👂"
              },
              {
                title: "Reflexologia",
                desc: "Cuidados integrativos e alívio de tensões de todo o corpo através da massagem e estímulo de pontos podais precisos.",
                icon: "👣"
              },
              {
                title: "Cromopuntura",
                desc: "Terapia através do equilíbrio das cores 🌈. Um tratamento não-invasivo indicado para todas as idades, com foco especial em crianças e idosos.",
                icon: "🌈"
              },
              {
                title: "Ventosaterapia",
                desc: "Técnica ancestral que utiliza copos de vácuo para libertar a fáscia muscular, aliviar dores corporais e eliminar toxinas acumuladas.",
                icon: "🔥"
              },
              {
                title: "Bambuterapia",
                desc: "Massagem corporal que combina manobras modeladoras e relaxantes utilizando hastes de bambu de diferentes tamanhos.",
                icon: "🎍"
              },
              {
                title: "Pedras Quentes",
                desc: "Terapia geotermal profunda que utiliza pedras vulcânicas aquecidas para derreter o stress, aliviar tensões e promover relaxamento total.",
                icon: "🪨"
              }
            ].map((therapy, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col items-start border border-border/60 bg-cream p-8 transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border/50 text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {therapy.icon}
                  </div>
                  <h4 className="font-serif text-xl text-primary font-medium">{t(therapy.title)}</h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(therapy.desc)}</p>
                <div className="mt-6 pt-4 border-t border-border/40 w-full flex justify-between items-center">
                  <ContactMenu 
                    variant="link" 
                    label={t("Agendar Consulta")} 
                    className="p-0 text-gold text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors cursor-pointer" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVALUATION CTA */}
      <section className="border-t border-border/50 bg-cream py-24 md:py-32">
        <div className="container-narrow">
          <div className="mx-auto flex max-w-4xl flex-col items-center border border-border/60 bg-background px-6 py-16 text-center md:px-16 md:py-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Avaliação Personalizada</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-primary md:text-5xl">
              Não sabe qual o <em className="text-gold">tratamento</em> ideal para si?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Agende uma consulta de avaliação. Analisamos as suas necessidades específicas e desenhamos um plano de tratamento 100% à medida, focado nos seus objetivos.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactMenu variant="primary" label="Agendar Avaliação" />
              <Link to="/contactos" className="inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Tirar dúvidas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
