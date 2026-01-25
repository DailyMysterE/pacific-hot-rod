/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Minimal elegant service cards without descriptions
 * - Subtle gold accent lines and hover effects
 * - Compact layout for mobile
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Paintbrush, Wrench, Car, Sparkles, Shield, Settings } from 'lucide-react';

const services = [
  { icon: Paintbrush, title: 'Custom Paint' },
  { icon: Wrench, title: 'Body Restoration' },
  { icon: Car, title: 'Hot Rod Builds' },
  { icon: Sparkles, title: 'Detailing' },
  { icon: Shield, title: 'Collision Repair' },
  { icon: Settings, title: 'Fabrication' },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header - Compact */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-[10px] tracking-[0.3em] mb-3"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl"
          >
            OUR SERVICES
          </motion.h2>
        </div>

        {/* Services Grid - 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group relative aspect-square bg-[oklch(0.10_0.008_250)] border border-border/50 hover:border-primary/60 transition-all duration-500 flex flex-col items-center justify-center p-4 overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-0 right-0 w-full h-px bg-primary/0 group-hover:bg-primary/60 transition-all duration-500" />
                <div className="absolute top-0 right-0 h-full w-px bg-primary/0 group-hover:bg-primary/60 transition-all duration-500" />
              </div>
              
              {/* Icon */}
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary/80 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-display text-xs md:text-sm tracking-wider text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {service.title.toUpperCase()}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 md:mt-14 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-primary hover:text-foreground border-b border-primary/50 hover:border-foreground pb-1 transition-all duration-300"
          >
            DISCUSS YOUR PROJECT
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
