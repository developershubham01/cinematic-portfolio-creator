'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, CheckCircle } from 'lucide-react';

interface AwardItem {
  title: string;
  org: string;
  year: number;
}

interface AwardsSectionProps {
  awards: AwardItem[];
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  // Map index to award icon
  const getAwardIcon = (index: number) => {
    switch (index % 4) {
      case 0: return <Trophy className="text-accent group-hover:scale-110 transition-transform duration-300" size={32} />;
      case 1: return <Award className="text-highlight group-hover:scale-110 transition-transform duration-300" size={32} />;
      case 2: return <Medal className="text-accent group-hover:scale-110 transition-transform duration-300" size={32} />;
      default: return <CheckCircle className="text-highlight group-hover:scale-110 transition-transform duration-300" size={32} />;
    }
  };

  return (
    <section className="relative bg-canvas-soft border-y border-white/5 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">RECOGNITION</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">AWARDS & CREDENTIALS</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="glass-card p-6 rounded-xl border border-white/5 bg-black/30 text-center hover:border-accent/20 transition-all duration-300 group flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="mb-4 bg-white/5 p-4 rounded-full border border-white/10 shrink-0">
                {getAwardIcon(idx)}
              </div>

              {/* Award Title */}
              <h3 className="font-heading text-sm font-bold text-white tracking-wider mb-2 uppercase group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>

              {/* Organisation and Year */}
              <p className="text-xs text-text-muted font-body leading-relaxed font-light mb-1 mt-auto">
                {item.org}
              </p>
              <span className="text-[10px] text-white/40 font-heading font-semibold tracking-wider block mt-1">
                YEAR: {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
