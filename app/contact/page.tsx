'use client';

import React from 'react';
import social from '@/data/social.json';
import ContactSection from '@/app/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"
            alt="Contact Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">GET IN TOUCH</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">BOOK A SESSION</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Ready to bring your creative story to life? Contact us today to secure your date and plan your shoot.
          </p>
        </div>
      </div>

      {/* Complete Contact Section Form */}
      <ContactSection contact={social.contact} />
    </div>
  );
}
