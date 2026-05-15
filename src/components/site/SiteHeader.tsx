import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactMenu } from "./ContactMenu";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/precos", label: "Preços" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-narrow flex h-20 items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide text-primary">Thatiana Cardoso</span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-gold">Estética &amp; Bem-Estar</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-light tracking-wide text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ContactMenu variant="header" />
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
                className="text-base text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+351961551592" className="mt-2 flex items-center gap-2 text-sm text-gold">
              <Phone className="h-4 w-4" strokeWidth={1.5} /> Ligar +351 961 551 592
            </a>
            <a href="https://wa.me/351961551592" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gold">
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
