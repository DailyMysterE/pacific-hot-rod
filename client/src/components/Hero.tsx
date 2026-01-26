/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact hero that doesn't require excessive scrolling
 * - Refined typography and spacing
 * - Elegant stats bar
 */

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpg"
          alt="Classic car restoration workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.005_250)] via-[oklch(0.06_0.005_250)]/85 to-[oklch(0.06_0.005_250)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.005_250)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge - Compact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 border-l-2 border-primary pl-3 mb-6 md:mb-8"
          >
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-primary/90">
              LANGLEY'S PREMIER RESTORATION SHOP
            </span>
          </motion.div>

          {/* Main Heading - Tighter on mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-4 md:mb-6"
          >
            <span className="text-foreground">BRINGING</span>
            <br />
            <span className="text-primary">CLASSICS</span>
            <br />
            <span className="text-foreground">BACK TO LIFE</span>
          </motion.h1>

          {/* Subtitle - Compact */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/60 max-w-md mb-6 md:mb-8 leading-relaxed"
          >
            Expert automotive restoration and custom bodywork for classic cars, 
            hot rods, and muscle cars. Serving Greater Vancouver.
          </motion.p>

          {/* CTAs - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={scrollToContact}
              className="group font-display text-xs tracking-[0.15em] bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-3.5 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span>START YOUR PROJECT</span>
              <Wrench className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
            </button>
            <button
              onClick={scrollToGallery}
              className="font-display text-xs tracking-[0.15em] border border-foreground/20 text-foreground/80 px-6 py-3 md:px-8 md:py-3.5 hover:border-primary hover:text-primary transition-all duration-300"
            >
              VIEW OUR WORK
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar - Fixed at bottom, compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-[oklch(0.06_0.005_250)]/90 backdrop-blur-sm border-t border-primary/10"
      >
        <div className="container">
          <div className="flex justify-center md:justify-start gap-8 md:gap-16 py-4 md:py-5">
            <div className="text-center md:text-left">
              <div className="font-display text-2xl md:text-3xl text-primary">20+</div>
              <div className="text-[10px] md:text-xs text-foreground/50 tracking-wider">YEARS</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display text-2xl md:text-3xl text-primary">500+</div>
              <div className="text-[10px] md:text-xs text-foreground/50 tracking-wider">PROJECTS</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display text-2xl md:text-3xl text-primary">100%</div>
              <div className="text-[10px] md:text-xs text-foreground/50 tracking-wider">SATISFACTION</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
