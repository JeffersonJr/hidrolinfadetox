import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PHONE_DISPLAY = "+351 961 551 592";
const PHONE_FIXED = "+351 215 982 843";
const PHONE_MOBILE = "+351 915 943 309";

const TEL_FIXED_HREF = "tel:+351215982843";
const TEL_MOBILE_HREF = "tel:+351915943309";
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
        return "inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary";
      case "outline":
        return "inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground";
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
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuItem
          className="group cursor-pointer"
          onSelect={() => window.open(WA_HREF, "_blank")}
        >
          <div className="flex items-center gap-3 w-full">
            <MessageCircle
              className="h-4 w-4 text-gold transition-colors group-focus:text-accent-foreground"
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium transition-colors group-focus:text-accent-foreground">
                WhatsApp
              </span>
              <span className="text-[11px] text-muted-foreground transition-colors group-focus:text-accent-foreground/80">
                {PHONE_DISPLAY}
              </span>
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="group cursor-pointer"
          onSelect={() => (window.location.href = TEL_MOBILE_HREF)}
        >
          <div className="flex items-center gap-3 w-full">
            <Phone
              className="h-4 w-4 text-gold transition-colors group-focus:text-accent-foreground"
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <span className="text-sm transition-colors group-focus:text-accent-foreground">
                Telemóvel
              </span>
              <span className="text-[11px] text-muted-foreground transition-colors group-focus:text-accent-foreground/80">
                {PHONE_MOBILE}
              </span>
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="group cursor-pointer"
          onSelect={() => (window.location.href = TEL_FIXED_HREF)}
        >
          <div className="flex items-center gap-3 w-full">
            <Phone
              className="h-4 w-4 text-gold transition-colors group-focus:text-accent-foreground"
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <span className="text-sm transition-colors group-focus:text-accent-foreground">
                Telefone Fixo
              </span>
              <span className="text-[11px] text-muted-foreground transition-colors group-focus:text-accent-foreground/80">
                {PHONE_FIXED}
              </span>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
