/*
 * DESIGN: Ultra-Premium Industrial Heritage
 * - Compact gallery grid
 * - Minimal filter tabs
 * - Elegant lightbox
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery_036_update.jpg', alt: 'Classic Mustang restoration', category: 'Paint' },
  { src: '/images/gallery_035_update.jpg', alt: 'Classic Mustang side view', category: 'Paint' },
  { src: '/images/gallery_037_update.jpg', alt: 'Classic muscle car matte blue', category: 'Paint' },
  { src: '/images/gallery_034_update.jpg', alt: 'Chevrolet 454 SS truck', category: 'Restoration' },
  { src: '/images/gallery_033_update.jpg', alt: 'Chevrolet 454 SS front', category: 'Restoration' },
  { src: '/images/gallery_031.jpg', alt: 'Classic Chevrolet pickup', category: 'Restoration' },
  { src: '/images/gallery_026.jpg', alt: 'Vintage pickup body work', category: 'Bodywork' },
  { src: '/images/gallery_025.jpg', alt: 'Classic truck primer stage', category: 'Bodywork' },
  { src: '/images/gallery_013.jpg', alt: 'Classic Ford Galaxie', category: 'Bodywork' },
  { src: '/images/gallery_003.jpg', alt: 'Chevrolet 454 SS paint booth', category: 'Paint' },
  { src: '/images/gallery_001.jpg', alt: 'Classic truck black finish', category: 'Paint' },
  { src: '/images/gallery_010.jpg', alt: 'Classic car restoration', category: 'Bodywork' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Paint', 'Restoration', 'Bodywork'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.005_250)]" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header - Compact */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-[10px] tracking-[0.3em] mb-2"
            >
              OUR WORK
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-2xl md:text-3xl lg:text-4xl"
            >
              PROJECT GALLERY
            </motion.h2>
          </div>

          {/* Filter Tabs - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-1"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`font-display text-[10px] md:text-xs tracking-wider px-3 py-1.5 transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid - Compact 3x4 on mobile */}
        <motion.div
          layout
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 md:gap-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group relative cursor-pointer overflow-hidden aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300" />
                
                {/* Border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/60 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 md:left-6 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 md:right-6 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-xs tracking-wider text-foreground/50">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
