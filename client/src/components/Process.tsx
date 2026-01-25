/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact horizontal process bar
 * - Minimal, elegant design
 * - No descriptions - just steps
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { number: '01', title: 'CONSULT' },
  { number: '02', title: 'PLAN' },
  { number: '03', title: 'RESTORE' },
  { number: '04', title: 'DELIVER' },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header - Inline with steps on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
          <div className="lg:flex-shrink-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-[10px] tracking-[0.3em] mb-2"
            >
              HOW IT WORKS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-2xl md:text-3xl"
            >
              OUR PROCESS
            </motion.h2>
          </div>

          {/* Process Steps - Horizontal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 lg:pb-0"
          >
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                {/* Step */}
                <div className="flex items-center gap-2 md:gap-3 group">
                  <span className="font-display text-lg md:text-xl text-primary">{step.number}</span>
                  <span className="font-display text-xs md:text-sm tracking-wider text-foreground/60 group-hover:text-foreground transition-colors">
                    {step.title}
                  </span>
                </div>
                
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-primary/40 to-primary/10" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
