import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services";
import { Check, ArrowLeft } from "lucide-react";
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
      { title: `${loaderData.title} · Hidrolinfa Detox` },
      { name: "description", content: loaderData.short },
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

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-gold-soft/30" />
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-4xl leading-[1.1] text-primary md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            
            <div className="mt-10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold mb-6">Benefícios do tratamento</h3>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-foreground">
                    <Check className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-border/50 pt-10">
              <ContactMenu variant="primary" label="Agendar agora" />
              <Link
                to="/precos"
                className="inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Ver Tabela de Preços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
