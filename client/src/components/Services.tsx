/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Minimal premium service cards - typography only
 * - Elegant design with subtle animations
 * - 5 services (removed Detailing)
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  'Custom Paint',
  'Body Restoration',
  'Hot Rod Builds',
  'Collision Repair',
  'Fabrication',
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

        {/* Services Grid - Ultra-premium minimal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: Math.min(0.05 * index, 0.3) }}
              className="group relative aspect-square bg-gradient-to-br from-[oklch(0.12_0.008_250)] to-[oklch(0.08_0.005_250)] border border-border/20 hover:border-primary/50 transition-all duration-500 flex items-center justify-center p-8 overflow-hidden"
            >
              {/* Subtle grain texture overlay */}
              <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
              
              {/* Title */}
              <h3 className="relative z-10 font-display text-xl md:text-2xl tracking-wide text-center text-foreground/60 group-hover:text-foreground transition-all duration-300 leading-tight">
                {service.toUpperCase()}
              </h3>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-px bg-primary/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
