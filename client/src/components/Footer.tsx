/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Dark footer with chrome accents
 * - Racing stripe divider
 * - Structured layout with quick links
 */

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[oklch(0.06_0.005_250)] border-t border-border">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/p-logo.png"
              alt="Pacific Hot Rod"
              className="h-14 w-auto mb-6"
            />
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Langley's premier automotive restoration facility, dedicated to bringing 
              classic cars and hot rods back to their former glory.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders - can be expanded */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-foreground mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-foreground mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {[
                'Custom Paint',
                'Body Restoration',
                'Hot Rod Builds',
                'Collision Repair',
                'Custom Fabrication',
                'Detailing & Finishing',
              ].map((service) => (
                <li key={service}>
                  <span className="text-foreground/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-foreground mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:604-217-2379"
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">604-217-2379</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pacifichotrod.com"
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">info@pacifichotrod.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-foreground/60">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Langley, BC<br />Greater Vancouver Area</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas - SEO Section */}
      <div className="border-t border-border/50">
        <div className="container py-8">
          <h4 className="font-display text-xs tracking-wider text-foreground/40 mb-4">
            SERVING THE GREATER VANCOUVER AREA
          </h4>
          <p className="text-xs text-foreground/30 leading-relaxed">
            Pacific Hot Rod provides classic car restoration, hot rod builds, and custom automotive 
            bodywork services to Langley, Surrey, Vancouver, Burnaby, Richmond, Coquitlam, 
            New Westminster, Delta, Abbotsford, White Rock, Maple Ridge, Port Coquitlam, 
            North Vancouver, West Vancouver, and the entire Lower Mainland of British Columbia.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/40 text-sm">
              © {currentYear} Pacific Hot Rod. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-foreground/40">
              <span>Classic Car Restoration</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>Hot Rod Builds</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>Custom Paint</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
