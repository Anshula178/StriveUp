'use client';

import { useRef, useEffect, useState } from 'react';
import { Section, Container } from '@/components/ui/layout';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Map, Palette, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Brief & Research',
    description: 'Deep dive into client vision, target audience psychology, and competitive landscape analysis.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Architecture & Flow',
    description: 'Engineering the user journey with strategic information hierarchy and intuitive navigation systems.',
    icon: Map,
  },
  {
    id: '03',
    title: 'Visual Engineering',
    description: 'Synthesizing brand identity with high-performance visuals and persuasive code that converts.',
    icon: Palette,
  },
  {
    id: '04',
    title: 'Deployment & Scale',
    description: 'Precision monitoring and analytics integration to ensure your empire grows without friction.',
    icon: Rocket,
  },
];

const BackgroundParticles = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const dots = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-blue-500 rounded-full"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: Math.random() * 0.5 
          }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export function Process() {
  // We attach the ref to a standard div instead of the custom <Section /> component
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    /* Wrapping div handles the scroll reference to avoid TypeScript errors */
    <div ref={scrollRef} className="relative">
      <Section className="relative overflow-hidden py-32 bg-white dark:bg-[#030303] transition-colors duration-500">
        
        <BackgroundParticles />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            
            {/* LEFT: STRATEGIC TEXT */}
            <div className="lg:sticky lg:top-40 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
              >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                The Striveup Roadmap
              </motion.div>
              
              <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-[0.95] tracking-tighter">
                Engineered for <br />
                <span className="text-blue-600 italic font-serif">Predictable</span> <br />
                Success.
              </motion.h2>

              <motion.p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                We’ve eliminated the guesswork. Our 4-step framework transforms your vision into a scalable digital empire.
              </motion.p>
            </div>

            {/* RIGHT: THE PROGRESSION TIMELINE */}
            <div className="relative pt-8 lg:pt-0">
              {/* FIXED SCROLL LINE (Now inside the container) */}
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-100 dark:bg-white/5 md:left-10" />
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-8 top-0 bottom-0 w-[2px] bg-blue-500 md:left-10 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />

              <div className="space-y-24">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-20 md:pl-28 group"
                  >
                    <div className="absolute left-0 top-0 md:left-2 w-16 h-16 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 flex items-center justify-center z-20 shadow-xl group-hover:border-blue-500/50 transition-all duration-500">
                      <step.icon className="w-7 h-7 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 relative z-10" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                          <span className="text-4xl font-black text-black/5 dark:text-white/5 tracking-tighter font-mono">
                              {step.id}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
                              {step.title}
                          </h3>
                      </div>
                      
                      <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 group-hover:border-blue-500/20 backdrop-blur-sm transition-all duration-500 overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
                          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed relative z-10">
                              {step.description}
                          </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}