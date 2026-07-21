import { useState, useEffect } from "react";
import {
  X,
  Calendar,
  MapPin,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export function EventModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useTranslation();

  useEffect(() => {
    // Check if the user has already dismissed the promo modal in this session
    const isDismissed = sessionStorage.getItem("event-dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // 1.5 seconds delay for a premium feel
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("event-dismissed", "true");
  };

  if (!isOpen) return null;

  const treatwellUrl =
    "https://www.treatwell.pt/estabelecimento/espaco-humana-terapias-estetica-saude-bem-estar/";
  const whatsappUrl =
    "https://wa.me/351961551592?text=" +
    encodeURIComponent(
      language === "en"
        ? "Hello! I would like to get more information about Tatiane's appointments in Italy on July 18-19."
        : language === "es"
          ? "¡Hola! Me gustaría obtener más información sobre las citas de Tatiane en Italia el 18 y 19 de julio."
          : language === "fr"
            ? "Bonjour! Je souhaiterais obtenir plus d'informations sur les rendez-vous de Tatiane en Italie les 18 et 19 juillet."
            : language === "it"
              ? "Ciao! Vorrei maggiori informazioni sugli appuntamenti di Tatiane in Italia il 18 e 19 luglio."
              : "Olá! Gostaria de obter mais informações sobre os atendimentos da Tatiane na Italia nos dias 18 e 19 de Julho.",
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-primary/45 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={handleClose}
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto border border-border bg-cream p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 z-50 rounded-sm">
        {/* CLOSE BUTTON - Touch friendly */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-gold p-2 -mr-2 -mt-2 focus:outline-none cursor-pointer"
          aria-label={t("Fechar") || "Fechar"}
        >
          <X className="h-5 w-5" />
        </button>

        {/* PROMO BADGE */}
        <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold-soft/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          <Sparkles className="h-3 w-3" />
          {t("Agenda Especial")}
        </div>

        {/* HEADER */}
        <h2 className="mt-5 font-serif text-3xl leading-tight text-primary sm:text-4xl">
          {t("Tatiane Penteado na Italia")}
        </h2>

        {/* DETAILS LIST */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Calendar
              className="h-4.5 w-4.5 text-gold shrink-0"
              strokeWidth={1.5}
            />
            <span className="font-serif text-lg text-primary font-medium">
              {t("18 e 19 de Julho")}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin
              className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <span className="text-sm text-muted-foreground">
              {t(
                "Espaço Humana · Terapias, Estética, Saúde & Bem-Estar - Bologna Italia",
              )}
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {t(
            "Garanta a sua vaga para atendimentos exclusivos de estética avançada e terapias integrativas. Uma oportunidade única de realizar a sua avaliação e tratamento presencial.",
          )}
        </p>

        {/* MAIN CTA */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={treatwellUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="group flex w-full items-center justify-center gap-2 border border-primary bg-primary py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary min-h-[44px] cursor-pointer"
          >
            {t("Agendar no Treatwell")}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="group flex w-full items-center justify-center gap-2 border border-border bg-background py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:border-gold hover:text-gold min-h-[44px] cursor-pointer"
          >
            <MessageCircle
              className="h-4 w-4 text-muted-foreground group-hover:text-gold"
              strokeWidth={1.5}
            />
            {t("Esclarecer dúvidas por WhatsApp")}
          </a>

          <button
            onClick={handleClose}
            className="mt-2 w-full text-center text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary py-2 focus:outline-none cursor-pointer"
          >
            {t("Continuar a navegar") || "Continuar a navegar"}
          </button>
        </div>
      </div>
    </div>
  );
}
