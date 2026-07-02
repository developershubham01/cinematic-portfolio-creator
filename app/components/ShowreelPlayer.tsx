'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ShowreelPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export default function ShowreelPlayer({
  isOpen,
  onClose,
  videoUrl,
  title,
}: ShowreelPlayerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
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

  const isYouTube =
    videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="showreel-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 transition-colors duration-300 hover:text-yellow-400"
            aria-label="Close video player"
          >
            <X size={28} />
          </button>

          {/* Video Container */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/50 border border-white/5">
              {isYouTube ? (
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  title={title || 'Showreel Video'}
                />
              ) : (
                <video
                  src={videoUrl}
                  controls
                  className="absolute inset-0 w-full h-full object-contain"
                  title={title || 'Showreel Video'}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Title */}
            {title && (
              <div className="mt-4 text-center">
                <h3 className="text-lg text-white font-poppins font-medium">
                  {title}
                </h3>
                <div className="mt-2 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
