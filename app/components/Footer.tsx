'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterestP,
  FaBehance,
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const services = [
  'Wedding Photography',
  'Pre-Wedding Shoots',
  'Commercial Photography',
  'Product Photography',
  'Event Coverage',
  'Portrait Sessions',
];

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/', label: 'WhatsApp' },
  { icon: FaBehance, href: 'https://behance.net', label: 'Behance' },
  { icon: FaPinterestP, href: 'https://pinterest.com', label: 'Pinterest' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-100px' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative bg-black text-white overflow-hidden">
      {/* Gold Accent Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold tracking-widest text-yellow-400 font-bebas">
                AK
              </span>
              <span className="text-xs tracking-[0.3em] text-white/80 font-poppins uppercase">
                Studios
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-inter">
              A premium photography &amp; videography studio crafting cinematic visual narratives.
              We transform fleeting moments into timeless art through our lens.
            </p>
            <div className="flex gap-3">
              {socialLinks.slice(0, 4).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 text-sm transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-110"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-yellow-400 mb-6 font-poppins">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm transition-colors duration-300 hover:text-yellow-400 hover:translate-x-1 inline-block font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-yellow-400 mb-6 font-poppins">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm font-inter">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-yellow-400 mb-6 font-poppins">
              Connect
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-white/50 text-sm font-inter">
                <span className="text-white/70 block text-xs uppercase tracking-wider mb-1">Email</span>
                info@akstudios.com
              </p>
              <p className="text-white/50 text-sm font-inter">
                <span className="text-white/70 block text-xs uppercase tracking-wider mb-1">Phone</span>
                +91 98765 43210
              </p>
              <p className="text-white/50 text-sm font-inter">
                <span className="text-white/70 block text-xs uppercase tracking-wider mb-1">Location</span>
                Mumbai, India
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-110"
                >
                  <social.icon size={12} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white font-poppins">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/40 text-sm mt-1 font-inter">
                Get the latest updates, tips, and exclusive offers.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 bg-white/5 border border-white/10 rounded-l-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 transition-colors duration-300 font-inter"
              />
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold text-sm rounded-r-full tracking-wider uppercase transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 font-poppins whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs font-inter">
            &copy; {new Date().getFullYear()} AK Studios. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/30 text-xs transition-colors duration-300 hover:text-yellow-400 font-inter"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 text-xs transition-colors duration-300 hover:text-yellow-400 font-inter"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full border border-yellow-400/50 bg-black/80 backdrop-blur-sm flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/20"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
