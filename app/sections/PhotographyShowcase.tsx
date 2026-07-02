'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '@/app/components/Lightbox';
import BeforeAfter from '@/app/components/BeforeAfter';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Category {
  name: string;
  slug: string;
  images: GalleryImage[];
}

interface BeforeAfterItem {
  id: number;
  title: string;
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}

interface PhotographyShowcaseProps {
  categories: Category[];
  beforeAfter: BeforeAfterItem[];
  limit?: number; // Optional limit for Home page
}

export default function PhotographyShowcase({ categories, beforeAfter, limit }: PhotographyShowcaseProps) {
  const [selectedSlug, setSelectedSlug] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Flattened list of images or filtered based on category selection
  const activeImages = useMemo(() => {
    if (selectedSlug === 'all') {
      // Flatten all images across categories and remove duplicates (by src or id)
      const all: GalleryImage[] = [];
      const seen = new Set();
      categories.forEach((cat) => {
        cat.images.forEach((img) => {
          if (!seen.has(img.src)) {
            seen.add(img.src);
            all.push(img);
          }
        });
      });
      return limit ? all.slice(0, limit) : all;
    } else {
      const match = categories.find((cat) => cat.slug === selectedSlug);
      const images = match ? match.images : [];
      return limit ? images.slice(0, limit) : images;
    }
  }, [selectedSlug, categories, limit]);

  const handleOpenLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (currentIdx < activeImages.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  return (
    <section id="photography" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">GALLERY</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">CAPTURING TIMELESS MOMENTS</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedSlug('all')}
            className={`px-6 py-2.5 rounded-full text-xs font-heading font-medium tracking-widest transition-all duration-300 ${
              selectedSlug === 'all'
                ? 'bg-accent text-black border border-accent'
                : 'bg-canvas-soft border border-white/10 hover:border-accent/40 text-text-muted hover:text-white'
            }`}
          >
            ALL CAPTURES
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedSlug(cat.slug)}
              className={`px-6 py-2.5 rounded-full text-xs font-heading font-medium tracking-widest transition-all duration-300 ${
                selectedSlug === cat.slug
                  ? 'bg-accent text-black border border-accent'
                  : 'bg-canvas-soft border border-white/10 hover:border-accent/40 text-text-muted hover:text-white'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry style with CSS columns */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {activeImages.map((img, idx) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden rounded-xl border border-white/5 bg-canvas-soft group cursor-pointer"
                onClick={() => handleOpenLightbox(idx)}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-heading tracking-widest mb-1">VIEW CAPTURE</span>
                  <p className="text-white font-body text-sm font-light truncate">{img.alt}</p>
                </div>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Before / After Slider Sub-section */}
        {beforeAfter && beforeAfter.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <span className="text-highlight tracking-[0.25em] text-xs font-semibold uppercase block mb-3">RETROSPECTIVE</span>
              <h3 className="font-display text-3xl sm:text-5xl text-white tracking-widest">RAW VS. COLOR GRADED</h3>
              <p className="text-text-muted font-body text-sm font-light mt-3 max-w-xl mx-auto">
                Explore the power of post-production. Slide the divider to see the transformation from our flat camera sensor raw state to the stylized cinematic grade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beforeAfter.map((item) => (
                <div key={item.id} className="space-y-4">
                  <h4 className="font-heading text-sm font-medium text-white/80 tracking-wide">{item.title}</h4>
                  <BeforeAfter
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel={item.beforeLabel}
                    afterLabel={item.afterLabel}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Integration */}
        <Lightbox
          images={activeImages}
          currentIndex={currentIdx}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
}
