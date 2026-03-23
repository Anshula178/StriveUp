'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, BarChart3, Layers, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  {
    title: 'Business-First Approach',
    description: 'We don’t just code; we solve business problems. Every line of code is written with your ROI in mind.',
    icon: BarChart3,
  },
  {
    title: 'Pixel-Perfect Engineering',
    description: 'Our obsession with detail ensures your product looks flawless on every device and screen size.',
    icon: Layers,
  },
  {
    title: 'Scalable Architecture',
    description: 'We build systems that grow with you. From 100 to 10 million users, your platform will perform.',
    icon: Globe,
  },
  {
    title: 'Top 1% Talent',
    description: 'Our team consists of senior engineers and designers who have built products for industry leaders.',
    icon: Users,
  },
  {
    title: 'Lightning Fast Delivery',
    description: 'We use modern agile methodologies to ship features faster without compromising quality.',
    icon: Zap,
  },
  {
    title: 'Enterprise Security',
    description: 'Security is not an afterthought. We implement best practices to keep your data safe.',
    icon: ShieldCheck,
  },
];

export function WhyUs() {
  return (
    <Section className="bg-background relative overflow-hidden py-24">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Why Partner with STRIVEUP?
          </h2>
          <p className="text-muted-foreground text-lg">
            We bridge the gap between technical complexity and business simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <reason.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 tracking-tight">{reason.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
