/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact contact section
 * - Minimal form with elegant inputs
 * - Inline contact info
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
    <section id="contact" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_250)]" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Header & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-primary text-[10px] tracking-[0.3em] mb-2">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              START YOUR PROJECT
            </h2>

            {/* Contact Info - Compact */}
            <div className="space-y-3">
              <a
                href="tel:604-217-2379"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">604-217-2379</span>
              </a>
              <a
                href="mailto:info@pacifichotrod.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@pacifichotrod.com</span>
              </a>
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Langley, BC • Greater Vancouver</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[oklch(0.08_0.005_250)] border border-border/50 p-5 md:p-6">
              <div className="grid sm:grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[oklch(0.06_0.005_250)] border border-border/50 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Name *"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[oklch(0.06_0.005_250)] border border-border/50 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Email *"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[oklch(0.06_0.005_250)] border border-border/50 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Phone"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-[oklch(0.06_0.005_250)] border border-border/50 px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors resize-none mb-3"
                placeholder="Tell us about your project... *"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-display text-xs tracking-[0.15em] bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
