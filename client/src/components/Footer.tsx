/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact single-row footer
 * - Minimal elegant design
 * - SEO text preserved but subtle
 */

import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[oklch(0.05_0.005_250)] border-t border-border/30">
      {/* Main Footer - Compact */}
      <div className="container py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <img
              src="/images/p-logo.png"
              alt="Pacific Hot Rod"
              className="h-8 w-auto"
            />
            <span className="text-[10px] text-foreground/40 tracking-wider hidden sm:inline">
              LANGLEY'S PREMIER RESTORATION SHOP
            </span>
          </div>

          {/* Nav Links - Inline */}
          <nav className="flex flex-wrap gap-4 md:gap-6">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(`#${link.toLowerCase()}`); }}
                className="text-[10px] tracking-wider text-foreground/50 hover:text-primary transition-colors"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Contact - Inline */}
          <div className="flex items-center gap-4">
            <a
              href="tel:604-217-2379"
              className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">604-217-2379</span>
            </a>
            <a
              href="mailto:info@pacifichotrod.com"
              className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="text-xs hidden sm:inline">info@pacifichotrod.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* SEO Footer - Very subtle */}
      <div className="border-t border-border/20">
        <div className="container py-4">
          <p className="text-[9px] text-foreground/20 leading-relaxed text-center md:text-left">
            Pacific Hot Rod provides classic car restoration, hot rod builds, and custom automotive 
            bodywork services to Langley, Surrey, Vancouver, Burnaby, Richmond, Coquitlam, 
            New Westminster, Delta, Abbotsford, White Rock, Maple Ridge, and the Greater Vancouver area.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/20">
        <div className="container py-4">
          <p className="text-[10px] text-foreground/30 text-center">
            © {currentYear} Pacific Hot Rod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
