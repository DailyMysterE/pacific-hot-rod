/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Split layout with image and content
 * - Racing stripe accents
 * - Feature list with chrome highlights
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, MapPin } from 'lucide-react';

const features = [
  'Over 20 years of restoration experience',
  'Complete frame-off restorations',
  'Custom paint and bodywork specialists',
  'Hot rod and muscle car experts',
  'State-of-the-art paint booth facility',
  'Serving the Greater Vancouver area',
];

const serviceAreas = [
  'Langley', 'Surrey', 'Vancouver', 'Burnaby', 'Richmond',
  'Coquitlam', 'New Westminster', 'Delta', 'Abbotsford',
  'White Rock', 'Maple Ridge', 'North Vancouver',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.10_0.005_250)]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/hero-about.jpg"
                  alt="Pacific Hot Rod restoration facility"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 border border-primary/20" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 md:p-8 max-w-[200px]">
                <div className="font-display text-5xl md:text-6xl text-primary-foreground">20+</div>
                <div className="text-primary-foreground/80 text-sm mt-1">Years of Excellence</div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/30" />
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-sm tracking-widest mb-4"
            >
              ABOUT US
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              CRAFTSMANSHIP YOU CAN TRUST
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground/70 text-lg leading-relaxed mb-8"
            >
              Pacific Hot Rod is Langley's premier automotive restoration facility, 
              dedicated to bringing classic cars and hot rods back to their former glory. 
              Our team combines decades of experience with a genuine passion for vintage 
              automobiles, ensuring every project receives the attention to detail it deserves.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground/70 leading-relaxed mb-8"
            >
              From complete frame-off restorations to custom paint and bodywork, we take 
              pride in delivering exceptional results that exceed our clients' expectations. 
              Our state-of-the-art facility is equipped to handle projects of any scale, 
              from minor repairs to ground-up builds.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-3 mb-10"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[oklch(0.12_0.008_250)] border border-border p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-display text-sm tracking-wider">PROUDLY SERVING</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs text-foreground/60 bg-[oklch(0.08_0.005_250)] px-3 py-1.5 border border-border/50"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
