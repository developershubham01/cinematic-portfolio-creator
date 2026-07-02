'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Photography', href: '/photography' },
  { name: 'Videography', href: '/videography' },
  { name: 'Services', href: '/#services' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
];

const menuVariants = {
  closed: {
    x: '100%',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
  open: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 50 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, type: 'spring' as const, stiffness: 200, damping: 20 },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-1 group" onClick={() => setActiveSection('/')}>
              <span className="text-2xl font-bold tracking-widest text-yellow-400 font-bebas transition-all duration-300 group-hover:text-yellow-300">
                AK
              </span>
              <span className="text-xs tracking-[0.3em] text-white/80 font-poppins uppercase">
                Studios
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-300 font-poppins ${
                    activeSection === link.href
                      ? 'text-yellow-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Book Now Button + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center px-6 py-2 rounded-full border border-yellow-400 text-yellow-400 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/20 font-poppins"
              >
                Book Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-50 p-2 text-white hover:text-yellow-400 transition-colors duration-300"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-2xl font-bebas tracking-widest uppercase transition-colors duration-300 ${
                      activeSection === link.href
                        ? 'text-yellow-400'
                        : 'text-white/70 hover:text-yellow-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-4"
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-yellow-400 hover:text-black font-poppins"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
