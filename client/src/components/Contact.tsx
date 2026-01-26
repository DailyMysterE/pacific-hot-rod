/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Centered contact form layout
 * - Contact info below form in center
 * - Enhanced visual hierarchy
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Message sent! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.005_250)] to-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header - Centered */}
        <div className="text-center mb-8 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6"
          >
            START YOUR PROJECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            Ready to bring your classic back to life? Fill out the form below and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Centered Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-8 md:mb-10"
        >
          <form onSubmit={handleSubmit} className="bg-[oklch(0.10_0.008_250)] border-2 border-primary/20 p-6 md:p-8 shadow-2xl">
            {/* Form header */}
            <div className="mb-5 md:mb-6 text-center">
              <h3 className="font-display text-lg md:text-2xl text-primary mb-1 md:mb-2">Request a Quote</h3>
              <p className="text-sm md:text-base text-foreground/60">Tell us about your restoration project</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-3.5 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-3.5 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-3.5 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="(604) 123-4567"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                PROJECT DETAILS *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-3.5 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your vehicle, the work you need done, and your timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-display text-sm md:text-base tracking-[0.15em] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info - Centered Below Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8"
        >
          <a
            href="tel:604-217-2379"
            className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-base md:text-lg">604-217-2379</span>
          </a>
          <a
            href="mailto:info@pacifichotrod.com"
            className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-base md:text-lg">info@pacifichotrod.com</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=5650+Production+Way+Langley+BC+Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm md:text-lg whitespace-nowrap">5650 Production Way, Langley, BC</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
