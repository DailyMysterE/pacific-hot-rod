/*
 * DESIGN: Premium Blue & White Aesthetic
 * Pacific Hot Rod - Premium Automotive Restoration Website
 * 
 * Design Philosophy:
 * - Deep charcoal blacks (#0D0D0D) - automotive paint finish
 * - Pure white (#FFFFFF) - clean, modern accents
 * - Royal Blue (#1d32a0) - premium, professional, trustworthy
 * - Oswald for headlines, Source Sans 3 for body
 * - Asymmetric layouts with full-bleed imagery
 * - Heavy, mechanical animations
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';

import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent md:mt-8" />
        <Services />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Gallery />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <About />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Testimonials />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Contact />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
