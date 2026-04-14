'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, BarChart3, Layers, Globe } from 'lucide-react';

const reasons = [
  {
    title: 'ROI-Driven Strategy',
    description: 'We translate complex code into business growth. Every technical decision is mapped to your bottom-line results.',
    icon: BarChart3,
  },
  {
    title: 'Architectural Integrity',
    description: 'Pixel-perfect precision isn’t just for UI. Our backend systems are engineered for flawless, long-term performance.',
    icon: Layers,
  },
  {
    title: 'Elastic Scalability',
    description: 'We build systems that handle surge-level traffic. From MVP to millions of users, your infrastructure stays solid.',
    icon: Globe,
  },
  {
    title: 'Elite Engineering Team',
    description: 'Our team is composed of the top 1% of full-stack talent, dedicated to solving your most complex technical debt.',
    icon: Users,
  },
  {
    title: 'High-Velocity Delivery',
    description: 'Speed is a competitive advantage. We use advanced DevOps and Agile flows to ship enterprise-grade code, fast.',
    icon: Zap,
  },
  {
    title: 'Zero-Trust Security',
    description: 'In an era of data threats, we implement military-grade security protocols as a standard, not an option.',
    icon: ShieldCheck,
  },
];

export function WhyUs() {
  return (
    <Section className="relative overflow-hidden py-32 bg-background">
      
      {/* SECTION BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            Core Principles
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-tight">
            Why Partner with <span className="text-blue-600">STRIVEUP?</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl">
            We don't just provide services; we engineer the competitive advantages that define industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-blue-500/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
            >
              {/* GHOST NUMBERING */}
              <span className="absolute top-6 right-8 text-7xl font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none transition-colors group-hover:text-blue-500/10">
                0{index + 1}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                <reason.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-base">
                {reason.description}
              </p>

              {/* BOTTOM ACCENT LINE */}
              <div className="mt-8 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}