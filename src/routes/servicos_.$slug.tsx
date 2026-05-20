import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services";
import { Check, ArrowLeft, ArrowRight, Clock, CalendarDays } from "lucide-react";
import { ContactMenu } from "@/components/site/ContactMenu";

export const Route = createFileRoute("/servicos_/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) {
      throw new Error("Serviço não encontrado");
    }
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? 'Serviço'} · Hidrolinfa Detox` },
      { name: "description", content: loaderData?.short ?? '' },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();

  return (
    <Layout>
      <section className="container-narrow py-20 md:py-28">
        <div className="mb-12">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Serviços
          </Link>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="lg:order-2">
            <div className="relative sticky top-32">
              <div className="absolute -inset-4 -z-10 bg-gold-soft/20" />
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[4/5] w-full object-cover border border-border/50"
              />
              <div className="absolute -bottom-6 -left-6 flex flex-col sm:flex-row gap-4">
                 <div className="bg-background border border-border p-4 sm:px-6 shadow-sm flex items-center gap-4">
                   <Clock className="h-5 w-5 text-gold" strokeWidth={1.5} />
                   <div>
                     <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Duração</p>
                     <p className="font-serif font-medium text-primary mt-0.5">{service.duration}</p>
                   </div>
                 </div>
                 <div className="bg-background border border-border p-4 sm:px-6 shadow-sm flex items-center gap-4 hidden sm:flex">
                   <CalendarDays className="h-5 w-5 text-gold" strokeWidth={1.5} />
                   <div>
                     <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Recomendação</p>
                     <p className="font-serif font-medium text-primary mt-0.5">{service.sessionsRecommendation}</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center lg:order-1 pt-6 lg:pt-0">
            <h1 className="font-serif text-4xl leading-[1.1] text-primary md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-8 text-xl font-serif italic text-gold leading-relaxed">
              {service.description}
            </p>
            
            <div className="mt-10 space-y-6 border-l-2 border-gold-soft/30 pl-6">
               {service.longDescription.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
               ))}
            </div>
            
            <div className="mt-16 grid gap-12 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                   <span className="h-px w-6 bg-gold"></span> Indicações
                </h3>
                <ul className="space-y-4">
                  {service.indications.map((ind) => (
                    <li key={ind} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0"></span>
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                   <span className="h-px w-6 bg-gold"></span> Benefícios
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 text-gold shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border/50 pt-10">
              <ContactMenu variant="primary" label="Agendar agora" />
              <Link
                to="/precos"
                hash={service.slug}
                className="inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Ver Tabela de Preços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Complemente o seu tratamento"
            title={<>Potencialize resultados com os nossos <em className="text-gold">packs</em>.</>}
            description="Muitos dos nossos tratamentos podem ser combinados para criar uma experiência ainda mais transformadora. Conheça outras opções que complementam a sua escolha."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 2)
              .map((rs) => (
                <article key={rs.slug} className="group relative border border-border/50 bg-background p-6 transition-all hover:border-gold/40 hover:shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="h-48 w-full sm:h-32 sm:w-28 shrink-0 overflow-hidden bg-muted">
                      <img src={rs.image} alt={rs.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-serif text-xl text-primary">{rs.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{rs.short}</p>
                      <Link to="/servicos/$slug" params={{ slug: rs.slug }} className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold hover:text-primary transition-colors">
                        Saber mais detalhes <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
