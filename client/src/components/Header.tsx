/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Sleek glass-morphism navbar with subtle border glow
 * - No top bar - cleaner, more premium look
 * - Refined typography and spacing
 * - Compact mobile menu with elegant transitions
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[oklch(0.06_0.005_250)]/90 backdrop-blur-xl border-b border-primary/10 shadow-2xl shadow-black/40' 
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="relative z-10 group"
          >
            <img 
              src="/images/p-logo.png" 
              alt="Pacific Hot Rod" 
              className="h-10 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground px-4 py-2 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="font-display text-sm md:text-base tracking-[0.15em] uppercase ml-4 bg-primary text-primary-foreground px-6 py-3 transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 border border-primary/50"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center text-foreground border border-border/50 hover:border-primary/50 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-[oklch(0.06_0.005_250)]/98 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container py-8 flex flex-col"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="font-display text-2xl tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors py-4 border-b border-border/30"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="font-display text-center text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 mt-8"
              >
                Get a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
