/*
 * DESIGN: Premium Blue & White
 * - Redesigned premium service list with horizontal cards
 * - Elegant numbered design with descriptions
 * - Fully responsive for all platforms
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, Paintbrush, Hammer, Shield, Cog } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Custom Paint & Bodywork',
    description: 'Show-quality paint jobs and precision bodywork that bring your vision to life.',
    icon: Paintbrush,
  },
  {
    number: '02',
    title: 'Full Frame-Off Restoration',
    description: 'Complete ground-up restorations returning classics to factory perfection.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Hot Rod & Custom Builds',
    description: 'One-of-a-kind builds combining vintage style with modern performance.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Collision Repair',
    description: 'Expert collision repair and insurance work for classic and vintage vehicles.',
    icon: Shield,
  },
  {
    number: '05',
    title: 'Custom Fabrication',
    description: 'Precision metal fabrication and custom parts for unique automotive projects.',
    icon: Cog,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px', amount: 0.1 });

  return (
    <section id="services" className="py-10 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block text-primary-light text-base font-extrabold md:text-lg md:font-extrabold tracking-[0.15em] md:tracking-[0.3em] mb-3 md:mb-4"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
          >
            OUR SERVICES
          </motion.h2>

        </div>

        {/* Services List - Premium horizontal cards */}
        <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.35, 
                  delay: index * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative bg-gradient-to-r from-[oklch(0.10_0.008_250)] to-[oklch(0.08_0.005_250)] border border-border/30 hover:border-primary/50 overflow-hidden"
                style={{ willChange: isInView ? 'auto' : 'opacity, transform' }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative flex items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
                  {/* Text content */}
                  <div className="flex-1 min-w-0 text-center">
                    <h3 className="font-display text-lg md:text-2xl lg:text-3xl text-foreground/90 group-hover:text-foreground transition-colors mb-1.5 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground/60 group-hover:text-foreground/70 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary/40 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
