'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  faq: FaqItem[];
  limit?: number; // Optional limit for Home page
}

export default function FAQSection({ faq, limit }: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = ['All', 'Booking', 'Payment', 'Cancellation', 'Travel', 'Delivery', 'RAW Photos', 'Editing', 'Drone', 'Copyright', 'Commercial Rights'];

  // Filter items based on category selection & search query
  const filteredFaq = faq.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayFaq = limit ? filteredFaq.slice(0, limit) : filteredFaq;

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">FAQ</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">QUESTIONS & ANSWERS</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-lg mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-white/10 bg-canvas-soft text-white placeholder-white/20 text-sm focus:border-accent focus:outline-none transition-colors duration-300"
          />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-full text-[10px] font-heading font-medium tracking-widest transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-accent text-black border border-accent'
                  : 'bg-canvas-soft border border-white/5 hover:border-accent/40 text-text-muted hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {displayFaq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card rounded-xl border border-white/5 bg-canvas-soft/30 overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <span className="font-heading text-sm font-bold tracking-wide text-white pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-accent shrink-0"
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                {/* Accordion Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-text-muted font-body leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {displayFaq.length === 0 && (
            <p className="text-center text-sm text-white/30 font-body py-12">
              No questions match your filter criteria or search query.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
