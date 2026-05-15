import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PHONE_DISPLAY = "+351 961 551 592";
const TEL_HREF = "tel:+351961551592";
const WA_HREF = "https://wa.me/351961551592";

type Variant = "header" | "ghost" | "primary" | "outline" | "link";

export function ContactMenu({
  variant = "ghost",
  label,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const triggerClass = (() => {
    switch (variant) {
      case "header":
        return "inline-flex items-center gap-2 text-sm text-primary hover:text-gold";
      case "primary":
        return "inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary";
      case "outline":
        return "inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground";
      case "link":
        return "inline-flex items-center gap-2 text-sm tracking-wide text-primary hover:text-gold";
      default:
        return "inline-flex items-center gap-2 text-sm text-gold";
    }
  })();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${triggerClass} ${className}`}>
        <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
        {label ?? PHONE_DISPLAY}
        <ChevronDown className="h-3.5 w-3.5 opacity-60" strokeWidth={1.5} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <a href={TEL_HREF} className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-sm">Chamada telefónica</span>
              <span className="text-[11px] text-muted-foreground">{PHONE_DISPLAY}</span>
            </div>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <MessageCircle className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-sm">WhatsApp</span>
              <span className="text-[11px] text-muted-foreground">Mensagem instantânea</span>
            </div>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
