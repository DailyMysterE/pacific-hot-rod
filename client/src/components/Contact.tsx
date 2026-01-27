/*
 * DESIGN: Premium Blue & White
 * - Wizard-style booking form inspired by modern booking systems
 * - One question per step approach
 * - Clean card-based design with step indicators
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { toast } from 'sonner';

const steps = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
];

export default function Contact() {
  const ref = useRef(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px', amount: 0.1 });
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleInfo: '',
    serviceType: '',
    timeline: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Quote request sent! We\'ll be in touch within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      vehicleInfo: '',
      serviceType: '',
      timeline: '',
      budget: '',
      message: '',
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
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Auto-scroll to form card when step changes
  useEffect(() => {
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentStep]);

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '';
      case 2:
        return formData.email.trim() !== '';
      case 3:
        return formData.vehicleInfo.trim() !== '';
      case 4:
        return formData.serviceType !== '';
      case 5:
        return formData.message.trim() !== '';
      default:
        return false;
    }
  };

  return (
    <section id="contact" className="py-10 md:pt-28 md:pb-12 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.005_250)] to-[oklch(0.08_0.005_250)]" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header - Centered */}
        <div className="text-center mb-8 md:mb-12">
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

        {/* Wizard Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-8 md:mb-10"
        >
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center font-display font-bold text-sm md:text-base transition-all duration-300 ${
                  currentStep > step.id
                    ? 'bg-primary border-primary text-primary-foreground'
                    : currentStep === step.id
                    ? 'bg-primary/20 border-primary text-primary scale-110'
                    : 'bg-[oklch(0.10_0.008_250)] border-border/50 text-foreground/40'
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.label
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div ref={formCardRef} className="bg-[oklch(0.10_0.008_250)] border-2 border-primary/20 p-8 md:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              {/* Step 1: Name */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">What's your name?</h3>
                    <p className="text-sm md:text-base text-foreground/60">Let's start with the basics</p>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoFocus
                    className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-5 py-4 text-lg text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </motion.div>
              )}

              {/* Step 2: Email */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">How can we reach you?</h3>
                    <p className="text-sm md:text-base text-foreground/60">We'll send your quote here</p>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoFocus
                      className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-5 py-4 text-lg text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-5 py-4 text-lg text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="(604) 123-4567 (optional)"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Vehicle Info */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">Tell us about your vehicle</h3>
                    <p className="text-sm md:text-base text-foreground/60">Year, make, and model</p>
                  </div>
                  <input
                    type="text"
                    name="vehicleInfo"
                    value={formData.vehicleInfo}
                    onChange={handleChange}
                    autoFocus
                    className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-5 py-4 text-lg text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="e.g., 1969 Chevrolet Camaro SS"
                  />
                </motion.div>
              )}

              {/* Step 4: Service Type */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">What service do you need?</h3>
                    <p className="text-sm md:text-base text-foreground/60">Select the type of work</p>
                  </div>
                  <div className="grid gap-3">
                    {[
                      { value: 'paint-bodywork', label: 'Custom Paint & Bodywork' },
                      { value: 'frame-off', label: 'Full Frame-Off Restoration' },
                      { value: 'hot-rod', label: 'Hot Rod & Custom Build' },
                      { value: 'collision', label: 'Collision Repair' },
                      { value: 'fabrication', label: 'Custom Fabrication' },
                      { value: 'other', label: 'Other / Not Sure' },
                    ].map((service) => (
                      <button
                        key={service.value}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, serviceType: service.value }));
                        }}
                        className={`w-full text-left px-5 py-4 border-2 transition-all duration-200 ${
                          formData.serviceType === service.value
                            ? 'bg-primary/20 border-primary text-primary'
                            : 'bg-[oklch(0.06_0.005_250)] border-border/50 text-foreground hover:border-primary/50'
                        }`}
                      >
                        <span className="font-display text-base md:text-lg">{service.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 5: Project Details */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">Tell us about your project</h3>
                    <p className="text-sm md:text-base text-foreground/60">Any additional details that will help us</p>
                  </div>
                  <div className="space-y-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      autoFocus
                      rows={6}
                      className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-5 py-4 text-base text-foreground placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                      placeholder="Describe the work you need, current condition, timeline, budget, or any other important details..."
                    />
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-[oklch(0.06_0.005_250)] border-2 border-border/50 px-5 py-4 text-base text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    >
                      <option value="">Timeline (optional)</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="font-display text-base md:text-lg tracking-[0.15em] border-2 border-border/50 text-foreground/80 hover:border-primary hover:text-primary px-6 md:px-8 py-4 transition-all duration-300 flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>BACK</span>
                </button>
              )}
              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed() || isSubmitting}
                className="flex-1 font-display text-base md:text-lg tracking-[0.15em] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>{currentStep === steps.length ? 'SUBMIT REQUEST' : 'NEXT'}</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-center text-sm text-foreground/50 mt-6">
            We will do our best to get back to you within 24 hours!
          </p>
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
