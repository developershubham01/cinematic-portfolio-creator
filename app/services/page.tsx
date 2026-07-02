'use client';

import React from 'react';
import services from '@/data/services.json';
import ServicesSection from '@/app/sections/ServicesSection';
import WorkflowSection from '@/app/sections/WorkflowSection';

interface ServiceItem {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  startingPrice: number;
  icon: string;
  image: string;
}

export default function ServicesPage() {
  const formattedServices = (services as ServiceItem[]).map((s) => ({
    ...s,
    category: s.category as 'photography' | 'videography'
  }));

  return (
    <div className="relative bg-black text-white pt-24 min-h-screen">
      {/* Banner */}
      <div className="relative py-20 px-6 text-center overflow-hidden border-b border-white/5 bg-canvas-soft">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80"
            alt="Services Banner"
            className="w-full h-full object-cover no-select"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">OFFERING</span>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-widest uppercase">CREATIVE SERVICES</h1>
          <p className="text-text-muted font-body text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Detailed overview of our professional photography and cinematic videography services, workflows, and starting rates.
          </p>
        </div>
      </div>

      {/* Complete Services List */}
      <ServicesSection services={formattedServices} />

      {/* Process Workflow Timeline */}
      <WorkflowSection />
    </div>
  );
}
