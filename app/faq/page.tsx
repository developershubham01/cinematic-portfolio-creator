'use client';

import React from 'react';
import faq from '@/data/faq.json';
import FAQSection from '@/app/sections/FAQSection';

export default function FAQPage() {
  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
            alt="FAQ Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">HELP DESK</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Find answers to questions covering booking, payment schedules, travel, deliverables, editing revisions, permissions, and copyright.
          </p>
        </div>
      </div>

      {/* Complete Searchable FAQ Accordion */}
      <FAQSection faq={faq} />
    </div>
  );
}
