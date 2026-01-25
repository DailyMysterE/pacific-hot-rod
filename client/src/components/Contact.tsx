/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Split layout with form and contact info
 * - Chrome border accents on form inputs
 * - Racing amber CTA button
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', vehicle: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />
      
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/hero-services.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest mb-4"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            START YOUR PROJECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/60 text-lg"
          >
            Ready to bring your classic back to life? Contact us today for a free consultation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:604-217-2379"
                className="group flex items-start gap-4 p-5 bg-[oklch(0.12_0.008_250)] border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-wider text-foreground/60 mb-1">PHONE</div>
                  <div className="text-lg text-foreground group-hover:text-primary transition-colors">604-217-2379</div>
                </div>
              </a>

              <a
                href="mailto:info@pacifichotrod.com"
                className="group flex items-start gap-4 p-5 bg-[oklch(0.12_0.008_250)] border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-wider text-foreground/60 mb-1">EMAIL</div>
                  <div className="text-lg text-foreground group-hover:text-primary transition-colors">info@pacifichotrod.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-[oklch(0.12_0.008_250)] border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-wider text-foreground/60 mb-1">LOCATION</div>
                  <div className="text-lg text-foreground">Langley, BC</div>
                  <div className="text-sm text-foreground/60 mt-1">Serving the Greater Vancouver Area</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[oklch(0.12_0.008_250)] border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-wider text-foreground/60 mb-1">HOURS</div>
                  <div className="text-foreground">Mon - Fri: 8:00 AM - 5:00 PM</div>
                  <div className="text-foreground/60 text-sm mt-1">Sat: By Appointment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[oklch(0.12_0.008_250)] border border-border p-8 md:p-10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-display text-sm tracking-wider text-foreground/60 mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[oklch(0.08_0.005_250)] border border-border px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-display text-sm tracking-wider text-foreground/60 mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[oklch(0.08_0.005_250)] border border-border px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block font-display text-sm tracking-wider text-foreground/60 mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[oklch(0.08_0.005_250)] border border-border px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors"
                    placeholder="(604) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block font-display text-sm tracking-wider text-foreground/60 mb-2">
                    VEHICLE
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-[oklch(0.08_0.005_250)] border border-border px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Year, Make, Model"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block font-display text-sm tracking-wider text-foreground/60 mb-2">
                  PROJECT DETAILS *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[oklch(0.08_0.005_250)] border border-border px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-display text-sm tracking-wider bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
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
