/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Minimal premium service cards without icons
 * - Elegant typography and subtle animations
 * - 5 services (removed Detailing)
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  { title: 'Custom Paint', number: '01' },
  { title: 'Body Restoration', number: '02' },
  { title: 'Hot Rod Builds', number: '03' },
  { title: 'Collision Repair', number: '04' },
  { title: 'Fabrication', number: '05' },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm md:text-base tracking-[0.3em] mb-4"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl"
          >
            OUR SERVICES
          </motion.h2>
        </div>

        {/* Services Grid - Premium minimal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: Math.min(0.05 * index, 0.3) }}
              className="group relative aspect-square bg-gradient-to-br from-[oklch(0.10_0.008_250)] to-[oklch(0.08_0.005_250)] border border-border/30 hover:border-primary/60 transition-all duration-500 flex flex-col items-center justify-center p-8 overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top left corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
              
              {/* Bottom right corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
              
              {/* Number */}
              <div className="relative z-10 font-display text-5xl md:text-6xl text-primary/20 group-hover:text-primary/30 transition-colors duration-300 mb-4">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-display text-lg md:text-xl tracking-wider text-center text-foreground/70 group-hover:text-foreground transition-colors duration-300 leading-tight">
                {service.title.toUpperCase()}
              </h3>

              {/* Hover accent line */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-px bg-primary/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-display text-sm md:text-base tracking-[0.2em] text-primary hover:text-foreground border-b border-primary/50 hover:border-foreground pb-1 transition-all duration-300"
          >
            DISCUSS YOUR PROJECT
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
