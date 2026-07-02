'use client';

import React from 'react';
import social from '@/data/social.json';
import VideographyShowcase from '@/app/sections/VideographyShowcase';
import ShowreelSection from '@/app/sections/ShowreelSection';
import YouTubeSection from '@/app/sections/YouTubeSection';

export default function VideographyPage() {
  // Format videos list
  const formattedVideos = social.youtube.videos.map((v: { id: string; youtubeId: string; title: string; views: string; thumbnail: string; }) => ({
    ...v,
    category: "Cinematography",
    description: "A showcase of cinematic storytelling and visual direction."
  }));

  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80"
            alt="Videography Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">FILMMAKING</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">CINEMATOGRAPHY FILMS</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Watch our cinematic wedding films, commercial ads, high-speed automobile promos, travel films, and FPV drone reels.
          </p>
        </div>
      </div>

      {/* Showreel Slider Teasers */}
      <ShowreelSection videos={social.youtube.videos} />

      {/* Widescreen Video Showcase */}
      <VideographyShowcase videos={formattedVideos} />

      {/* YouTube Channel Stats & Playlists */}
      <YouTubeSection
        channel={social.youtube.channel}
        subscribers={social.youtube.subscribers}
        totalViews={social.youtube.totalViews}
        videos={social.youtube.videos}
      />
    </div>
  );
}
