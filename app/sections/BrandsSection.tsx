'use client';

import React from 'react';

interface BrandsSectionProps {
  brands: string[];
}

export default function BrandsSection({ brands }: BrandsSectionProps) {
  // Duplicate brands array for infinite looping marquee
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-canvas-night text-white py-16 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="text-center sm:text-left">
          <span className="text-accent tracking-[0.25em] text-[10px] font-semibold uppercase block mb-1">COLLABORATIONS</span>
          <h3 className="font-display text-xl sm:text-2xl text-white/50 tracking-widest uppercase">BRANDS WE&apos;VE WORKED WITH</h3>
        </div>
      </div>

      {/* Marquee Outer Container */}
      <div className="relative w-full flex overflow-x-hidden border-y border-white/5 bg-canvas-soft/40 py-8">
        {/* Left/Right fading gradient scrims */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-canvas-night to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-canvas-night to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner Track */}
        <div className="flex gap-16 items-center animate-marquee shrink-0 whitespace-nowrap min-w-full">
          {marqueeBrands.map((brand, idx) => (
            <span
              key={idx}
              className="font-display text-4xl sm:text-5xl text-white/30 hover:text-accent font-bold tracking-widest transition-all duration-300 select-none cursor-default uppercase"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
