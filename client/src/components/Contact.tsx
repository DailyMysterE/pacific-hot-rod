/*
 * DESIGN: Premium Blue & White
 * - Multi-step wizard form
 * - Premium step-by-step experience
 * - Enhanced visual hierarchy
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { toast } from 'sonner';

const steps = [
  { id: 1, title: 'Contact Info', description: 'Your details' },
  { id: 2, title: 'Vehicle Info', description: 'About your car' },
  { id: 3, title: 'Project Details', description: 'What you need' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px', amount: 0.1 });
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    serviceType: '',
    message: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Quote request sent! We\'ll be in touch within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      vehicleYear: '',
      vehicleMake: '',
      vehicleModel: '',
      serviceType: '',
      message: '',
      timeline: '',
    });
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name && formData.email;
    }
    if (currentStep === 2) {
      return formData.vehicleYear && formData.vehicleMake && formData.vehicleModel;
    }
    return true;
  };

  return (
    <section id="contact" className="py-10 md:pt-28 md:pb-12 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.005_250)] to-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header - Centered */}
        <div className="text-center mb-8 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block text-primary-light text-base font-black md:text-lg md:font-black tracking-[0.15em] md:tracking-[0.3em] mb-4 tagline-bold"
          >
            READY TO START?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6"
          >
            LET'S BRING YOUR <span className="text-primary">CLASSIC</span> BACK TO LIFE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-2xl text-foreground/60 max-w-2xl mx-auto font-medium"
          >
            Fill out the form below and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Multi-Step Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-8 md:mb-10"
        >
          {/* Step Indicator */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    {/* Step Circle */}
                    <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      currentStep > step.id 
                        ? 'bg-primary border-primary' 
                        : currentStep === step.id 
                        ? 'bg-primary/20 border-primary' 
                        : 'bg-[oklch(0.10_0.008_250)] border-border/50'
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                      ) : (
                        <span className={`font-display text-lg md:text-xl font-bold ${
                          currentStep === step.id ? 'text-primary' : 'text-foreground/40'
                        }`}>
                          {step.id}
                        </span>
                      )}
                    </div>
                    {/* Step Label */}
                    <div className="mt-2 md:mt-3 text-center">
                      <div className={`font-display text-xs md:text-sm font-bold tracking-wider ${
                        currentStep >= step.id ? 'text-primary' : 'text-foreground/40'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-foreground/50 hidden md:block">{step.description}</div>
                    </div>
                  </div>
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 md:mx-4 transition-all duration-300 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-border/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="bg-[oklch(0.10_0.008_250)] border-2 border-primary/20 p-6 md:p-10 shadow-2xl">
            <AnimatePresence mode="wait">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 text-center">
                    <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">Your Contact Information</h3>
                    <p className="text-sm md:text-base text-foreground/60">How can we reach you?</p>
                  </div>

                  <div className="space-y-5">
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
                        className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
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
                        className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                        placeholder="(604) 123-4567"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Vehicle Info */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 text-center">
                    <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">Tell Us About Your Vehicle</h3>
                    <p className="text-sm md:text-base text-foreground/60">What classic are we working on?</p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                          YEAR *
                        </label>
                        <input
                          type="text"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          required
                          className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                          placeholder="1969"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                          MAKE *
                        </label>
                        <input
                          type="text"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          required
                          className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                          placeholder="Chevrolet"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                          MODEL *
                        </label>
                        <input
                          type="text"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          required
                          className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                          placeholder="Camaro"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                        SERVICE TYPE *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="paint-bodywork">Custom Paint & Bodywork</option>
                        <option value="frame-off">Full Frame-Off Restoration</option>
                        <option value="hot-rod">Hot Rod & Custom Build</option>
                        <option value="collision">Collision Repair</option>
                        <option value="fabrication">Custom Fabrication</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Project Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 text-center">
                    <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">Project Details</h3>
                    <p className="text-sm md:text-base text-foreground/60">Tell us what you're looking for</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                        PROJECT DESCRIPTION *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                        placeholder="Describe the work you need done, current condition of the vehicle, and any specific requirements..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display tracking-wider text-foreground/70 mb-2">
                        TIMELINE
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-4 py-4 text-base text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select your timeline...</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 gap-4">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`font-display text-sm md:text-base tracking-[0.15em] px-6 md:px-8 py-3 md:py-4 transition-all duration-300 flex items-center gap-2 ${
                  currentStep === 1 
                    ? 'opacity-0 pointer-events-none' 
                    : 'border-2 border-border/50 text-foreground/80 hover:border-primary hover:text-primary'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>BACK</span>
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="font-display text-sm md:text-base tracking-[0.15em] bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.message}
                  className="font-display text-sm md:text-base tracking-[0.15em] bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT REQUEST</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              )}
            </div>
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
            <div>
              <div className="text-xs tracking-wider text-foreground/40 font-display">CALL US</div>
              <div className="text-base md:text-lg font-medium">604-217-2379</div>
            </div>
          </a>

          <a
            href="mailto:info@pacifichotrod.com"
            className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs tracking-wider text-foreground/40 font-display">EMAIL US</div>
              <div className="text-base md:text-lg font-medium">info@pacifichotrod.com</div>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=5650+Production+Way+Langley+BC+Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs tracking-wider text-foreground/40 font-display">VISIT US</div>
              <div className="text-base md:text-lg font-medium">Langley, BC</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
