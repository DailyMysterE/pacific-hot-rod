/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Card-based layout with chrome borders
 * - Racing stripe accents
 * - Staggered entrance animations
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Paintbrush, Wrench, Car, Sparkles, Shield, Settings } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Custom Paint',
    description: 'From classic factory colors to custom show-quality finishes. Expert color matching, multi-stage paint systems, and flawless application.',
  },
  {
    icon: Wrench,
    title: 'Body Restoration',
    description: 'Complete body-off restorations, rust repair, panel replacement, and precision metal fabrication to bring your classic back to showroom condition.',
  },
  {
    icon: Car,
    title: 'Hot Rod Builds',
    description: 'Custom hot rod construction from the ground up. Frame modifications, body channeling, chopping, and complete custom builds.',
  },
  {
    icon: Sparkles,
    title: 'Detailing & Finishing',
    description: 'Show-quality detailing, wet sanding, buffing, and ceramic coating. Every surface polished to perfection.',
  },
  {
    icon: Shield,
    title: 'Collision Repair',
    description: 'Expert collision repair for classic and vintage vehicles. We understand the unique requirements of restoring damaged classics.',
  },
  {
    icon: Settings,
    title: 'Custom Fabrication',
    description: 'Custom metal fabrication, patch panels, floor pans, and structural repairs. Precision work that matches original specifications.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[oklch(0.10_0.005_250)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest mb-4"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            OUR SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            From complete frame-off restorations to custom paint and bodywork, 
            we deliver exceptional craftsmanship on every project.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-[oklch(0.12_0.008_250)] border border-border hover:border-primary/50 p-8 transition-all duration-500"
            >
              {/* Racing stripe accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-all duration-500" />
              
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium">Learn More</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            DISCUSS YOUR PROJECT
          </a>
        </motion.div>
      </div>
    </section>
  );
}
