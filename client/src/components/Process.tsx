/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Horizontal timeline/process layout
 * - Numbered steps with chrome accents
 * - Racing stripe connectors
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'CONSULTATION',
    description: 'We discuss your vision, assess your vehicle, and provide a detailed project estimate.',
  },
  {
    number: '02',
    title: 'PLANNING',
    description: 'Our team develops a comprehensive restoration plan tailored to your goals and budget.',
  },
  {
    number: '03',
    title: 'RESTORATION',
    description: 'Expert craftsmen bring your classic back to life with meticulous attention to detail.',
  },
  {
    number: '04',
    title: 'DELIVERY',
    description: 'Your fully restored vehicle is ready to turn heads and create lasting memories.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />
      
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <img
          src="/images/texture-metal.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest mb-4"
          >
            HOW IT WORKS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            OUR PROCESS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            From initial consultation to final delivery, we guide you through every step 
            of your restoration journey.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative text-center"
            >
              {/* Number */}
              <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 border border-primary/20 rotate-45" />
                {/* Inner background */}
                <div className="absolute inset-4 bg-[oklch(0.12_0.008_250)] border border-border" />
                {/* Number */}
                <span className="relative font-display text-4xl text-primary">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl mb-3">{step.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            START YOUR RESTORATION
          </a>
        </motion.div>
      </div>
    </section>
  );
}
