/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Clean testimonial cards with vehicle photos
 * - Mobile-optimized layout
 * - Authentic client reviews
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael',
    vehicle: '1963 Chevrolet C10',
    review: 'Pacific Hot Rod transformed my C10 beyond my expectations. The attention to detail in the bodywork and paint is exceptional. They treated my truck like it was their own. Worth every penny.',
    image: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'David',
    vehicle: '1969 Chevrolet Chevelle',
    review: 'I brought my Chevelle to Pacific Hot Rod for a complete restoration. The team was professional, communicative, and delivered outstanding results. The car looks better than it did rolling off the factory floor.',
    image: '/images/testimonial-2-chevelle.jpg',
    rating: 5
  },
  {
    name: 'Robert',
    vehicle: '1968 Ford Mustang',
    review: 'After years of searching for the right shop, I found Pacific Hot Rod. Their craftsmanship is unmatched in the Lower Mainland. They brought my Mustang back to life with precision and care.',
    image: '/images/testimonial-3.jpg',
    rating: 5
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px 0px 0px 0px', amount: 0 });

  return (
    <section id="testimonials" className="py-10 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_250)]" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block text-primary text-base font-bold md:text-lg md:font-semibold tracking-[0.15em] md:tracking-[0.3em] mb-3 md:mb-4"
          >
            CLIENT REVIEWS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl"
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + (index * 0.05), ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[oklch(0.08_0.005_250)] border border-border/30 overflow-hidden hover:border-primary/50 group"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.vehicle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_250)] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/40" />
                </div>

                {/* Review Text */}
                <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-5 md:mb-6 font-medium">
                  "{testimonial.review}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="border-t border-border/30 pt-4">
                  <h4 className="font-display text-base md:text-lg text-foreground font-semibold mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-base md:text-lg text-primary font-bold tracking-wide">
                    {testimonial.vehicle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
