'use client';

import React from 'react';
import gallery from '@/data/gallery.json';
import PhotographyShowcase from '@/app/sections/PhotographyShowcase';

export default function PhotographyPage() {
  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
            alt="Photography Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">EXHIBITION</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">PHOTOGRAPHY ARCHIVE</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Browse our curated high-resolution photography collections including royal weddings, fashion editorials, wildlife art prints, and high-altitude drone shots.
          </p>
        </div>
      </div>

      {/* Full Photography Showcase Section */}
      <PhotographyShowcase
        categories={gallery.categories}
        beforeAfter={gallery.beforeAfter}
      />
    </div>
  );
}
