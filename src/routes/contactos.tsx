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
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { submitContact } from "@/server/contact";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phone || "",
      message: formData.get("message") as string,
    };

    try {
      await submitContact({ data });
      setSent(true);
      e.currentTarget.reset();
    } catch (err: any) {
      console.error(err);
      setError("Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                value: siteConfig.contact.whatsapp,
                href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`,
              },
              {
                icon: Phone,
                label: "Telemóvel",
                value: siteConfig.contact.phone,
                href: `tel:${siteConfig.contact.phone.replace(/\D/g, '')}`,
              },
              {
                icon: Phone,
                label: "Telefone Fixo",
                value: siteConfig.contact.landline,
                href: `tel:${siteConfig.contact.landline.replace(/\D/g, '')}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: siteConfig.contact.email,
                href: `mailto:${siteConfig.contact.email}`,
              },
              {
                icon: MapPin,
                label: "Localização",
                value: siteConfig.contact.address,
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: siteConfig.contact.instagram,
                href: siteConfig.contact.instagramUrl,
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
            onSubmit={handleSubmit}
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
                  Telefone
                </label>
                <PhoneInput
                  defaultCountry="PT"
                  placeholder="Insira o seu telefone"
                  value={phone}
                  onChange={setPhone}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm font-medium text-foreground outline-none focus-within:border-gold [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:border-none"
                  required
                />
              </div>
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

            {error && (
              <p className="mt-4 text-sm text-red-500 font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-10 inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Enviando... <Loader2 className="h-4 w-4 animate-spin" /></>
              ) : sent ? (
                "Mensagem enviada"
              ) : (
                <>Enviar mensagem <Send className="h-4 w-4" strokeWidth={1.5} /></>
              )}
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
