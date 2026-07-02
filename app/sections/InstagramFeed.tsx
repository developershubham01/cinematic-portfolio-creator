'use client';

import React from 'react';
import { Heart, Play } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

interface PostItem {
  id: number;
  image: string;
  likes: number;
  type: string;
}

interface InstagramFeedProps {
  handle: string;
  followers: string;
  posts: PostItem[];
}

export default function InstagramFeed({ handle, followers, posts }: InstagramFeedProps) {
  return (
    <section className="relative bg-canvas-soft text-white py-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
          <div>
            <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">INSTAGRAM FEED</span>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-widest leading-tight">
              {handle.toUpperCase()}
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent md:mx-0 mt-4" />
          </div>

          <div className="flex items-center gap-6 glass p-4 rounded-xl border border-white/10 shrink-0">
            <FaInstagram size={28} className="text-accent" />
            <div>
              <span className="text-xl font-bebas font-semibold text-accent tracking-wide">{followers}</span>
              <p className="text-[10px] text-white/50 font-heading tracking-widest uppercase mt-0.5">INSTAGRAM FOLLOWERS</p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-accent hover:bg-transparent text-black hover:text-white border border-accent rounded-full font-heading text-[10px] font-semibold tracking-widest uppercase transition-all duration-300"
            >
              FOLLOW US
            </a>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {posts.map((post) => (
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              className="relative aspect-square rounded-xl overflow-hidden border border-white/5 bg-black group"
            >
              <img
                src={post.image}
                alt="Instagram post thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-1.5 text-accent">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-sm font-heading font-semibold">{post.likes.toLocaleString()}</span>
                </div>
                <FaInstagram size={20} className="text-white/60" />
              </div>

              {/* Reel type badge overlay */}
              {post.type === 'reel' && (
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs p-1.5 rounded-full text-white z-20 border border-white/10 shadow-md">
                  <Play size={10} fill="currentColor" />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
