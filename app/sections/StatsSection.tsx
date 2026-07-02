'use client';

import React from 'react';
import AnimatedCounter from '@/app/components/AnimatedCounter';

interface StatsProps {
  stats: {
    yearsExperience: number;
    photoshoots: number;
    weddingFilms: number;
    commercialProjects: number;
    happyClients: number;
    awards: number;
    countriesWorked: number;
    viewsGenerated: string;
  };
}

export default function StatsSection({ stats }: StatsProps) {
  // Convert stats to display formats
  const statItems = [
    { target: stats.yearsExperience, suffix: "+", label: "Years Experience" },
    { target: stats.photoshoots, suffix: "+", label: "Photoshoots" },
    { target: stats.weddingFilms, suffix: "+", label: "Wedding Films" },
    { target: stats.commercialProjects, suffix: "+", label: "Commercial Projects" },
    { target: stats.happyClients, suffix: "+", label: "Happy Clients" },
    { target: stats.awards, suffix: "+", label: "Awards Won" },
    { target: stats.countriesWorked, suffix: "+", label: "Countries Worked" },
    { target: 10, suffix: "M+", label: "Views Generated" } // Handled string viewsGenerated separately
  ];

  return (
    <section className="relative bg-canvas-soft border-y border-white/5 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statItems.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col justify-center items-center"
            >
              <AnimatedCounter 
                target={item.target} 
                suffix={item.suffix} 
                label={item.label} 
                duration={1500 + idx * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
