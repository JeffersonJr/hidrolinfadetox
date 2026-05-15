import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Tabela de Preços · Thatiana Cardoso" },
      { name: "description", content: "Tabela de preços de massagens, tratamentos faciais e packs do Espaço Thatiana Cardoso." },
    ],
  }),
  component: PricesPage,
});

const massages = [
  ["Massagem Relaxante Muscular", "50,00 €"],
  ["Massagem Modeladora", "55,00 €"],
  ["Massagem Só Costas (30 min)", "30,00 €"],
  ["Drenagem Linfática", "45,00 €"],
  ["Massagem de Reflexologia (45 min)", "38,00 €"],
  ["Massagem com Velas Quentes", "75,00 €"],
  ["Ritual de Massagem", "85,00 €"],
  ["Massagem com Óleos Essenciais", "55,00 €"],
] as const;

const packs = [
  {
    title: "I — Hidratação Facial + Radiofrequência",
    rows: [
      ["3 Sessões", "110,00 €"],
      ["6 Sessões", "200,00 €"],
      ["12 Sessões", "360,00 €"],
    ],
  },
  {
    title: "II — Peeling Hollywood",
    rows: [
      ["3 Sessões", "135,00 €"],
      ["6 Sessões", "240,00 €"],
      ["12 Sessões", "400,00 €"],
    ],
  },
  {
    title: "III — Drenagem Linfática",
    rows: [
      ["3 Sessões", "130,00 €"],
      ["6 Sessões", "240,00 €"],
      ["12 Sessões", "450,00 €"],
    ],
  },
];

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-dashed border-border py-4">
      <span className="text-sm text-foreground md:text-base">{label}</span>
      <span className="flex-1 border-b border-dotted border-border/60" aria-hidden />
      <span className="font-serif text-lg text-primary md:text-xl">{value}</span>
    </div>
  );
}

function PricesPage() {
  return (
    <Layout>
      <section className="container-narrow py-20 md:py-28">
        <SectionHeading
          eyebrow="Tabela de Preços"
          align="center"
          title={<>Espaço <em className="text-gold">Humana</em></>}
          description="HIFU Facial e Corporal · Massagens · Packs personalizados. IVA incluído à taxa em vigor."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center font-serif text-2xl text-primary">
            <span className="gold-divider align-middle" /> <span className="px-4 uppercase tracking-[0.3em] text-sm text-gold">Massagens</span> <span className="gold-divider align-middle" />
          </h3>
          <div className="mt-8">
            {massages.map(([l, v]) => <PriceRow key={l} label={l} value={v} />)}
          </div>

          <h3 className="mt-20 text-center font-serif text-2xl text-primary">
            <span className="gold-divider align-middle" /> <span className="px-4 uppercase tracking-[0.3em] text-sm text-gold">Packs</span> <span className="gold-divider align-middle" />
          </h3>

          <div className="mt-10 space-y-12">
            {packs.map((p) => (
              <div key={p.title}>
                <h4 className="font-serif text-xl text-primary">{p.title}</h4>
                <div className="mt-4">
                  {p.rows.map(([l, v]) => <PriceRow key={l} label={l} value={v} />)}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            IVA incluído à taxa em vigor
          </p>
        </div>
      </section>
    </Layout>
  );
}
