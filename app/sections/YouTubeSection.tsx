'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import ShowreelPlayer from '@/app/components/ShowreelPlayer';

interface VideoItem {
  id: string | number;
  youtubeId: string;
  title: string;
  views: string;
  thumbnail: string;
}

interface YouTubeSectionProps {
  channel: string;
  subscribers: string;
  totalViews: string;
  videos: VideoItem[];
}

export default function YouTubeSection({ channel, subscribers, totalViews, videos }: YouTubeSectionProps) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setPlayerOpen(true);
  };

  return (
    <section className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
          <div>
            <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">YOUTUBE CHANNEL</span>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-widest leading-tight">
              {channel.toUpperCase()}
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent md:mx-0 mt-4" />
          </div>

          {/* YouTube Stats Panel */}
          <div className="flex flex-wrap items-center justify-center gap-6 glass p-4 rounded-xl border border-white/10 shrink-0">
            <FaYoutube size={28} className="text-[#FF0000]" />
            <div className="text-left">
              <span className="text-lg font-bebas font-semibold text-accent tracking-wide">{subscribers}</span>
              <p className="text-[10px] text-white/50 font-heading tracking-widest uppercase mt-0.5">SUBSCRIBERS</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
            <div className="text-left">
              <span className="text-lg font-bebas font-semibold text-accent tracking-wide">{totalViews}</span>
              <p className="text-[10px] text-white/50 font-heading tracking-widest uppercase mt-0.5">VIEWS GENERATED</p>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#FF0000] hover:bg-transparent text-white border border-[#FF0000] rounded-full font-heading text-[10px] font-semibold tracking-widest uppercase transition-all duration-300"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={video.id}
              className="glass-card rounded-xl overflow-hidden border border-white/5 bg-canvas-soft/40 cursor-pointer group"
              onClick={() => handlePlayVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Micro play button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full border border-white/30 bg-black/60 flex items-center justify-center text-white group-hover:text-accent group-hover:border-accent transition-all duration-300 shadow-md">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Views */}
              <div className="p-5 border-t border-white/5">
                <h4 className="font-heading text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-accent transition-colors duration-300 line-clamp-2 min-h-[36px]">
                  {video.title}
                </h4>
                <div className="flex items-center justify-between mt-3 text-[10px] text-white/40 font-body">
                  <span>YouTube Film</span>
                  <span>{video.views} Views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showreel Player */}
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
