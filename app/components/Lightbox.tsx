'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const imageVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNext();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onPrev();
    },
    [onClose, onNext, onPrev, currentIndex, images.length]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          key="lightbox-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 transition-colors duration-300 hover:text-yellow-400"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-yellow-400 hover:border-yellow-400/30"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next Arrow */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-yellow-400 hover:border-yellow-400/30"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentImage.src}
              alt={currentImage.alt}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-[90vw] max-h-[85vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </AnimatePresence>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest font-poppins">
            <span className="text-yellow-400">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
