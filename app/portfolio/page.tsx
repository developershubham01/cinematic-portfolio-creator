'use client';

import React, { useState, useMemo } from 'react';
import portfolio from '@/data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '@/app/components/Lightbox';
import { Search, Grid } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Extract unique categories
  const categories = ['All', 'Wedding', 'Pre Wedding', 'Fashion', 'Portrait', 'Travel', 'Commercial', 'Architecture', 'Product', 'Wildlife', 'Drone', 'Night', 'Macro', 'Black & White', 'Jewelry', 'Nature'];

  // Filter items
  const filteredPortfolio = useMemo(() => {
    return portfolio.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (currentIdx < filteredPortfolio.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  // Map gallery format for lightbox
  const lightboxImages = filteredPortfolio.map((item) => ({
    src: item.image,
    alt: item.title,
  }));

  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80"
            alt="Portfolio Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">WORK ARCHIVE</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">FEATURED PORTFOLIO</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Explore our curated catalog of award-winning imagery, commercial brand campaigns, and cinematic films.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tag..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-white/10 bg-canvas-soft text-white placeholder-white/20 text-sm focus:border-accent focus:outline-none transition-colors duration-300"
            />
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[10px] font-heading font-medium tracking-widest transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-accent text-black border border-accent'
                    : 'bg-canvas-soft border border-white/5 hover:border-accent/40 text-text-muted hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl overflow-hidden border border-white/5 bg-canvas-soft/40 cursor-pointer group flex flex-col justify-between"
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center text-black">
                      <Grid size={20} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-accent text-black text-[9px] font-heading font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-md z-20">
                    {item.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading text-base font-bold text-white tracking-wide mb-2 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted font-body leading-relaxed mb-4 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-auto">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-[9px] text-white/50 font-body uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPortfolio.length === 0 && (
          <p className="text-center text-sm text-white/30 font-body py-12">
            No projects found matching your search.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
