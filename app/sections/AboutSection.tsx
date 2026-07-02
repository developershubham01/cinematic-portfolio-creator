'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Award, Compass, Shield } from 'lucide-react';

interface AboutProps {
  bio: string;
  mission: string;
  vision: string;
  values: string[];
  whyChooseMe: string[];
  image: string;
}

export default function AboutSection({ bio, mission, vision, values, whyChooseMe, image }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">ABOUT ME</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">THE STORY BEHIND THE LENS</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column: Image with details badge */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-highlight rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-canvas-soft">
              <img
                src={image}
                alt="Nitin Kewat Portfolio Portrait"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 no-select"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg font-semibold text-white">NITIN KEWAT</h4>
                  <p className="text-xs text-text-muted">Master Visual Storyteller</p>
                </div>
                <div className="text-right">
                  <div className="flex text-accent mb-1 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-accent font-semibold tracking-wider font-heading">DGCA CERTIFIED PILOT</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & Focus */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-8">
            <div>
              <p className="font-body text-text-muted text-base leading-relaxed mb-6">
                {bio}
              </p>
            </div>

            {/* Mission & Vision Tabs / Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase font-heading">OUR MISSION</span>
                <p className="text-sm text-text-muted leading-relaxed font-body">
                  {mission}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-highlight uppercase font-heading">OUR VISION</span>
                <p className="text-sm text-text-muted leading-relaxed font-body">
                  {vision}
                </p>
              </div>
            </div>

            {/* Core Values list */}
            <div className="pt-4">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-heading block mb-3">CORE VALUES</span>
              <div className="flex flex-wrap gap-3">
                {values.map((val, idx) => (
                  <span key={idx} className="bg-canvas-soft border border-white/10 px-4 py-2 rounded-full text-xs text-text-muted font-body tracking-wider flex items-center gap-2">
                    <Check size={12} className="text-accent" /> {val}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Choose Me section */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-heading block mb-4">WHY CHOOSE ME</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseMe.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/10 p-1.5 rounded-lg text-accent">
                      {idx % 4 === 0 && <Award size={14} />}
                      {idx % 4 === 1 && <Compass size={14} />}
                      {idx % 4 === 2 && <Shield size={14} />}
                      {idx % 4 === 3 && <Star size={14} />}
                    </div>
                    <p className="text-sm text-text-muted font-body leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
