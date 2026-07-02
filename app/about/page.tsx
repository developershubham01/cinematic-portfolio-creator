'use client';

import React from 'react';
import photographer from '@/data/photographer.json';
import AboutSection from '@/app/sections/AboutSection';
import AwardsSection from '@/app/sections/AwardsSection';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"
            alt="About Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">JOURNEY</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">ABOUT THE ARTIST</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Discover the creative vision, professional journey, and credentials behind our visual storytelling.
          </p>
        </div>
      </div>

      {/* Narrative Journey Detail */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider uppercase border-b border-white/10 pb-4">
              THE CREATIVE VISION
            </h2>
            <p className="text-text-muted text-sm sm:text-base font-body font-light leading-relaxed">
              Arjun Kapoor&apos;s work sits at the intersection of high-fashion editorial polish and raw, photo-documentary emotional authenticity. Inspired by the deep dynamic ranges of cinema and the classic composition styles of National Geographic, he focuses on capturing moments exactly as they feel—preserving warmth, shadow depth, and genuine connection.
            </p>
            <p className="text-text-muted text-sm sm:text-base font-body font-light leading-relaxed">
              Whether directing a large commercial production, navigating drone flythroughs over coastal waves, or culling candid frames at a royal wedding, Arjun treats each canvas as a unique visual story. His philosophy centers on negating unnecessary digital noise, letting natural light, clean geometry, and high-fidelity colors speak for themselves.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider uppercase border-b border-white/10 pb-4">
              THE PROFESSIONAL JOURNEY
            </h2>
            <p className="text-text-muted text-sm sm:text-base font-body font-light leading-relaxed">
              {photographer.journey}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core About & Awards Sections */}
      <AboutSection
        bio={photographer.bio}
        mission={photographer.mission}
        vision={photographer.vision}
        values={photographer.values}
        whyChooseMe={photographer.whyChooseMe}
        image={photographer.image}
      />

      <AwardsSection awards={photographer.awards} />
    </div>
  );
}
