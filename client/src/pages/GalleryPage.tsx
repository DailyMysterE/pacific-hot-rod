/*
 * DESIGN: Premium Blue & White — Industrial Dark
 * - Full-page gallery with masonry-style grid
 * - Lightbox with keyboard navigation
 * - Consistent with homepage design language
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const allImages = [
  { src: '/images/gallery_036_update.webp', alt: 'Classic Mustang restoration — full respray', category: 'Paint & Bodywork' },
  { src: '/images/gallery_035_update.webp', alt: 'Classic Mustang side profile', category: 'Paint & Bodywork' },
  { src: '/images/gallery_037_update.webp', alt: 'Classic muscle car matte blue finish', category: 'Custom Build' },
  { src: '/images/gallery_034_update.webp', alt: 'Chevrolet 454 SS truck — completed', category: 'Restoration' },
  { src: '/images/gallery_033_update.webp', alt: 'Chevrolet 454 SS front detail', category: 'Restoration' },
  { src: '/images/gallery_031.webp', alt: 'Classic Chevrolet pickup', category: 'Restoration' },
  { src: '/images/gallery_026.webp', alt: 'Vintage pickup bodywork in progress', category: 'Paint & Bodywork' },
  { src: '/images/gallery_025.webp', alt: 'Classic truck primer stage', category: 'Paint & Bodywork' },
  { src: '/images/gallery_024.webp', alt: 'Classic car restoration project', category: 'Restoration' },
  { src: '/images/gallery_023.webp', alt: 'Custom fabrication detail work', category: 'Custom Build' },
  { src: '/images/gallery_013.webp', alt: 'Classic Ford Galaxie', category: 'Restoration' },
  { src: '/images/gallery_011.webp', alt: 'Hot rod build in progress', category: 'Custom Build' },
  { src: '/images/gallery_010.webp', alt: 'Classic car restoration', category: 'Restoration' },
  { src: '/images/gallery_003.webp', alt: 'Chevrolet 454 SS in paint booth', category: 'Paint & Bodywork' },
  { src: '/images/gallery_001.webp', alt: 'Classic truck black finish', category: 'Paint & Bodywork' },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = allImages;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const next = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % filtered.length);
  }, [selectedIndex, filtered.length]);

  const prev = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
  }, [selectedIndex, filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeLightbox, next, prev]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.06_0.005_250)] text-foreground">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors duration-200 font-display text-sm tracking-[0.15em] uppercase group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Header */}
          <div className="mb-10 md:mb-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl mb-4"
            >
              PROJECT <span className="text-primary">GALLERY</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-foreground/60 text-lg max-w-xl"
            >
              Every build tells a story. Browse our completed restorations, custom builds, and paint work.
            </motion.p>
          </div>

          {/* Masonry-style Grid */}
          <motion.div
            layout
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  className="break-inside-avoid mb-3 md:mb-4 relative group cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full block transition-transform duration-500 group-hover:scale-105"
                  />

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-primary text-white hover:text-primary transition-all duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-primary text-white hover:text-primary transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-primary text-white hover:text-primary transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[selectedIndex].src}
                alt={filtered[selectedIndex].alt}
                className="max-h-[75vh] max-w-full object-contain shadow-2xl"
              />
              <div className="text-center">
                <span className="text-primary font-display text-xs tracking-[0.2em] uppercase mr-3">{filtered[selectedIndex].category}</span>
                <span className="text-white/70 text-sm">{filtered[selectedIndex].alt}</span>
              </div>
              <div className="text-white/30 font-display text-xs tracking-widest">
                {selectedIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
