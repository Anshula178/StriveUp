'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface ScrollProgressButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function ScrollProgressButton({ isOpen, onClick, className }: ScrollProgressButtonProps) {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // Transform scroll progress to path length (0 to 1)
  const pathLength = useTransform(scaleX, [0, 1], [0, 1]);

  return (
    <button
      onClick={onClick}
      className={`relative group flex items-center justify-center w-14 h-14 rounded-full bg-background border border-border shadow-md transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Progress Ring SVG */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        viewBox="0 0 60 60"
      >
        {/* Background Circle */}
        <circle
          cx="30"
          cy="30"
          r="28"
          pathLength="1"
          className="stroke-muted-foreground/20 fill-none"
          strokeWidth="2"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="30"
          cy="30"
          r="28"
          pathLength="1"
          className="stroke-accent fill-none"
          strokeWidth="2"
          style={{ pathLength }}
        />
      </svg>

      {/* Icon */}
      <div className="relative z-20 text-foreground group-hover:text-accent transition-colors">
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Menu className="w-6 h-6 stroke-current" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 0 : -180, scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <X className="w-6 h-6 stroke-current" />
        </motion.div>
      </div>
    </button>
  );
}
