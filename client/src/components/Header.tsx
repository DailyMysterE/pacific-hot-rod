/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Sleek glass-morphism navbar with subtle border glow
 * - No top bar - cleaner, more premium look
 * - Refined typography and spacing
 * - Premium full-screen black mobile menu centered vertically
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
      {/* Desktop/Tablet Header */}
      <header 
        className={`fixed md:top-4 top-2 left-0 right-0 z-50 transition-all duration-500 ${
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
                  className="font-display font-medium text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-primary px-5 py-2 transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="font-display font-semibold text-sm tracking-[0.15em] uppercase ml-6 bg-primary text-primary-foreground px-8 py-3 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button - Only show when menu is closed */}
            {!isMobileMenuOpen && (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden relative z-10 w-14 h-14 flex items-center justify-center text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Premium Full Screen Black Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 bg-black z-[100] overflow-y-auto"
          >
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none" />

            {/* Close Button - Top Right Corner */}
            <div className="fixed top-4 right-4 z-[110]">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-14 h-14 flex items-center justify-center text-white border border-white/20 hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm bg-white/5"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content - Centered vertically */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-screen flex items-center justify-center px-6 py-20"
            >
              <div className="w-full max-w-md">
                {/* Navigation Links */}
                <div className="flex flex-col items-center w-full mb-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="font-display text-3xl md:text-4xl tracking-[0.15em] uppercase text-white hover:text-primary transition-colors duration-200 py-2.5 border-b border-white/5 text-center w-full"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                    className="font-display text-center text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-12 py-4 mt-6 hover:bg-primary/90 transition-colors duration-200"
                  >
                    Get a Quote
                  </a>
                </div>

                {/* Contact Details */}
                <div className="w-full">
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
                  
                  {/* Contact Icons */}
                  <div className="flex items-center justify-center gap-5 mb-5">
                    {/* Call */}
                    <a
                      href="tel:604-217-2379"
                      className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-primary hover:bg-primary/10 text-white hover:text-primary transition-all duration-200"
                      aria-label="Call us"
                    >
                      <Phone className="w-5 h-5" />
                    </a>

                    {/* Text/SMS */}
                    <a
                      href="sms:604-217-2379"
                      className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-primary hover:bg-primary/10 text-white hover:text-primary transition-all duration-200"
                      aria-label="Text us"
                    >
                      <MessageSquare className="w-5 h-5" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@pacifichotrod.com"
                      className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-primary hover:bg-primary/10 text-white hover:text-primary transition-all duration-200"
                      aria-label="Email us"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Address */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5650+Production+Way+Langley+BC+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 text-white/60 hover:text-primary transition-colors duration-200 px-4"
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="font-display text-sm tracking-[0.1em] uppercase text-center">
                      5650 Production Way, Langley, BC
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
