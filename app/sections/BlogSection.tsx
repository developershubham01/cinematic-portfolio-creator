'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogSectionProps {
  posts: BlogPost[];
  limit?: number; // Optional limit for Home page
}

export default function BlogSection({ posts, limit }: BlogSectionProps) {
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <section id="blog" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Background glow shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">JOURNAL</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">LATEST ARTICLES & TIPS</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={post.id}
              className="glass-card rounded-xl overflow-hidden border border-white/5 bg-canvas-soft/40 flex flex-col group h-full transition-all duration-300 hover:border-accent/15"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/50 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent text-black text-[9px] font-heading font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[10px] text-white/40 font-heading tracking-widest uppercase mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-heading text-base font-bold text-white tracking-wide mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-xs text-text-muted font-body leading-relaxed font-light mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-heading font-bold text-white tracking-widest uppercase group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5">
                    READ ARTICLE <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                  <span className="text-[10px] text-white/30 font-body font-light">
                    By {post.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA for Home page */}
        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-ghost inline-block px-8 py-3 text-xs font-heading font-medium tracking-widest"
            >
              READ ALL ARTICLES
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
