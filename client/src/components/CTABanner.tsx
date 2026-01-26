/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact CTA section
 * - Elegant minimal design
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-14 md:py-20 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-services.jpg"
          alt="Automotive restoration work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.06_0.005_250)]/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <span className="inline-block text-primary text-sm md:text-base tracking-[0.3em] mb-4">
              READY TO START?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              LET'S BRING YOUR <span className="text-primary">CLASSIC</span> BACK TO LIFE
            </h2>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group font-display text-sm md:text-base tracking-[0.15em] bg-primary text-primary-foreground px-6 py-3.5 hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 self-start md:self-center"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
