/*
 * DESIGN: Premium Blue & White
 * - Simple gallery grid without filters
 * - Larger text sizes
 * - Elegant lightbox
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery_036_update.webp', alt: 'Classic Mustang restoration', width: 800, height: 600 },
  { src: '/images/gallery_035_update.webp', alt: 'Classic Mustang side view', width: 800, height: 600 },
  { src: '/images/gallery_037_update.webp', alt: 'Classic muscle car matte blue', width: 800, height: 600 },
  { src: '/images/gallery_034_update.webp', alt: 'Chevrolet 454 SS truck', width: 800, height: 600 },
  { src: '/images/gallery_033_update.webp', alt: 'Chevrolet 454 SS front', width: 800, height: 600 },
  { src: '/images/gallery_031.webp', alt: 'Classic Chevrolet pickup', width: 800, height: 600 },
  { src: '/images/gallery_026.webp', alt: 'Vintage pickup body work', width: 800, height: 600 },
  { src: '/images/gallery_025.webp', alt: 'Classic truck primer stage', width: 800, height: 600 },
  { src: '/images/gallery_013.webp', alt: 'Classic Ford Galaxie', width: 800, height: 600 },
  { src: '/images/gallery_003.webp', alt: 'Chevrolet 454 SS paint booth', width: 800, height: 600 },
  { src: '/images/gallery_001.webp', alt: 'Classic truck black finish', width: 800, height: 600 },
  { src: '/images/gallery_010.webp', alt: 'Classic car restoration', width: 800, height: 600 },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px 0px 0px', amount: 0 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-10 md:pt-28 md:pb-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_250)]" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="inline-block text-primary text-base font-black md:text-lg md:font-black tracking-[0.15em] md:tracking-[0.3em] mb-3 md:mb-4 tagline-bold"
          >
            OUR WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.03, ease: [0.4, 0, 0.2, 1] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl"
          >
            PROJECT GALLERY
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.25, delay: index * 0.015, ease: [0.4, 0, 0.2, 1] }}
              className="group relative aspect-square overflow-hidden bg-[oklch(0.10_0.008_250)] cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.005_250)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover overlay with plus icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[oklch(0.06_0.005_250)]/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={galleryImages[selectedImage].width}
                height={galleryImages[selectedImage].height}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50">
              <span className="font-display text-sm text-primary">
                {selectedImage + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
