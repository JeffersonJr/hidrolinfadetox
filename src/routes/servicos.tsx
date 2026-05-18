import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services";
import { Check } from "lucide-react";
import { ContactMenu } from "@/components/site/ContactMenu";

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
  return (
    <Layout>
      <section className="container-narrow py-20 md:py-28">
        <SectionHeading
          eyebrow="Serviços"
          align="center"
          title={<>Tratamentos para corpo, rosto e <em className="text-gold">alma</em>.</>}
          description="Cada protocolo é construído com tecnologia atualizada e olhar personalizado, para que o resultado seja sentido — e visto."
        />
      </section>

      <section className="container-narrow space-y-24 pb-24 md:space-y-32 md:pb-32">
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
                  className="inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                >
                  Saber mais detalhes
                </Link>
                <ContactMenu variant="outline" label="Agendar agora" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
