'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Sparkles, User, Compass, Package, Home, Wind, Car, Briefcase, Coffee, Smile, Gem, Eye, Star, Film, Video, Tv, Music, Award, Smartphone, Volume2, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  name: string;
  category: 'photography' | 'videography';
  description: string;
  features: string[];
  startingPrice: number;
  icon: string;
  image: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
  limit?: number; // Optional limit for Home page
}

export default function ServicesSection({ services, limit }: ServicesSectionProps) {
  // Group services
  const photoServices = services.filter((s) => s.category === 'photography');
  const videoServices = services.filter((s) => s.category === 'videography');

  const displayPhotoServices = limit ? photoServices.slice(0, limit) : photoServices;
  const displayVideoServices = limit ? videoServices.slice(0, limit) : videoServices;

  // Dynamically map icon strings to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera size={20} />;
      case 'Heart': return <Heart size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'User': return <User size={20} />;
      case 'Compass': return <Compass size={20} />;
      case 'Package': return <Package size={20} />;
      case 'Home': return <Home size={20} />;
      case 'Wind': return <Wind size={20} />;
      case 'Car': return <Car size={20} />;
      case 'Briefcase': return <Briefcase size={20} />;
      case 'Coffee': return <Coffee size={20} />;
      case 'Smile': return <Smile size={20} />;
      case 'Gem': return <Gem size={20} />;
      case 'Eye': return <Eye size={20} />;
      case 'Star': return <Star size={20} />;
      case 'Film': return <Film size={20} />;
      case 'Video': return <Video size={20} />;
      case 'Tv': return <Tv size={20} />;
      case 'Music': return <Music size={20} />;
      case 'Award': return <Award size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Volume2': return <Volume2 size={20} />;
      case 'BookOpen': return <BookOpen size={20} />;
      default: return <Camera size={20} />;
    }
  };

  const ServiceCard = ({ item }: { item: ServiceItem }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col sm:flex-row group bg-black/40 h-full"
    >
      {/* Aspect crop image */}
      <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-auto overflow-hidden bg-black/50 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-select"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2 text-accent mb-2">
            {renderIcon(item.icon)}
            <span className="text-[10px] font-heading font-semibold tracking-widest uppercase">{item.category}</span>
          </div>
          <h4 className="font-heading text-lg font-bold text-white tracking-wide mb-2 group-hover:text-accent transition-colors duration-300">
            {item.name}
          </h4>
          <p className="text-xs text-text-muted font-body leading-relaxed mb-4 font-light">
            {item.description}
          </p>

          {/* Features list */}
          <ul className="text-[10px] text-text-muted/70 font-body space-y-1.5 mb-6">
            {item.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div>
            <span className="text-[9px] text-white/40 block font-heading tracking-widest">STARTING AT</span>
            <span className="text-base text-accent font-bebas tracking-wide font-semibold">
              ₹{item.startingPrice.toLocaleString()}
            </span>
          </div>
          <Link
            href="/contact"
            className="text-[10px] font-heading font-semibold text-white tracking-widest border-b border-white/30 hover:border-accent hover:text-accent pb-0.5 transition-all duration-300"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="relative bg-canvas-night text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">SERVICES</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">WHAT WE OFFER</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Photography Services */}
          <div>
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
              <Camera className="text-accent" />
              <h3 className="font-display text-2xl tracking-widest uppercase">PHOTOGRAPHY SERVICES</h3>
            </div>
            <div className="flex flex-col gap-6">
              {displayPhotoServices.map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column: Videography Services */}
          <div>
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
              <Film className="text-highlight" />
              <h3 className="font-display text-2xl tracking-widest uppercase">CINEMATOGRAPHY SERVICES</h3>
            </div>
            <div className="flex flex-col gap-6">
              {displayVideoServices.map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* View All CTA for Home page */}
        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-ghost inline-block px-8 py-3 text-xs font-heading font-medium tracking-widest"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
