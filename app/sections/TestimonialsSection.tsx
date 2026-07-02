'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
  date: string;
  videoUrl?: string;
}

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-16 gap-6">
          <div className="text-center sm:text-left">
            <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">TESTIMONIALS</span>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">WHAT OUR CLIENTS SAY</h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent sm:mx-0 mt-6" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-canvas-soft border border-white/5 text-white/70 hover:text-accent hover:border-accent transition-all duration-300 shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-canvas-soft border border-white/5 text-white/70 hover:text-accent hover:border-accent transition-all duration-300 shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 no-scrollbar scroll-smooth"
        >
          {testimonials.map((test) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={test.id}
              className="w-full sm:w-[450px] shrink-0 snap-start glass-card p-8 rounded-2xl border border-white/5 bg-black/40 flex flex-col justify-between relative"
            >
              {/* Giant quote icon background */}
              <div className="absolute top-6 right-6 text-white/5 select-none pointer-events-none">
                <Quote size={56} fill="currentColor" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex text-accent gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-text-muted leading-relaxed font-body font-light mb-8 italic">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-accent/20 no-select"
                />
                <div>
                  <h4 className="font-heading text-sm font-semibold text-white tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-white/50 font-body">
                    {test.role}, {test.company}
                  </p>
                </div>
                <span className="text-[9px] text-white/30 font-body ml-auto shrink-0">
                  {test.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
