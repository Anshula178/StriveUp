'use client';

import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'FinTech Redesign',
    category: 'SaaS Architecture',
    outcome: '+40% Engagement',
    image: 'https://picsum.photos/id/1/1200/800',
    description: 'A complete overhaul of financial analytics, translating technical data into user-centric insights.',
  },
  {
    id: 2,
    title: 'E-Commerce Scale',
    category: 'Headless Commerce',
    outcome: '300% Speed Boost',
    image: 'https://picsum.photos/id/2/1200/800',
    description: 'Migrating legacy retail to a high-velocity Next.js architecture built for global traffic.',
  },
  {
    id: 3,
    title: 'HealthTech App',
    category: 'Mobile Engineering',
    outcome: 'HIPAA Compliant',
    image: 'https://picsum.photos/id/3/1200/800',
    description: 'Precision mobile engineering connecting patients and specialists with zero-latency video.',
  },
];

export function CaseStudies() {
  return (
    <Section className="relative overflow-hidden bg-white dark:bg-[#050505] py-32 transition-colors duration-500">
      
      {/* DECORATIVE TEXT WATERMARK */}
      <div className="absolute top-20 -right-20 pointer-events-none opacity-[0.02] dark:opacity-[0.04] select-none">
        <span className="text-[200px] font-black tracking-tighter">PORTFOLIO</span>
      </div>

      <Container className="relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
            >
              Selected Work
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter leading-tight">
              Where code meets <br />
              <span className="text-blue-600 italic font-serif">consequence.</span>
            </h2>
          </div>
          
          <Button variant="ghost" className="group text-lg font-bold hover:bg-transparent p-0" asChild>
            <Link href="/portfolio">
              Explore all projects 
              <span className="ml-2 w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Button>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`lg:col-span-12 group cursor-pointer ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col gap-8 lg:gap-16 items-center`}
            >
              {/* IMAGE WRAPPER */}
              <div className="relative w-full lg:w-[60%] aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-2xl">
                
                {/* Blueprint Overlay (Google Style) */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Result Badge */}
                <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-xl border border-white/20 dark:border-white/10">
                   <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                     {project.outcome}
                   </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                   <span className="text-white font-bold flex items-center gap-2">
                     Case Study Details <ExternalLink className="w-4 h-4" />
                   </span>
                </div>
              </div>

              {/* CONTENT WRAPPER */}
              <div className="lg:w-[40%] space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    [ 0{index + 1} // {project.category} ]
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="h-[1px] w-12 bg-gray-200 dark:bg-white/10 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}