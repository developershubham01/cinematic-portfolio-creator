'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPositionFromEvent = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return sliderPosition;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      return percentage;
    },
    [sliderPosition]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setSliderPosition(getPositionFromEvent(e.clientX));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      setSliderPosition(getPositionFromEvent(e.touches[0].clientX));
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, getPositionFromEvent]);

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      setSliderPosition(getPositionFromEvent(e.clientX));
    },
    [getPositionFromEvent]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden select-none group cursor-col-resize"
      onClick={handleContainerClick}
    >
      {/* After Image (bottom layer, fully visible) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (top layer, clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-yellow-400 bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-col-resize transition-transform duration-200 hover:scale-110 active:scale-95"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="flex items-center gap-0.5">
            <svg width="6" height="14" viewBox="0 0 6 14" fill="none" className="text-yellow-400">
              <path d="M5 1L1 7L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="6" height="14" viewBox="0 0 6 14" fill="none" className="text-yellow-400">
              <path d="M1 1L5 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase tracking-wider font-poppins transition-opacity duration-300"
        style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
      >
        {beforeLabel}
      </div>
      <div
        className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase tracking-wider font-poppins transition-opacity duration-300"
        style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
      >
        {afterLabel}
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
