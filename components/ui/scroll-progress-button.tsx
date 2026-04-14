'use client';

import * as React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion'; // Changed to framer-motion for compatibility
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

  return (
    <button
      onClick={onClick}
      className={`relative group flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Progress Ring SVG */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none scale-[1.15]"
        viewBox="0 0 60 60"
      >
        {/* Background Circle (Faint Grey) */}
        <circle
          cx="30"
          cy="30"
          r="26"
          fill="none"
          stroke="currentColor"
          className="text-gray-100 dark:text-white/5"
          strokeWidth="3"
        />
        {/* Progress Circle (Vibrant Blue) */}
        <motion.circle
          cx="30"
          cy="30"
          r="26"
          fill="none"
          stroke="#2563eb" // Explicit blue-600 color to ensure it shows
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength: scaleX }}
        />
      </svg>

      {/* Icon Section */}
      <div className="relative z-20 flex items-center justify-center w-6 h-6 overflow-hidden text-black dark:text-white">
        <motion.div
          animate={{ 
            y: isOpen ? -40 : 0,
            opacity: isOpen ? 0 : 1 
          }}
          transition={{ duration: 0.3, ease: "anticipate" }}
          className="absolute"
        >
          <Menu className="w-6 h-6" />
        </motion.div>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ 
            y: isOpen ? 0 : 40,
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "anticipate" }}
          className="absolute"
        >
          <X className="w-6 h-6" />
        </motion.div>
      </div>
    </button>
  );
}