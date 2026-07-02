'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ShowreelPlayer from '@/app/components/ShowreelPlayer';

interface VideoItem {
  id: string | number;
  youtubeId: string;
  title: string;
  category: string;
  views?: string;
  thumbnail: string;
  duration?: string;
  description?: string;
}

interface VideographyShowcaseProps {
  videos: VideoItem[];
}

export default function VideographyShowcase({ videos }: VideographyShowcaseProps) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setPlayerOpen(true);
  };

  // The first video in the list acts as the featured film
  const featuredVideo = videos[0];
  const gridVideos = videos.slice(1);

  return (
    <section id="videography" className="relative bg-canvas-soft text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Background visual glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">CINEMATOGRAPHY</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">CINEMATIC STORYTELLING</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Featured Film Hero Card */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 mb-16 cursor-pointer group bg-black"
            onClick={() => handlePlayVideo(featuredVideo)}
          >
            {/* Thumbnail */}
            <img
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-102 no-select"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full border border-accent bg-black/60 backdrop-blur-sm flex items-center justify-center text-accent shadow-glow transition-all duration-300"
              >
                <Play size={32} fill="currentColor" className="ml-1" />
              </motion.div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="max-w-2xl">
                <span className="text-accent uppercase tracking-widest text-xs font-heading font-semibold mb-2 block">
                  FEATURED WORK • {featuredVideo.category.toUpperCase()}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl text-white tracking-wider mb-3 leading-none">
                  {featuredVideo.title.toUpperCase()}
                </h3>
                <p className="text-text-muted text-sm font-body font-light leading-relaxed">
                  {featuredVideo.description || "A breathtaking showcase of cinematic visuals, capturing stories with premium dynamic ranges, color science, and immersive audio styling."}
                </p>
              </div>
              {featuredVideo.views && (
                <div className="text-right">
                  <span className="text-xs text-white/40 block font-heading uppercase tracking-widest">VIEWS GENERATED</span>
                  <span className="text-xl text-accent font-bebas tracking-wide font-semibold">{featuredVideo.views}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridVideos.map((video) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={video.id}
              className="relative overflow-hidden rounded-xl border border-white/5 bg-canvas-night cursor-pointer group"
              onClick={() => handlePlayVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10" />

                {/* Micro play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center text-black">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 border-t border-white/5">
                <span className="text-xs text-accent font-heading font-medium tracking-widest uppercase mb-1.5 block">
                  {video.category}
                </span>
                <h4 className="font-heading text-sm font-semibold text-white tracking-wide group-hover:text-accent transition-colors duration-300 truncate">
                  {video.title}
                </h4>
                {video.views && (
                  <p className="text-xs text-white/40 mt-1 font-body font-light">
                    {video.views} Views
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showreel Player Modal */}
        {selectedVideo && (
          <ShowreelPlayer
            isOpen={playerOpen}
            onClose={() => setPlayerOpen(false)}
            videoUrl={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
            title={selectedVideo.title}
          />
        )}
      </div>
    </section>
  );
}
