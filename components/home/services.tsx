'use client';

import { Section, Container } from '@/components/ui/layout';
import { Code, Smartphone, Palette, Database, Layout, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Engineering',
    description: 'High-performance ecosystems built with Next.js. We prioritize speed, SEO, and global scalability.',
    icon: Layout,
    href: '/services/web-development',
  },
  {
    title: 'Custom Software',
    description: 'Bespoke enterprise solutions designed to automate complex workflows and eliminate bottlenecks.',
    icon: Code,
    href: '/services/custom-software',
  },
  {
    title: 'Mobile Architecture',
    description: 'Native-feel cross-platform applications that deliver seamless user experiences on any device.',
    icon: Smartphone,
    href: '/services/mobile-apps',
  },
  {
    title: 'Strategic UI/UX',
    description: 'Design that converts. We bridge the gap between aesthetic beauty and functional business logic.',
    icon: Palette,
    href: '/services/ui-ux-design',
  },
  {
    title: 'Headless Systems',
    description: 'Modern CMS integrations giving your team full content control without technical bloat.',
    icon: Database,
    href: '/services/headless-cms',
  },
  {
    title: 'Performance Optimization',
    description: 'Aggressive speed tuning and infrastructure audits to maximize your digital conversion rates.',
    icon: Zap,
    href: '/services/performance',
  },
];

export function Services() {
  return (
    <Section className="relative overflow-hidden bg-background py-24 ">
      
      {/* BACKGROUND GRID (Matches Hero scale) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), 
                              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '70px 70px', // Same size as your Hero grid
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Technical Capabilities
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white">
              The foundation of your <br />
              <span className="text-blue-500 italic font-serif">Digital Empire.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-500/30 px-4">
            Engineering excellence delivered through modern standards.
          </p>
        </div>

        {/* UNIFIED GRID STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-border/40 dark:bg-white/5 gap-px border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-10 bg-background hover:bg-blue-50/50 dark:hover:bg-blue-900/5 transition-colors duration-500"
            >
              {/* Subtle hover "Scan" line matching Hero vibes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-grid-scan" />
              </div>

              {/* Icon Box - Matches floating pillar style */}
              <div className="mb-8 inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-black dark:text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>
              
              <Link 
                href={service.href} 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all"
              >
                Explore Solution <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}