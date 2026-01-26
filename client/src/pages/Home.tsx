/*
 * DESIGN: Industrial Heritage Aesthetic
 * Pacific Hot Rod - Premium Automotive Restoration Website
 * 
 * Design Philosophy:
 * - Deep charcoal blacks (#0D0D0D) - automotive paint finish
 * - Chrome silver (#C0C0C0) - polished metal accents
 * - Racing amber/gold (#D4A84B) - warm, nostalgic, premium
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
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
