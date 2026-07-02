'use client';

import React, { useState, useMemo } from 'react';
import blog from '@/data/blog.json';
import BlogSection from '@/app/sections/BlogSection';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', 'Camera Reviews', 'Lighting Tips', 'Editing Tutorials', 'Travel Stories', 'Wedding Guides', 'Color Grading', 'Behind the Scenes', 'Drone Tips', 'Lens Reviews', 'Photography Tips'];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return blog;
    return blog.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=1200&q=80"
            alt="Blog Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">JOURNAL</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">ARTICLES & TUTORIALS</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Read camera gear analysis reviews, lighting guides, editing tutorials, travel stories, and drone pilot tips.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-[10px] font-heading font-medium tracking-widest transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-accent text-black border border-accent'
                  : 'bg-canvas-soft border border-white/5 hover:border-accent/40 text-text-muted hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Complete blog posts list */}
        <BlogSection posts={filteredPosts} />

        {filteredPosts.length === 0 && (
          <p className="text-center text-sm text-white/30 font-body py-12">
            No articles found matching this category.
          </p>
        )}
      </div>
    </div>
  );
}
