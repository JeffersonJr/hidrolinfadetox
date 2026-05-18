import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react";

import logoVertical from "../../assets/logo vertical.svg";
import logoVerticalWhite from "../../assets/logo vertical white.svg";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-cream">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block">
            <img src={logoVertical} alt="Hidrolinfa Detox" className="h-16 w-auto dark:hidden" />
            <img src={logoVerticalWhite} alt="Hidrolinfa Detox" className="hidden h-16 w-auto dark:block" />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tratamentos estéticos e terapêuticos de excelência em Portugal e Europa.
            Uma experiência clean, elegante e personalizada para o seu bem-estar.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Navegar</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/sobre" className="hover:text-gold">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-gold">Serviços</Link></li>
            <li><Link to="/precos" className="hover:text-gold">Preços</Link></li>
            <li><Link to="/contactos" className="hover:text-gold">Contactos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Contacto</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5}/><a href="tel:+351961551592" className="hover:text-gold">+351 961 551 592</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5}/><a href="https://wa.me/351961551592" target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5}/><span>Lisboa · Amadora · Caldas da Rainha</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5}/><span>contato@hidrolinfadetox.com</span></li>
            <li className="flex items-start gap-2"><Instagram className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5}/> @thatianacardoso</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Hidrolinfa Detox. Todos os direitos reservados.</p>
          <p>Atendimento em Portugal e Europa</p>
        </div>
      </div>
    </footer>
  );
}
