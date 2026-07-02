'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ShowreelPlayer from '@/app/components/ShowreelPlayer';

interface VideoItem {
  id: string | number;
  youtubeId: string;
  title: string;
  views: string;
  thumbnail: string;
}

interface ShowreelSectionProps {
  videos: VideoItem[];
}

export default function ShowreelSection({ videos }: ShowreelSectionProps) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setPlayerOpen(true);
  };

  // Fallback if no videos are passed
  const reels = videos && videos.length > 0 ? videos : [
    {
      id: 1,
      youtubeId: "dQw4w9WgXcQ",
      title: "Wedding Cinema Showreel 2024",
      views: "1.2M",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
    },
    {
      id: 2,
      youtubeId: "dQw4w9WgXcQ",
      title: "Commercial Film & Product Reel",
      views: "2.1M",
      thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
    },
    {
      id: 3,
      youtubeId: "dQw4w9WgXcQ",
      title: "Himalayan Destination Travel Reel",
      views: "890K",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
    },
    {
      id: 4,
      youtubeId: "dQw4w9WgXcQ",
      title: "DJI Inspire 3 Drone Aerial Reel",
      views: "450K",
      thumbnail: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80"
    }
  ];

  return (
    <section className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Decorative linear background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(17,24,39,0.3),rgba(0,0,0,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">SHOWREEL</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">WATCH OUR TEASERS</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Big Featured Play Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-glow mb-12 cursor-pointer group bg-black"
          onClick={() => handlePlayVideo(reels[0])}
        >
          <img
            src={reels[0].thumbnail}
            alt={reels[0].title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-102 no-select"
          />
          {/* Film Grain Texture Overlay */}
          <div className="absolute inset-0 bg-black/35 z-10" />

          {/* Central Pulsing Play Button */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 rounded-full border border-yellow-400/50 bg-black/70 backdrop-blur-sm flex items-center justify-center text-yellow-400 group-hover:border-yellow-400 transition-all duration-300 shadow-xl"
            >
              <Play size={40} fill="currentColor" className="ml-1.5" />
            </motion.div>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-black via-black/30 to-transparent">
            <span className="text-xs text-accent uppercase tracking-widest font-heading font-medium mb-1 block">
              PLAY FILM PREVIEW
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-white tracking-wide">
              {reels[0].title.toUpperCase()}
            </h3>
          </div>
        </motion.div>

        {/* Small reels grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reels.slice(1, 4).map((reel) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={reel.id}
              className="relative aspect-[3/2] sm:aspect-video rounded-xl overflow-hidden border border-white/5 bg-canvas-soft group cursor-pointer"
              onClick={() => handlePlayVideo(reel)}
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300 no-select"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Centered mini play icon */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/30 bg-black/60 flex items-center justify-center text-white group-hover:text-accent group-hover:border-accent transition-all duration-300">
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                <h4 className="font-heading text-xs sm:text-sm font-bold text-white tracking-wider truncate">
                  {reel.title}
                </h4>
                <p className="text-[10px] text-white/40 mt-1 font-body">
                  {reel.views} views
                </p>
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
