/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact hero that doesn't require excessive scrolling
 * - Refined typography and spacing
 * - Elegant stats bar
 */

import { motion } from 'framer-motion';

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
      <div className="container relative z-10 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 border-l-2 border-primary pl-3 mb-5 md:mb-8"
          >
            <span className="text-xs md:text-base tracking-[0.2em] md:tracking-[0.25em] text-primary/90">
              LANGLEY'S PREMIER RESTORATION SHOP
            </span>
          </motion.div>

          {/* Main Heading - Smaller and tighter on mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-display text-4xl md:text-7xl lg:text-8xl leading-[0.95] mb-4 md:mb-6"
          >
            <span className="text-foreground">BRINGING</span>
            <br />
            <span className="text-primary">CLASSICS</span>
            <br />
            <span className="text-foreground">BACK TO LIFE</span>
          </motion.h1>

          {/* Subtitle - Smaller on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-base md:text-xl text-foreground/60 max-w-md mb-5 md:mb-8 leading-relaxed"
          >
            Expert automotive restoration and custom bodywork for classic cars, 
            hot rods, and muscle cars. Serving Greater Vancouver.
          </motion.p>

          {/* CTAs - Full width on mobile, smaller padding */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-6"
          >
            <button
              onClick={scrollToContact}
              className="group font-display text-xs md:text-base tracking-[0.15em] bg-primary text-primary-foreground px-8 py-3.5 md:px-12 md:py-5 hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              START YOUR PROJECT
            </button>
            <button
              onClick={scrollToGallery}
              className="font-display text-xs md:text-base tracking-[0.15em] border-2 border-foreground/20 text-foreground/80 px-8 py-3.5 md:px-12 md:py-5 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              VIEW OUR WORK
            </button>
            
            {/* Stat badge integrated with buttons - desktop only */}
            <div className="hidden sm:flex items-center gap-3 ml-2 md:ml-4">
              <div className="h-12 w-px bg-primary/20" />
              <div className="text-left">
                <div className="font-display text-2xl md:text-3xl text-primary leading-none">40+</div>
                <div className="text-sm md:text-base text-foreground/50 tracking-wider mt-0.5">YEARS</div>
              </div>
            </div>
          </motion.div>
          
          {/* Stat badge for mobile - centered below buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="sm:hidden flex items-center justify-center gap-3 mt-5"
          >
            <div className="h-px w-8 bg-primary/20" />
            <div className="text-center">
              <div className="font-display text-2xl text-primary leading-none">40+</div>
              <div className="text-xs text-foreground/50 tracking-wider mt-0.5">YEARS</div>
            </div>
            <div className="h-px w-8 bg-primary/20" />
          </motion.div>
        </div>
      </div>


    </section>
  );
}
