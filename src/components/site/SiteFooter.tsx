import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

import logoVertical from "../../assets/logohidrolinfa.svg";
import logoVerticalWhite from "../../assets/logohidrolinfa.svg";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="mt-32 border-t border-border bg-cream">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block">
            <img
              src={logoVertical}
              alt="Hidrolinfa Detox"
              className="h-24 w-auto dark:hidden"
            />
            <img
              src={logoVerticalWhite}
              alt="Hidrolinfa Detox"
              className="hidden h-24 w-auto dark:block"
            />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t(
              "Tratamentos estéticos e terapêuticos de excelência em Portugal e Europa. Uma experiência clean, elegante e personalizada para o seu bem-estar.",
            )}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">
            {t("Navegar")}
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/sobre" className="hover:text-gold">
                {t("Sobre")}
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-gold">
                {t("Serviços")}
              </Link>
            </li>
            <li>
              <Link to="/precos" className="hover:text-gold">
                {t("Preços")}
              </Link>
            </li>
            <li>
              <Link to="/contactos" className="hover:text-gold">
                {t("Contactos")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">
            {t("Contacto")}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MessageCircle
                className="mt-0.5 h-4 w-4 text-gold"
                strokeWidth={1.5}
              />
              <a
                href="https://wa.me/351915943309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold flex flex-col"
              >
                <span>+351 915 943 309</span>
                <span className="text-[10px] uppercase text-muted-foreground">
                  {t("WhatsApp Comercial")}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle
                className="mt-0.5 h-4 w-4 text-gold"
                strokeWidth={1.5}
              />
              <a
                href="https://wa.me/351961551592"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold flex flex-col"
              >
                <span>+351 961 551 592</span>
                <span className="text-[10px] uppercase text-muted-foreground">
                  {t("WhatsApp Secundário")}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
              <a
                href="tel:+351215982843"
                className="hover:text-gold flex flex-col"
              >
                <span>+351 215 982 843</span>
                <span className="text-[10px] uppercase text-muted-foreground">
                  {t("Telefone Fixo")}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
              <span>{t("Lisboa · Amadora · Caldas da Rainha")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
              <span>contato@hidrolinfadetox.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Instagram
                className="mt-0.5 h-4 w-4 text-gold"
                strokeWidth={1.5}
              />
              <a
                href="https://www.instagram.com/tatiane.penteado19/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                @tatiane.penteado19
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Hidrolinfa Detox.{" "}
            {t("Todos os direitos reservados.")}
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link
              to="/privacidade"
              className="hover:text-gold transition-colors"
            >
              {t("Política de Privacidade")}
            </Link>
            <Link to="/cookies" className="hover:text-gold transition-colors">
              {t("Política de Cookies")}
            </Link>
          </div>

          <p>{t("Atendimento em Portugal e Europa")}</p>
        </div>
      </div>
    </footer>
  );
}
