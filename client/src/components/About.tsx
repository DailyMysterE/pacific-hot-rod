/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact split layout
 * - Minimal feature list
 * - Elegant service area tags
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const address = '5650 Production Way, Langley, BC, Canada';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image Side - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/shop-exterior.png"
                alt="Pacific Hot Rod restoration facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
          </motion.div>

          {/* Content Side - 3 cols */}
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4"
            >
              ABOUT US
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6"
            >
              CRAFTSMANSHIP YOU CAN TRUST
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground/60 text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl"
            >
              Pacific Hot Rod is Langley's premier automotive restoration facility. 
              Our team combines decades of experience with genuine passion for vintage 
              automobiles. From frame-off restorations to custom paint and bodywork, 
              we deliver exceptional results.
            </motion.p>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-3"
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-foreground/60">
                {address}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
