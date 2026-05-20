import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactMenu } from "@/components/site/ContactMenu";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Tabela de Preços · Thatiana Cardoso" },
      { name: "description", content: "Tabela de preços de massagens, tratamentos faciais e packs do Espaço Thatiana Cardoso." },
    ],
  }),
  component: PricesPage,
});

const mainTreatments = [
  { id: "hifu", label: "HIFU Facial e Corporal", value: "Desde 150,00 €" },
  { id: "ventosaterapia", label: "Ventosaterapia", value: "40,00 €" },
  { id: "drenagem-linfatica", label: "Drenagem Linfática", value: "45,00 €" },
];

const massages = [
  { label: "Massagem Relaxante Muscular", value: "50,00 €" },
  { label: "Massagem Modeladora", value: "55,00 €" },
  { label: "Massagem Só Costas (30 min)", value: "30,00 €" },
  { label: "Massagem de Reflexologia (45 min)", value: "38,00 €" },
  { label: "Massagem com Velas Quentes", value: "75,00 €" },
  { label: "Ritual de Massagem", value: "85,00 €" },
  { label: "Massagem com Óleos Essenciais", value: "55,00 €" },
];

const packs = [
  {
    id: "pack-1",
    title: "I — Hidratação Facial + Radiofrequência",
    description: "Ideal para uma pele iluminada e firme",
    rows: [
      { label: "3 Sessões", value: "110,00 €" },
      { label: "6 Sessões", value: "200,00 €" },
      { label: "12 Sessões", value: "360,00 €" },
    ],
  },
  {
    id: "pack-2",
    title: "II — Peeling Hollywood",
    description: "Renovação celular e brilho imediato",
    rows: [
      { label: "3 Sessões", value: "135,00 €" },
      { label: "6 Sessões", value: "240,00 €" },
      { label: "12 Sessões", value: "400,00 €" },
    ],
  },
  {
    id: "pack-3",
    title: "III — Drenagem Linfática",
    description: "Resultados duradouros contra a retenção",
    rows: [
      { label: "3 Sessões", value: "130,00 €" },
      { label: "6 Sessões", value: "240,00 €" },
      { label: "12 Sessões", value: "450,00 €" },
    ],
  },
];

function PriceRow({ label, value, id }: { label: string; value: string; id?: string }) {
  return (
    <div id={id} className="group flex items-baseline gap-4 border-b border-dashed border-border py-4 scroll-mt-32 transition-colors target:bg-gold-soft/10 target:px-4 target:-mx-4 target:border-gold/50 rounded-sm">
      <span className="text-sm font-medium text-foreground md:text-base">{label}</span>
      <span className="flex-1 border-b border-dotted border-border/60" aria-hidden />
      <span className="font-serif text-lg font-medium text-primary md:text-xl">{value}</span>
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
          title={<>Investimento no seu <em className="text-gold">bem-estar</em></>}
          description="HIFU Facial e Corporal · Massagens · Packs personalizados. Protocolos de excelência acessíveis para cuidar de si."
        />

        <div className="mx-auto mt-20 max-w-4xl">
          {/* ASSINATURA */}
          <h3 className="text-center font-serif text-2xl text-primary">
            <span className="gold-divider align-middle" /> <span className="px-4 font-medium uppercase tracking-[0.3em] text-sm text-gold">Tratamentos de Assinatura</span> <span className="gold-divider align-middle" />
          </h3>
          <div className="mt-10 mx-auto max-w-3xl">
            {mainTreatments.map((t) => <PriceRow key={t.id} id={t.id} label={t.label} value={t.value} />)}
          </div>

          {/* MASSAGENS */}
          <h3 className="mt-24 text-center font-serif text-2xl text-primary">
            <span className="gold-divider align-middle" /> <span className="px-4 font-medium uppercase tracking-[0.3em] text-sm text-gold">Massagens e Relaxamento</span> <span className="gold-divider align-middle" />
          </h3>
          <div className="mt-10 mx-auto max-w-3xl">
            {massages.map((m) => <PriceRow key={m.label} label={m.label} value={m.value} />)}
          </div>

          {/* PACKS / PROGRAMAS */}
          <h3 className="mt-32 text-center font-serif text-3xl text-primary">
            <span className="gold-divider align-middle" /> <span className="px-4 font-medium uppercase tracking-[0.3em] text-sm text-gold">Programas e Packs</span> <span className="gold-divider align-middle" />
          </h3>
          <p className="mt-4 text-center text-muted-foreground text-sm max-w-2xl mx-auto">
            Ao optar por um programa contínuo, não só poupa no valor da sessão, como garante resultados muito mais expressivos e duradouros.
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packs.map((p) => (
              <div key={p.id} id={p.id} className="flex flex-col border border-border/60 bg-cream p-8 text-center transition-all hover:border-gold/50 scroll-mt-32 target:border-gold target:shadow-sm">
                <h4 className="font-serif text-xl font-medium text-primary">{p.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{p.description}</p>
                
                <div className="mt-10 flex-1 space-y-4">
                  {p.rows.map((r) => (
                    <div key={r.label} className="flex justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-sm font-medium text-foreground">{r.label}</span>
                      <span className="font-serif text-lg font-medium text-primary">{r.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-border/50">
                  <ContactMenu variant="outline" label="Agendar Pack" className="w-full justify-center" />
                </div>
              </div>
            ))}
          </div>

          {/* FAQS E CONDIÇÕES */}
          <div className="mt-32 bg-background border border-border p-8 md:p-12">
            <h3 className="font-serif text-2xl text-primary mb-8 border-b border-border/50 pb-4">Condições e Pagamentos</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-serif text-lg font-medium text-primary">Formas de Pagamento</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Aceitamos pagamentos em numerário, MBWay e transferência bancária. O IVA está incluído em todos os preços apresentados à taxa legal em vigor.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-primary">Política dos Packs</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  O pagamento dos packs pode ser dividido, sendo 50% pago na 1ª sessão e o restante na 2ª sessão. Os packs têm validade de 6 meses após a compra.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-primary">Cancelamentos</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pedimos gentilmente que qualquer alteração ou cancelamento seja comunicado com 24 horas de antecedência para reorganização da agenda.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-primary">Precisa de Ajuda?</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Caso tenha um objetivo específico não listado aqui, fale connosco. Desenhamos protocolos personalizados e à medida das suas necessidades.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
}
