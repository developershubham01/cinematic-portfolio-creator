'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, AlertTriangle, Send } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  emergencyPhone: string;
  studio: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

interface ContactSectionProps {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'wedding-photography',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. This is a static UI. Your booking inquiry details have been logged.`);
  };

  return (
    <section id="contact" className="relative bg-canvas-soft text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Decorative gradient blur shape */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.25em] text-xs font-semibold uppercase block mb-3">CONTACT</span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-widest leading-tight">LET&apos;S CREATE ART TOGETHER</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-white/5 bg-black/40 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-lg font-bold tracking-widest uppercase mb-2">INQUIRY FORM</h3>
              <p className="text-xs text-text-muted font-body font-light mb-8">
                Fill out the booking details below to share your dates and creative vision. We will review and respond with availability in 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[10px] font-heading font-semibold tracking-widest uppercase text-white/50 mb-2">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full text-input rounded-lg border border-white/10 bg-canvas-night/60 text-white placeholder-white/20 text-sm focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-heading font-semibold tracking-widest uppercase text-white/50 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full text-input rounded-lg border border-white/10 bg-canvas-night/60 text-white placeholder-white/20 text-sm focus:border-accent focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-heading font-semibold tracking-widest uppercase text-white/50 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      className="w-full text-input rounded-lg border border-white/10 bg-canvas-night/60 text-white placeholder-white/20 text-sm focus:border-accent focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-[10px] font-heading font-semibold tracking-widest uppercase text-white/50 mb-2">
                      SERVICE TYPE
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full text-input rounded-lg border border-white/10 bg-canvas-night/60 text-white text-sm focus:border-accent focus:outline-none transition-colors duration-300 h-[46px]"
                    >
                      <option value="wedding-photography">Wedding Photography</option>
                      <option value="wedding-films">Cinematic Wedding Films</option>
                      <option value="pre-wedding">Pre-Wedding Shoot</option>
                      <option value="commercial-ads">Commercial Brand Ads</option>
                      <option value="fashion-editorial">Fashion Editorial</option>
                      <option value="drone-cinematography">Drone Cinematography</option>
                      <option value="product-shoot">Product Shoot</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-[10px] font-heading font-semibold tracking-widest uppercase text-white/50 mb-2">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full text-input rounded-lg border border-white/10 bg-canvas-night/60 text-white text-sm focus:border-accent focus:outline-none transition-colors duration-300 h-[46px]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[10px] font-heading font-semibold tracking-widest uppercase text-white/50 mb-2">
                    TELL US ABOUT YOUR SHOOT
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your style, locations, requirements..."
                    className="w-full text-input rounded-lg border border-white/10 bg-canvas-night/60 text-white placeholder-white/20 text-sm focus:border-accent focus:outline-none transition-colors duration-300 resize-none py-3"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-gold w-full py-4 font-heading text-xs tracking-widest font-semibold uppercase flex items-center justify-center gap-2"
                >
                  <Send size={14} /> SUBMIT BOOKING ENQUIRY
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Details + Static Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-8 h-full"
          >
            {/* Contact cards info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Studio Card */}
              <div className="glass p-6 rounded-xl border border-white/5">
                <MapPin size={24} className="text-accent mb-4" />
                <h4 className="font-heading text-sm font-bold tracking-wider text-white mb-2 uppercase">AK STUDIOS</h4>
                <p className="text-xs text-text-muted font-body leading-relaxed font-light">
                  {contact.studio.address},<br />
                  {contact.studio.city}, {contact.studio.state} - {contact.studio.zip}, {contact.studio.country}
                </p>
              </div>

              {/* Working Hours */}
              <div className="glass p-6 rounded-xl border border-white/5">
                <Clock size={24} className="text-accent mb-4" />
                <h4 className="font-heading text-sm font-bold tracking-wider text-white mb-2 uppercase">WORKING HOURS</h4>
                <p className="text-xs text-text-muted font-body space-y-1 font-light">
                  <span className="block">Weekdays: {contact.workingHours.weekdays}</span>
                  <span className="block">Saturday: {contact.workingHours.saturday}</span>
                  <span className="block text-highlight">Sunday: {contact.workingHours.sunday}</span>
                </p>
              </div>

              {/* Call Info */}
              <div className="glass p-6 rounded-xl border border-white/5">
                <Phone size={24} className="text-accent mb-4" />
                <h4 className="font-heading text-sm font-bold tracking-wider text-white mb-2 uppercase">PHONE & MAIL</h4>
                <p className="text-xs text-text-muted font-body space-y-1 font-light">
                  <span className="block">{contact.phone}</span>
                  <span className="block">{contact.email}</span>
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="glass p-6 rounded-xl border border-white/5 border-l-2 border-l-highlight">
                <AlertTriangle size={24} className="text-highlight mb-4" />
                <h4 className="font-heading text-sm font-bold tracking-wider text-white mb-2 uppercase">EMERGENCY SHOOTS</h4>
                <p className="text-xs text-text-muted font-body leading-relaxed font-light">
                  For last-minute reschedules, emergency wedding coverages, or immediate assistance:<br />
                  <strong className="text-white">{contact.emergencyPhone}</strong>
                </p>
              </div>
            </div>

            {/* Static Map Embed Iframe (Using Goregaon Film City Mumbai) */}
            <div className="w-full aspect-[2/1] sm:aspect-video rounded-xl overflow-hidden border border-white/5 bg-canvas-night flex items-center justify-center relative shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3768.1062963162794!2d72.8504113!3d19.1663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9d6af7a1db3%3A0xe54199c282eb1034!2sFilm%20City%20Rd%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719912140000"
                className="absolute inset-0 w-full h-full border-0 opacity-40 hover:opacity-75 transition-opacity duration-500 invert brightness-90"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="relative z-10 pointer-events-none text-center bg-black/60 px-4 py-2.5 rounded-full border border-white/10 text-[10px] font-heading font-semibold tracking-widest uppercase">
                STUDIO LOCATION MAP
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
