'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Camera, Film, Send } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      step: "01",
      title: "PLANNING",
      icon: <Eye size={24} />,
      description: "Every visual masterpiece starts with meticulous preparation and alignment.",
      items: ["Consultation & Creative Briefing", "Location Scouting & Weather Tracking", "Custom Mood Boards & Storyboarding", "Comprehensive Shot List Creation"]
    },
    {
      step: "02",
      title: "SHOOTING",
      icon: <Camera size={24} />,
      description: "On-set production using cinema-grade gear to capture raw, high-fidelity footage.",
      items: ["Multi-Angle Cine Camera Coverage", "Ultra-High-Res Prime Lens Captures", "DGCA-Licensed Drone Aerial Filming", "High-Definition 32-Bit Sound Capture"]
    },
    {
      step: "03",
      title: "EDITING",
      icon: <Film size={24} />,
      description: "Crafting the story flow, soundscapes, and color aesthetics in post-production.",
      items: ["Precision Narrative Cut assembly", "Log Color Correction & Grading", "Immersive Sound Effects & Foley", "Licensed Royalty-Free Soundtracks"]
    },
    {
      step: "04",
      title: "DELIVERY",
      icon: <Send size={24} />,
      description: "Sharing the premium finalized assets through secure online cloud spaces.",
      items: ["Redundant Cloud & Offline Backups", "Interactive Password-Protected Gallery", "4K Ultra-HD HDR Deliverables", "Premium Hardcopy Velvet Album Prints"]
    }
  ];

  return (
    <section className="relative bg-canvas-soft text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5 px-12 lg:px-24">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">WORKFLOW</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">HOW WE WORK</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-accent/0 via-accent/30 to-highlight/0 -translate-y-1/2 hidden md:block" />

          {steps.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx}
              className="glass-card p-6 rounded-xl border border-white/5 bg-black/40 hover:border-accent/25 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              {/* Step Number Circle */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black border border-accent/40 text-accent font-bebas text-lg tracking-wider w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                {item.step}
              </div>

              {/* Icon */}
              <div className="mt-4 mb-4 text-accent bg-accent/5 p-4 rounded-full border border-accent/10">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold tracking-widest text-white mb-2 uppercase">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-text-muted font-body mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* List items */}
              <ul className="text-[11px] text-text-muted/80 font-body text-left space-y-2 mt-auto w-full pt-4 border-t border-white/5">
                {item.items.map((sub, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
