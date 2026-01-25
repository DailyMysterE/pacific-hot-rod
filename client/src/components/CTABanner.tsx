/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Full-width banner with background image
 * - Strong CTA with racing amber accent
 * - Dramatic overlay gradient
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-services.jpg"
          alt="Automotive restoration work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-sm tracking-widest mb-6">
              READY TO START?
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
              LET'S BRING YOUR
              <br />
              <span className="text-primary">CLASSIC</span> BACK TO LIFE
            </h2>

            <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Whether you have a complete restoration project or need expert bodywork, 
              our team is ready to exceed your expectations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center gap-2"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="tel:604-217-2379"
                className="font-display text-sm tracking-wider border border-foreground/30 text-foreground px-8 py-4 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>604-217-2379</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
