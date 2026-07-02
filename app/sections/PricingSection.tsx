'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

interface PackageItem {
  id: number;
  name: string;
  category: string;
  price: string;
  currency: string;
  features: string[];
  duration: string;
  deliverables: string;
  popular: boolean;
}

interface PricingSectionProps {
  pricing: PackageItem[];
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  const categories = ['Wedding', 'Corporate', 'Fashion', 'Product', 'Drone'];
  const [activeTab, setActiveTab] = useState('Wedding');

  const filteredPricing = pricing.filter(
    (item) => item.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <section id="pricing" className="relative bg-canvas-soft text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Visual background gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">PRICING</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">INVESTMENT IN YOUR MEMORIES</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 border-b-2 font-heading text-xs tracking-widest font-medium uppercase transition-all duration-300 ${
                activeTab === cat
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-muted hover:text-white'
              }`}
            >
              {cat.toUpperCase()} PACKS
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredPricing.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`glass-card rounded-2xl border flex flex-col justify-between p-6 relative transition-all duration-300 bg-black/50 ${
                  item.popular
                    ? 'border-accent shadow-glow scale-[1.02] z-10'
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-black text-[9px] font-heading font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star size={10} fill="currentColor" /> MOST POPULAR
                  </div>
                )}

                {/* Card Title & Pricing */}
                <div className="mb-6">
                  <h4 className="font-heading text-base font-bold text-white tracking-widest uppercase mb-4">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-xl text-accent font-heading font-medium">{item.currency}</span>
                    <span className="text-4xl sm:text-5xl text-accent font-bebas tracking-wide font-semibold leading-none">
                      {item.price}
                    </span>
                  </div>
                  <span className="text-[10px] text-white/40 font-heading tracking-widest uppercase block">
                    SESSION LENGTH: {item.duration}
                  </span>
                </div>

                {/* Features List */}
                <div className="mb-8 flex-grow pt-6 border-t border-white/5">
                  <ul className="text-xs text-text-muted space-y-3 font-body">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check size={14} className="text-accent mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables summary & CTA */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <p className="text-[10px] text-white/50 font-body leading-relaxed mb-6 font-light">
                    <strong className="text-white font-medium uppercase font-heading text-[9px] tracking-wider block mb-1">
                      DELIVERABLES:
                    </strong>
                    {item.deliverables}
                  </p>
                  <Link
                    href="/contact"
                    className={`btn-ghost w-full block text-center py-3 text-xs font-heading font-medium tracking-widest ${
                      item.popular ? 'bg-accent !text-black border-accent hover:bg-transparent hover:!text-white' : ''
                    }`}
                  >
                    BOOK THIS PACKAGE
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
