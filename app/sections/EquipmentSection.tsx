'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Camera, Video, Zap, Volume2, HardDrive, Cpu } from 'lucide-react';

interface EquipmentItem {
  id: number;
  name: string;
  category: string;
  brand: string;
  specs: string;
  image: string;
  flagship: boolean;
}

interface EquipmentSectionProps {
  equipment: EquipmentItem[];
}

export default function EquipmentSection({ equipment }: EquipmentSectionProps) {
  const categories = ['Cameras', 'Drones', 'Lenses', 'Lighting', 'Audio', 'Editing'];
  const [activeTab, setActiveTab] = useState('Cameras');

  const filteredEquipment = equipment.filter(
    (item) => item.category.toLowerCase() === activeTab.toLowerCase()
  );

  // Return icons based on category
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Cameras': return <Camera size={16} />;
      case 'Drones': return <Video size={16} />;
      case 'Lenses': return <Star size={16} />;
      case 'Lighting': return <Zap size={16} />;
      case 'Audio': return <Volume2 size={16} />;
      case 'Editing': return <Cpu size={16} />;
      default: return <HardDrive size={16} />;
    }
  };

  return (
    <section id="equipment" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">ARSENAL</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">PROFESSIONAL EQUIPMENT</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 font-heading text-xs tracking-widest font-medium uppercase transition-all duration-300 ${
                activeTab === cat
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-muted hover:text-white'
              }`}
            >
              {getCategoryIcon(cat)}
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEquipment.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col group h-full"
              >
                {/* Image & Flagship Badge */}
                <div className="relative aspect-[3/2] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
                  />
                  {item.flagship && (
                    <div className="absolute top-4 left-4 bg-accent/90 text-black text-[10px] font-heading font-semibold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Star size={10} fill="currentColor" /> FLAGSHIP CINE
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border border-white/10 text-[10px] font-heading font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                    {item.brand}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white tracking-wide mb-2 group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sm text-text-muted font-body leading-relaxed font-light">
                      {item.specs}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
