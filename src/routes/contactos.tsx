import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos · Tatiane Penteado" },
      {
        name: "description",
        content:
          "Marque a sua consulta com Tatiane Penteado em Lisboa, Amadora e Caldas da Rainha.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="container-narrow py-20 md:py-28">
        <SectionHeading
          eyebrow="Contactos"
          align="center"
          title={
            <>
              Vamos <em className="text-gold">conversar</em>.
            </>
          }
          description="Disponível para esclarecer dúvidas, agendar consultas ou propor parcerias e formações em Portugal e Europa."
        />

        <div className="mt-20 grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+351 961 551 592",
                href: "https://wa.me/351961551592",
              },
              {
                icon: Phone,
                label: "Telemóvel",
                value: "+351 915 943 309",
                href: "tel:+351915943309",
              },
              {
                icon: Phone,
                label: "Telefone Fixo",
                value: "+351 215 982 843",
                href: "tel:+351215982843",
              },
              {
                icon: Mail,
                label: "Email",
                value: "contato@hidrolinfadetox.com",
                href: "mailto:contato@hidrolinfadetox.com",
              },
              {
                icon: MapPin,
                label: "Localização",
                value: "Lisboa · Amadora · Caldas da Rainha",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@tatiane.penteado19",
                href: "https://www.instagram.com/tatiane.penteado19/",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-border pb-6"
              >
                <c.icon className="mt-1 h-5 w-5 text-gold" strokeWidth={2} />
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block font-serif text-2xl font-medium text-primary hover:text-gold"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-serif text-2xl font-medium text-primary">
                      {c.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            className="bg-cream p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h3 className="font-serif text-3xl text-primary">
              Marcar uma avaliação.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha o formulário e entrarei em contacto consigo.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { name: "name", label: "Nome", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Telefone", type: "tel" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm font-medium text-foreground outline-none focus:border-gold"
                    placeholder={`Insira o seu ${f.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                  Mensagem
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm font-medium text-foreground outline-none focus:border-gold resize-none"
                  placeholder="Como posso ajudar?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              {sent ? "Mensagem enviada" : "Enviar mensagem"}{" "}
              <Send className="h-4 w-4" strokeWidth={1.5} />
            </button>
            {sent && (
              <p className="mt-4 text-xs text-gold">
                Obrigada! Entrarei em contacto em breve.
              </p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
