import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-6 sm:px-10 mx-auto max-w-5xl py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-x-2">
              <Icons.logo className="h-8 w-auto" />
              <span className="font-bold text-lg tracking-tight">espeak</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Il tuo tutor AI per la fluidità in inglese. Pratica ovunque, in qualsiasi momento.
            </p>
            <div className="flex gap-x-4 pt-2">
              {icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Prodotto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Prezzi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Supporto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/support" className="hover:text-primary transition-colors">Contattaci</a></li>
              <li><a href="mailto:support@espeak.it" className="hover:text-primary transition-colors">support@espeak.it</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legale</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-primary transition-colors">Termini e Condizioni</a></li>
              <li><a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 espeak. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
