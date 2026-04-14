'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code2, Cpu, Globe, Lock, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { label: 'Cloud Architecture', icon: <Globe className="w-3.5 h-3.5" />, x: '4%', y: '12%', delay: 0 },
  { label: 'Generative AI', icon: <Cpu className="w-3.5 h-3.5" />, x: '80%', y: '12%', delay: 0.4 },
  { label: 'Full-Stack Dev', icon: <Code2 className="w-3.5 h-3.5" />, x: '15%', y: '55%', delay: 0.2 },
  { label: 'DevOps & Scale', icon: <Rocket className="w-3.5 h-3.5" />, x: '75%', y: '52%', delay: 0.6 },
  { label: 'Enterprise Security', icon: <Lock className="w-3.5 h-3.5" />, x: '43%', y: '2%', delay: 0.8 },
];

const words = ["Empires.", "Architectures.", "Ecosystems.", "Platforms.", "Futures."];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background py-24">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.08]" // Reduced from 0.12 for a lighter grid
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), 
                              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          }}
        />
        
        {/* --- LIGHTER ENHANCED GLOW SECTION --- */}
        {/* Main outer glow: Lowered opacity to 0.1 - 0.18 range */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.18, 0.1],
            scale: [1, 1.05, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full" 
        />
        
        {/* Core hotspot: Switched to blue-300 for a lighter feel and reduced opacity */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-300/15 blur-[120px] rounded-full" />
        {/* ---------------------------- */}
      </div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-24 mt-10">
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl mt-14 font-extrabold tracking-tight leading-[1.1] max-w-6xl text-black dark:text-white"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70 dark:from-white dark:to-white/70">
              Striveup to build digital{' '}
            </span>
            
            <br />
            
            <span className="relative inline-block min-h-[1.2em]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
                {currentText}
              </span>
              {/* Blinking Cursor */}
              <motion.span 
                animate={{ opacity: [1, 0] }}
               transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[4px] h-[0.8em] bg-blue-500 ml-1 align-middle"
              />
            </span>
          </motion.h1>
        </div>

        {/* FLOATING SERVICES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              className="absolute hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-xl shadow-2xl"
              style={{ left: item.x, top: item.y }}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* LOWER CONTENT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 pt-12 border-t border-border/50">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white">
              AI-driven engineering <br />
              <span className="text-muted-foreground/40 italic font-serif">for the digital-first era.</span> 
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex flex-col gap-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              We architect intelligent systems and automation workflows that translate technical complexity into sustainable growth for your empire.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-10 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 font-bold">
                <Link href="/contact" className="flex items-center gap-2">Start Building <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 border-black/10 dark:border-white/10 text-black dark:text-white font-medium">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}