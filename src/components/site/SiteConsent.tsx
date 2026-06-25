import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export function SiteConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      // Add a slight delay before showing the cookie banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent-accepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-4xl animate-in slide-in-from-bottom-8 fade-in-20 duration-300">
      <div className="border border-border/80 bg-background/95 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-xl">
        
        {/* TEXT AREA */}
        <div className="flex items-start gap-3.5 flex-1">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft/10 text-gold border border-gold/20 shadow-sm">
            <Cookie className="h-4.5 w-4.5" strokeWidth={1.5} />
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t("Utilizamos cookies funcionais mínimos para melhorar a sua experiência no nosso site, em total conformidade com o RGPD.")}{" "}
            {t("Ao navegar no nosso site, concorda com a nossa")}{" "}
            <Link to={"/privacidade" as any} className="text-gold font-medium hover:underline">
              {t("Política de Privacidade")}
            </Link>{" "}
            {t("e")}{" "}
            <Link to={"/cookies" as any} className="text-gold font-medium hover:underline">
              {t("Política de Cookies")}
            </Link>.
          </p>
        </div>

        {/* BUTTONS AREA */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <button
            onClick={handleDecline}
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            {t("Recusar") || "Recusar"}
          </button>
          
          <button
            onClick={handleAccept}
            className="flex items-center gap-2 border border-primary bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary rounded-full shadow-sm"
          >
            {t("Aceitar") || "Aceitar"}
          </button>
        </div>

      </div>
    </div>
  );
}
