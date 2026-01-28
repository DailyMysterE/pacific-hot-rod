/*
 * DESIGN: Premium Blue & White
 * - Compact split layout
 * - Minimal feature list
 * - Elegant service area tags
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const address = '5650 Production Way, Langley, BC';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px', amount: 0.1 });

  return (
    <section id="about" className="py-10 md:pt-28 md:pb-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image Side - 2 cols */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/shop-exterior.jpg"
                alt="Pacific Hot Rod restoration facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
          </motion.div>

          {/* Content Side - 3 cols */}
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-primary text-base font-black md:text-lg md:font-black tracking-[0.15em] md:tracking-[0.3em] mb-3 md:mb-4 tagline-bold"
            >
              ABOUT US
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6"
            >
              CRAFTSMANSHIP YOU CAN TRUST
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-foreground/60 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 max-w-2xl font-medium"
            >
              Pacific Hot Rod is Langley's premier automotive restoration facility. 
              Our team combines decades of experience with genuine passion for vintage 
              automobiles. From frame-off restorations to custom paint and bodywork, 
              we deliver exceptional results.
            </motion.p>

            {/* Address - Premium styling */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=5650+Production+Way+Langley+BC+Canada"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-4 bg-[oklch(0.10_0.008_250)] border border-border/30 px-5 py-4 md:px-6 md:py-5 hover:border-primary/50 hover:bg-[oklch(0.12_0.008_250)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs tracking-wider text-foreground/40 mb-1 font-display">LOCATION</div>
                <div className="text-base md:text-lg text-foreground/80 font-medium group-hover:text-primary transition-colors">
                  {address}
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
