import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { brand, navigation } from "@/config/brand";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { logoTaxQueen } from "@/assets";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [linksOpen, setLinksOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive tax tips & updates in your inbox.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Mobile Layout */}
      <div className="md:hidden container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Brand + Tagline centered */}
          <div className="text-center pb-6 border-b border-primary-foreground/20">
            <img 
              src={logoTaxQueen} 
              alt="Tax Queen Logo" 
              className="h-10 w-auto brightness-0 invert mx-auto mb-3"
              loading="lazy"
            />
            <p className="text-sm text-primary-foreground/80 max-w-xs mx-auto">
              {brand.description}
            </p>
          </div>

          {/* Newsletter - prominent */}
          <div className="pb-6 border-b border-primary-foreground/20">
            <h4 className="font-semibold uppercase tracking-wide mb-3 text-center">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4 text-center">
              Get tax tips & updates delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-none h-11"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-11 w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Collapsible Quick Links */}
          <Collapsible open={linksOpen} onOpenChange={setLinksOpen}>
            <CollapsibleTrigger className="flex justify-between items-center w-full py-3 border-b border-primary-foreground/20">
              <span className="font-semibold uppercase tracking-wide">Quick Links</span>
              <ChevronDown className={cn("w-5 h-5 transition-transform", linksOpen && "rotate-180")} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3 pb-2">
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {navigation.map((item) => {
                    const isExternal = "external" in item && item.external;
                    const isAnchor = item.href.startsWith("#");
                    
                    return (
                      <li key={item.href}>
                        {isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                          >
                            {item.label}
                          </a>
                        ) : isAnchor ? (
                          <a
                            href={item.href}
                            className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </CollapsibleContent>
          </Collapsible>

          {/* Collapsible Contact */}
          <Collapsible open={contactOpen} onOpenChange={setContactOpen}>
            <CollapsibleTrigger className="flex justify-between items-center w-full py-3 border-b border-primary-foreground/20">
              <span className="font-semibold uppercase tracking-wide">Contact</span>
              <ChevronDown className={cn("w-5 h-5 transition-transform", contactOpen && "rotate-180")} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3 pb-2">
              <address className="not-italic space-y-2 text-sm text-primary-foreground/80">
                <p>{brand.email}</p>
                {brand.phone && <p>{brand.phone}</p>}
              </address>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Newsletter Column */}
          <div className="space-y-4 order-last lg:order-last">
            <h4 className="font-semibold uppercase tracking-wide">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80">
              Get tax tips & updates delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-none h-11 flex-1"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-11"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Brand Column */}
          <div className="space-y-4 order-first lg:order-first">
            <img 
              src={logoTaxQueen} 
              alt="Tax Queen Logo" 
              className="h-10 sm:h-12 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              {brand.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wide">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const isExternal = "external" in item && item.external;
                  const isAnchor = item.href.startsWith("#");
                  
                  return (
                    <li key={item.href}>
                      {isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : isAnchor ? (
                        <a
                          href={item.href}
                          className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wide">Contact</h4>
            <address className="not-italic space-y-2 text-sm text-primary-foreground/80">
              <p>{brand.email}</p>
              {brand.phone && <p>{brand.phone}</p>}
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4 sm:py-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <p className="text-sm text-primary-foreground/80 text-center">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;