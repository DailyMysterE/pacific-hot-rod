/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Transparent header that becomes solid on scroll
 * - Chrome accents and racing amber highlights
 * - Oswald typography for brand presence
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-[oklch(0.06_0.005_250)] border-b border-border/50">
        <div className="container flex justify-end items-center py-2 gap-6 text-sm">
          <a 
            href="tel:604-217-2379" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>604-217-2379</span>
          </a>
          <a 
            href="mailto:info@pacifichotrod.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@pacifichotrod.com</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[oklch(0.08_0.005_250)]/95 backdrop-blur-md shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="relative z-10"
            >
              <img 
                src="/images/p-logo.png" 
                alt="Pacific Hot Rod" 
                className="h-12 md:h-16 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="font-display text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="font-display text-sm tracking-wider bg-primary text-primary-foreground px-6 py-2.5 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[oklch(0.10_0.005_250)] border-t border-border"
            >
              <div className="container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="font-display text-lg tracking-wider text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <a 
                    href="tel:604-217-2379" 
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Phone className="w-4 h-4" />
                    <span>604-217-2379</span>
                  </a>
                  <a 
                    href="mailto:info@pacifichotrod.com" 
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@pacifichotrod.com</span>
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="font-display text-center tracking-wider bg-primary text-primary-foreground px-6 py-3 mt-2"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
