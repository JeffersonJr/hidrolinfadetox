import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Check, GraduationCap, Award, Sparkles, Heart, Globe2, Quote } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { useTranslation } from "@/hooks/useTranslation";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre · Tatiana Penteado" },
      { name: "description", content: "Conheça Tatiana Penteado — especialista em terapias integrativas e estética avançada em Portugal e Europa." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2010",
    title: "Os primeiros passos",
    text: "Início da formação em terapias integrativas, massoterapia e estética, com foco no cuidado humanizado.",
  },
  {
    year: "2013",
    title: "Especialização em terapias manuais",
    text: "Aprofundamento em drenagem linfática, massagem modeladora e técnicas de bem-estar integrativo.",
  },
  {
    year: "2016",
    title: "Estética avançada e tecnologia",
    text: "Certificações em HIFU facial e corporal, radiofrequência, criolipólise e fotorejuvenescimento.",
  },
  {
    year: "2019",
    title: "Mudança para Portugal",
    text: "Início da atuação no mercado europeu, com clínica própria em Lisboa e atendimentos em Amadora e Caldas da Rainha.",
  },
  {
    year: "2022",
    title: "Workshops internacionais",
    text: "Formações ministradas para profissionais em Portugal, Espanha, França e Itália.",
  },
  {
    year: "Hoje",
    title: "Método Tatiana Penteado",
    text: "Protocolos exclusivos que unem ciência, sensibilidade e resultados visíveis em cada cliente.",
  },
];

const values = [
  { icon: Heart, title: "Cuidado humano", text: "Cada protocolo nasce da escuta atenta e do respeito pela história única de cada cliente." },
  { icon: Sparkles, title: "Resultados reais", text: "Equipamentos de última geração e técnicas validadas, sempre alinhadas a expectativas claras." },
  { icon: Globe2, title: "Visão internacional", text: "Atuação consolidada em Portugal e formações em diversos países da Europa." },
];

const credentials = [
  { icon: GraduationCap, title: "Formação contínua", text: "Cursos avançados em centros de referência no Brasil, Portugal e Europa." },
  { icon: Award, title: "Certificações técnicas", text: "Especialista em terapias integrativas, medicina tradicional chinesa e tecnologias de estética avançada." },
];

function AboutPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Hero */}
      <section className="container-narrow py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-5 md:gap-20">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-gold-soft/30" />
              <img
                src={portrait}
                alt="Tatiana Penteado"
                width={1080}
                height={1440}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionHeading
              eyebrow="Sobre mim"
              title={<>Cuidar é a minha <em className="text-gold">vocação</em>.</>}
              description="Profissional de terapias integrativas e estética avançada com atuação em Portugal e Europa, dedico-me a tratamentos que aliam conhecimento, técnicas naturais e tecnologia."
            />
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {t("Acredito profundamente que a verdadeira saúde e a vitalidade de cada pessoa começam no seu interior. É com base nesta convicção que tenho dedicado mais de 30 anos da minha vida profissional ao estudo e à prática das Terapias Integrativas, da Medicina Tradicional Chinesa (MTC) e da Osteopatia.")}
              </p>
              <p>
                {t("A minha abordagem assenta num princípio fundamental: o nosso corpo funciona como um todo. Quando promovemos o reequilíbrio energético, estrutural e fisiológico, estamos a tratar a raiz dos problemas e não apenas os seus sintomas. Esta visão 'de dentro para fora' garante resultados muito mais profundos e duradouros na saúde de cada cliente.")}
              </p>
              <p>
                {t("Neste contexto, a estética avançada — embora parte essencial dos meus protocolos — surge como a consequência natural e visível de um organismo curado e em harmonia. Uma pele radiante e um corpo modelado são reflexos de um metabolismo desintoxicado e de uma mente em equilíbrio.")}
              </p>
              <p>
                {t("Através de um atendimento altamente personalizado e humano, procuro aliar as mais valiosas técnicas naturais milenares à tecnologia de ponta para proporcionar uma experiência transformadora, promovendo a autoestima e o bem-estar sustentável.")}
              </p>
              <p className="font-medium text-primary">
                {t("Mais do que tratamentos, ofereço um espaço de cura, confiança e dedicação integral para que se sinta bem consigo mesma todos os dias.")} ✨<br />
                <span className="mt-2 block">{t("Desde 1994 a transformar saúde interior em beleza exterior.")} 💖</span>
              </p>
              <p className="italic">
                {t("Sigo em constante aperfeiçoamento, sempre aberta para aprender mais, de forma a qualificar-me com eficiência, eficácia e, acima de tudo, com sensibilidade humana.")}
              </p>
            </div>

            {/* Destaque do Congresso */}
            <div className="mt-8 border-l-2 border-gold bg-gold-soft/10 p-5 flex gap-4 items-start rounded-r-sm shadow-sm transition-all duration-300 hover:border-l-4">
              <Award className="h-6 w-6 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">{t("Destaque e Credencial")}</p>
                <p className="mt-1.5 font-serif text-lg leading-relaxed text-primary font-medium">
                  {t("Participação no 1º Congresso de Medicina Integrativa Europa - Portugal")}
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                "Protocolos personalizados",
                "Terapias Integrativas",
                "Drenagem Linfática",
                "Ventosaterapia",
                "HIFU",
                "Radiofrequência",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Filosofia"
            align="center"
            title={<>Beleza que nasce do <em className="text-gold">equilíbrio</em>.</>}
            description="Acredito que cuidar da pele e do corpo é também cuidar da mente. Por isso, cada atendimento é desenhado para promover bem-estar duradouro — não apenas resultado imediato."
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t border-border pt-8">
                <v.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-2xl text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="container-narrow py-20 md:py-28">
        <SectionHeading
          eyebrow="Trajectória"
          title={<>Uma carreira construída com <em className="text-gold">propósito</em>.</>}
          description="Mais de uma década dedicada ao estudo, à prática e ao aperfeiçoamento contínuo das mais modernas técnicas de terapias integrativas, saúde e bem-estar."
        />

        <div className="mt-20 relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <div className="space-y-14">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <p className="font-serif text-5xl text-gold">{t.year}</p>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                  <h3 className="font-serif text-2xl text-primary">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
                <span className="absolute left-3 top-3 -translate-x-1/2 h-2 w-2 rounded-full bg-gold md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-narrow text-center">
          <Quote className="mx-auto h-8 w-8 text-gold" strokeWidth={1.25} />
          <p className="mx-auto mt-8 max-w-3xl font-serif text-3xl leading-snug md:text-4xl">
            “Acredito que a verdadeira beleza está no equilíbrio entre cuidar de quem se é
            por dentro através de terapias naturais e revelar a melhor versão por fora.”
          </p>
          <p className="mt-8 text-[24px] uppercase tracking-[0.4em] text-secondary">Tatiana Penteado</p>
        </div>
      </section>

      {/* Credenciais */}
      <section className="container-narrow py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Credenciais"
              title={<>Conhecimento que se traduz em <em className="text-gold">resultado</em>.</>}
              description="A formação contínua é parte essencial do método. Investir em conhecimento é investir nos clientes e nos profissionais que confiam neste trabalho."
            />
          </div>
          <div className="space-y-8">
            {credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-5 border-b border-border pb-8">
                <c.icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                <div>
                  <h3 className="font-serif text-2xl text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
            <div className="grid gap-3 pt-2 text-sm text-foreground">
              {[
                "Membro ativo das comunidades de terapias integrativas e estética em Portugal",
                "Atendimentos personalizados em clínica própria e parceiras",
                "Workshops para profissionais em Portugal, Espanha, França e Itália",
                "Acompanhamento pós-protocolo e plano de manutenção individual",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
