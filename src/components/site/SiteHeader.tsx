import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ContactMenu } from "./ContactMenu";
import { useTranslation, Language } from "../../hooks/useTranslation";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/precos", label: "Preços" },
  { to: "/contactos", label: "Contactos" },
] as const;

import logoHorizontal from "../../assets/logohidrolinfa.svg";
import logoHorizontalWhite from "../../assets/logohidrolinfa.svg";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const langNames: Record<Language, { name: string; flag: string }> = {
    pt: { name: "PT", flag: "https://flagcdn.com/w40/pt.png" },
    en: { name: "EN", flag: "https://flagcdn.com/w40/gb.png" },
    es: { name: "ES", flag: "https://flagcdn.com/w40/es.png" },
    fr: { name: "FR", flag: "https://flagcdn.com/w40/fr.png" },
    it: { name: "IT", flag: "https://flagcdn.com/w40/it.png" },
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-narrow flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2 py-2"
          onClick={() => {
            setOpen(false);
            setLangOpen(false);
          }}
        >
          <div className="flex flex-col items-center">
            {/* Logotipo da Hidrolinfa */}
            <img
              src={logoHorizontal}
              alt="Hidrolinfa Detox"
              className="h-10 w-auto dark:hidden"
            />
            <img
              src={logoHorizontalWhite}
              alt="Hidrolinfa Detox"
              className="hidden h-10 w-auto dark:block"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-normal tracking-wide text-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-gold hover:bg-background/80"
              aria-label="Selecionar Idioma"
            >
              <img
                src={langNames[language].flag}
                alt={language}
                className="h-3 w-4.5 object-cover rounded-sm shadow-sm"
              />
              <span>{langNames[language].name}</span>
              <ChevronDown
                className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-45"
                  onClick={() => setLangOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border bg-background/95 p-1.5 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {(Object.keys(langNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => selectLanguage(lang)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-gold-soft/20 ${language === lang ? "bg-gold-soft/10 text-gold font-semibold" : "text-foreground"}`}
                    >
                      <img
                        src={langNames[lang].flag}
                        alt={lang}
                        className="h-3 w-4.5 object-cover rounded-sm shadow-sm"
                      />
                      <span>
                        {lang === "pt"
                          ? "Português"
                          : lang === "en"
                            ? "English"
                            : lang === "es"
                              ? "Español"
                              : lang === "fr"
                                ? "Français"
                                : "Italiano"}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <ContactMenu variant="outline" label={t("Agendar")} />
        </div>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-narrow flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {t(item.label)}
              </Link>
            ))}

            {/* MOBILE LANGUAGE SELECTOR */}
            <div className="border-t border-border/50 pt-4 mt-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                {t("Idioma") || "Idioma"}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {(Object.keys(langNames) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      selectLanguage(lang);
                      setOpen(false);
                    }}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${language === lang ? "border-gold bg-gold-soft/15 text-gold font-medium" : "border-border bg-background text-foreground"}`}
                  >
                    <img
                      src={langNames[lang].flag}
                      alt={lang}
                      className="h-3 w-4.5 object-cover rounded-sm shadow-sm"
                    />
                    <span>
                      {lang === "pt"
                        ? "PT"
                        : lang === "en"
                          ? "EN"
                          : lang === "es"
                            ? "ES"
                            : lang === "fr"
                              ? "FR"
                              : "IT"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/351915943309"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />{" "}
              {t("WhatsApp Comercial")} +351 915 943 309
            </a>
            <a
              href="https://wa.me/351961551592"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />{" "}
              {t("WhatsApp Secundário")} +351 961 551 592
            </a>
            <a
              href="tel:+351215982843"
              className="flex items-center gap-2 text-sm text-gold"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} /> {t("Fixo")} +351
              215 982 843
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
