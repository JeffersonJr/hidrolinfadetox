import { useState, useEffect } from "react";
import { X, Calendar, Clock, Sparkles, MessageCircle } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useTranslation();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Check if the user has already dismissed the promo modal in this session
    const isDismissed = sessionStorage.getItem("promo-dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // 1.5 seconds delay for a premium feel
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Format today's date based on language
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    
    let locale = "pt-PT";
    if (language === "en") locale = "en-GB";
    if (language === "es") locale = "es-ES";

    const formatted = today.toLocaleDateString(locale, options);
    // Capitalize first letter
    setFormattedDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
  }, [language]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("promo-dismissed", "true");
  };

  if (!isOpen) return null;

  const slots = [
    { time: "14:30", status: "available", label: t("Disponível") },
    { time: "16:00", status: "last", label: t("Última Vaga") },
    { time: "17:30", status: "available", label: t("Disponível") },
    { time: "19:00", status: "last", label: t("Última Vaga") },
  ];

  const handleBookSlot = (time: string) => {
    // Predefined WhatsApp message with the chosen time slot
    const textPT = `Olá! Vi a oferta por tempo limitado no site e gostaria de agendar a vaga de hoje às ${time}!`;
    const textEN = `Hello! I saw the limited-time offer on the website and would like to book today's slot at ${time}!`;
    const textES = `¡Hola! ¡Vi la oferta por tiempo limitado en el sitio web y me gustaría reservar la plaza de hoy a las ${time}!`;
    
    const message = language === "en" ? textEN : language === "es" ? textES : textPT;
    const whatsappUrl = `https://wa.me/351961551592?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* BACKDROP */}
      <div 
        className="fixed inset-0 bg-primary/45 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={handleClose}
      />
      
      {/* MODAL CARD */}
      <div className="relative w-full max-w-lg overflow-hidden border border-border bg-cream p-8 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 z-50">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-gold"
          aria-label={t("Fechar") || "Fechar"}
        >
          <X className="h-5 w-5" />
        </button>

        {/* PROMO BADGE */}
        <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold-soft/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          <Sparkles className="h-3 w-3" />
          {t("Por Tempo Limitado!")}
        </div>

        {/* HEADER */}
        <h2 className="mt-5 font-serif text-3xl leading-tight text-primary md:text-4xl">
          {t("Campanha Especial")} · <em className="text-gold">{t("Bem-Estar")}</em>
        </h2>
        
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {t("Garanta o seu momento de desintoxicação e equilíbrio com os nossos especialistas.")} {t("Aproveite o atendimento exclusivo de hoje com condições especiais de agendamento.")}
        </p>

        {/* DATE PICKER HEADER */}
        <div className="mt-8 flex items-center gap-3 border-b border-border/60 pb-3">
          <Calendar className="h-4.5 w-4.5 text-gold" strokeWidth={1.5} />
          <span className="font-serif text-base text-primary font-medium">{formattedDate}</span>
        </div>

        {/* SLOTS LIST */}
        <div className="mt-5 space-y-3.5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            {t("Horários Disponíveis para Hoje")}
          </p>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {slots.map((s) => (
              <button
                key={s.time}
                onClick={() => handleBookSlot(s.time)}
                className="group flex items-center justify-between border border-border/80 bg-background/80 p-4 transition-all duration-300 hover:border-gold hover:bg-background hover:shadow-md text-left"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-primary">{s.time}</p>
                    <p className="text-[10px] text-muted-foreground">{t("Hora") || "Hora"}</p>
                  </div>
                </div>
                
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                  s.status === "available" 
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" 
                    : "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                }`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CTA */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => handleBookSlot("14:30")}
            className="group flex w-full items-center justify-center gap-3 border border-primary bg-primary py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            {t("Reservar no WhatsApp")}
          </button>
          
          <button
            onClick={handleClose}
            className="w-full text-center text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            {t("Continuar a navegar") || "Continuar a navegar"}
          </button>
        </div>

      </div>
    </div>
  );
}
