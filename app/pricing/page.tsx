'use client';

import React from 'react';
import pricing from '@/data/pricing.json';
import PricingSection from '@/app/sections/PricingSection';
import WorkflowSection from '@/app/sections/WorkflowSection';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
            alt="Pricing Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">INVESTMENT</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">PRICING PACKAGES</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Transparent and structured packages for wedding cinema, corporate portfolios, fashion lookbooks, and high-fidelity product campaigns.
          </p>
        </div>
      </div>

      {/* Complete Pricing Packages */}
      <PricingSection pricing={pricing} />

      {/* Process Workflow Timeline */}
      <WorkflowSection />

      {/* Custom Quote CTA Banner */}
      <section className="bg-canvas-night text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center glass p-8 sm:p-12 rounded-2xl border border-accent/20 shadow-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wider mb-4 uppercase">NEED A CUSTOM PACKAGE?</h2>
          <p className="text-text-muted text-sm sm:text-base font-body font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Do you have a unique creative project, multi-city destination shoot, or custom enterprise campaign? Let&apos;s connect to design a tailored package that fits your exact requirements.
          </p>
          <Link
            href="/contact"
            className="btn-gold inline-block px-10 py-4 font-heading text-xs font-semibold tracking-widest uppercase"
          >
            REQUEST A CUSTOM QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
