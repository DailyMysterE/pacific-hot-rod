/*
 * DESIGN: Industrial Heritage Aesthetic
 * - Masonry-style gallery layout
 * - Hover effects with chrome border glow
 * - Lightbox functionality
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/gallery_036_update.jpg',
    alt: 'Classic Mustang restoration - metallic blue paint finish',
    category: 'Paint',
  },
  {
    src: '/images/gallery_035_update.jpg',
    alt: 'Classic Mustang side view - custom paint job',
    category: 'Paint',
  },
  {
    src: '/images/gallery_037_update.jpg',
    alt: 'Classic muscle car - matte blue finish in paint booth',
    category: 'Paint',
  },
  {
    src: '/images/gallery_034_update.jpg',
    alt: 'Chevrolet 454 SS truck - full restoration',
    category: 'Restoration',
  },
  {
    src: '/images/gallery_033_update.jpg',
    alt: 'Chevrolet 454 SS truck front view - completed project',
    category: 'Restoration',
  },
  {
    src: '/images/gallery_031.jpg',
    alt: 'Classic Chevrolet pickup - two-tone restoration',
    category: 'Restoration',
  },
  {
    src: '/images/gallery_026.jpg',
    alt: 'Vintage pickup truck - body restoration in progress',
    category: 'Bodywork',
  },
  {
    src: '/images/gallery_025.jpg',
    alt: 'Classic truck - primer stage restoration',
    category: 'Bodywork',
  },
  {
    src: '/images/gallery_013.jpg',
    alt: 'Classic Ford Galaxie - body restoration',
    category: 'Bodywork',
  },
  {
    src: '/images/gallery_003.jpg',
    alt: 'Chevrolet 454 SS - paint booth preparation',
    category: 'Paint',
  },
  {
    src: '/images/gallery_001.jpg',
    alt: 'Classic truck in paint booth - black finish',
    category: 'Paint',
  },
  {
    src: '/images/gallery_010.jpg',
    alt: 'Classic car rear view - restoration in progress',
    category: 'Bodywork',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_250)]" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-sm tracking-widest mb-4"
            >
              OUR WORK
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
            >
              PROJECT GALLERY
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground/60 text-lg"
            >
              Browse our portfolio of completed restorations and custom builds.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`font-display text-sm tracking-wider px-5 py-2 border transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-foreground/60 hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative cursor-pointer overflow-hidden ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_250)] via-transparent to-transparent opacity-60" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
                  
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500" />
                  
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 bg-[oklch(0.08_0.005_250)]/80 backdrop-blur-sm px-3 py-1 text-xs font-display tracking-wider text-primary">
                    {image.category}
                  </div>

                  {/* View icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary/90 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
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
            className="fixed inset-0 z-50 bg-[oklch(0.05_0.005_250)]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center bg-[oklch(0.12_0.008_250)] border border-border text-foreground/60 hover:text-primary hover:border-primary transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center bg-[oklch(0.12_0.008_250)] border border-border text-foreground/60 hover:text-primary hover:border-primary transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-sm tracking-wider text-foreground/60">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
