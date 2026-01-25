/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Full-viewport hero with dramatic automotive imagery
 * - Asymmetric layout with overlapping elements
 * - Racing amber accents and chrome highlights
 * - Heavy, mechanical entrance animations
 */

import { motion } from 'framer-motion';
import { ChevronDown, Wrench, Award } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpg"
          alt="Classic car restoration workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_250)] via-[oklch(0.08_0.005_250)]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_250)] via-transparent to-[oklch(0.08_0.005_250)]/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 mb-8"
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">
              LANGLEY'S PREMIER RESTORATION SHOP
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6"
          >
            <span className="text-foreground">BRINGING</span>
            <br />
            <span className="text-primary">CLASSICS</span>
            <br />
            <span className="text-foreground">BACK TO LIFE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/70 max-w-xl mb-10 leading-relaxed"
          >
            Expert automotive restoration and custom bodywork for classic cars, 
            hot rods, and muscle cars. Meticulous craftsmanship serving the 
            Greater Vancouver area.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="group font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span>START YOUR PROJECT</span>
              <Wrench className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </button>
            <button
              onClick={scrollToServices}
              className="font-display text-sm tracking-wider border border-foreground/30 text-foreground px-8 py-4 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>VIEW OUR WORK</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-foreground/10"
          >
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">20+</div>
              <div className="text-sm text-foreground/60 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">500+</div>
              <div className="text-sm text-foreground/60 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">100%</div>
              <div className="text-sm text-foreground/60 mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/40 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-foreground/40" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
