'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;

      const controls = animate(0, target, {
        duration: duration / 1000,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (value) => {
          setCount(Math.round(value));
        },
      });

      return () => {
        controls.stop();
      };
    }
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bebas text-yellow-400 tracking-wider leading-none">
        {count.toLocaleString()}
        {suffix && (
          <span className="text-yellow-400/80">{suffix}</span>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-400 uppercase tracking-[0.2em] font-poppins">
        {label}
      </p>
    </div>
  );
}
