'use client';

import React, { useState } from 'react';
import testimonials from '@/data/testimonials.json';
import TestimonialsSection from '@/app/sections/TestimonialsSection';
import { Star, Play } from 'lucide-react';
import ShowreelPlayer from '@/app/components/ShowreelPlayer';

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

export default function TestimonialsPage() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<TestimonialItem | null>(null);

  const handlePlayVideo = (item: TestimonialItem) => {
    setSelectedVideo(item);
    setPlayerOpen(true);
  };

  const videoTestimonials = testimonials.filter((t) => t.videoUrl);

  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80"
            alt="Testimonials Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">KUDOS</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">CLIENT REVIEWS</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Read stories of love, brand journeys, and professional milestone campaigns shared by our wonderful clients.
          </p>
        </div>
      </div>

      {/* Video reviews section */}
      {videoTestimonials.length > 0 && (
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">CINEMATIC REVIEWS</span>
              <h2 className="font-display text-3xl sm:text-5xl text-white tracking-widest uppercase">VIDEO TESTIMONIALS</h2>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handlePlayVideo(item)}
                  className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-canvas-soft group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300 no-select"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />

                  {/* Centered play icon */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-accent bg-black/60 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  {/* Quote title */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black to-transparent">
                    <h4 className="font-heading text-sm font-bold text-white tracking-wider">{item.name}</h4>
                    <p className="text-[10px] text-accent/80 font-body uppercase tracking-wider mt-1">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Complete Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Review details grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-highlight tracking-[0.25em] text-xs font-semibold uppercase block mb-3">ARCHIVE</span>
            <h2 className="font-display text-3xl sm:text-5xl text-white tracking-widest uppercase">COMPLETE GOOGLE REVIEWS STYLE LIST</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="glass-card p-6 rounded-xl border border-white/5 bg-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-accent gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed font-body italic mb-6">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10 no-select"
                  />
                  <div>
                    <h4 className="font-heading text-xs font-bold text-white tracking-wider">{test.name}</h4>
                    <p className="text-[9px] text-white/40 font-body uppercase">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <ShowreelPlayer
          isOpen={playerOpen}
          onClose={() => setPlayerOpen(false)}
          videoUrl={selectedVideo.videoUrl || ''}
          title={`${selectedVideo.name} - Testimonial Video`}
        />
      )}
    </div>
  );
}
