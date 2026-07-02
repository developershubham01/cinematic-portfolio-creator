'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseEnterInteractive = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeaveInteractive = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    // Hide on mobile
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 768) return;

    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    // Add hover listeners to interactive elements
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    // Initial setup + MutationObserver for dynamic elements
    addListeners();
    const observer = new MutationObserver(() => {
      addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();

      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, [handleMouseMove, handleMouseEnterInteractive, handleMouseLeaveInteractive]);

  // Don't render on mobile or SSR
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  if (!isVisible) return null;

  return (
    <>
      {/* Small Dot - follows exactly */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-yellow-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />

      {/* Larger Ring - follows with spring delay */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999] transition-colors duration-200 ${
          isHovering
            ? 'w-14 h-14 border-yellow-400 bg-yellow-400/10'
            : 'w-10 h-10 border-yellow-400/60 bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (isHovering ? 28 : 20),
          y: mousePosition.y - (isHovering ? 28 : 20),
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
    </>
  );
}
