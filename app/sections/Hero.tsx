'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  heroImage: string;
}

export default function Hero({ name, title, tagline, heroImage }: HeroProps) {
  // Floating animation for SVG icons
  const iconVariants = {
    animate1: {
      y: [0, -15, 0],
      rotate: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
    },
    animate2: {
      y: [0, 20, 0],
      rotate: [0, -15, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const }
    },
    animate3: {
      y: [0, -25, 0],
      x: [0, 10, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Media: High-quality Unsplash image acting as video fallback/poster */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cinematic Cameraman Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-hero-gradient z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Floating Camera SVGs */}
      <motion.div
        variants={iconVariants}
        animate="animate1"
        className="absolute top-1/4 left-10 md:left-20 z-20 text-accent/20 hidden sm:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
      </motion.div>
      <motion.div
        variants={iconVariants}
        animate="animate2"
        className="absolute bottom-1/4 right-10 md:right-24 z-20 text-highlight/20 hidden sm:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7a2 2 0 0 0-2-2h-4.24a2 2 0 0 1-1.42-.59l-2.28-2.28A2 2 0 0 0 11.64 1.5H12.36a2 2 0 0 0-1.42.59L8.66 4.37a2 2 0 0 1-1.42.59H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7Z"/><circle cx="12" cy="13" r="4"/></svg>
      </motion.div>
      <motion.div
        variants={iconVariants}
        animate="animate3"
        className="absolute top-1/3 right-1/4 z-20 text-accent/15 hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-5xl px-6 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 drop-shadow-md"
        >
          {title}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl sm:text-8xl md:text-9xl text-white tracking-widest leading-none mb-6 drop-shadow-lg"
        >
          {name.toUpperCase()}
        </motion.h1>

        {/* Sub-heading / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-lg sm:text-2xl text-text-muted max-w-2xl font-light tracking-wide mb-12 drop-shadow"
        >
          {tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center justify-center"
        >
          <Link href="/portfolio" className="btn-gold px-8 py-3.5 text-center font-heading font-medium tracking-wider w-full sm:w-auto text-sm transition-all duration-300">
            VIEW PORTFOLIO
          </Link>
          
          <Link href="/contact" className="btn-ghost px-8 py-3.5 text-center font-heading font-medium tracking-wider w-full sm:w-auto text-sm transition-all duration-300">
            BOOK A SHOOT
          </Link>

          <Link href="/videography" className="border border-white/20 hover:border-highlight text-white hover:text-highlight px-8 py-3.5 rounded-full font-heading font-medium tracking-wider w-full sm:w-auto text-sm bg-black/40 backdrop-blur-sm transition-all duration-300">
            WATCH SHOWREEL
          </Link>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white/50 hover:text-white"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </motion.div>
    </section>
  );
}
