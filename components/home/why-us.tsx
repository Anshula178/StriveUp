'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, BarChart3, Layers, Globe } from 'lucide-react';

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
    <Section className="bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
            Why Partner with STRIVEUP?
          </h2>
          <p className="text-muted-foreground text-lg">
            We bridge the gap between technical complexity and business simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 border border-white/5 p-8 rounded-2xl hover:bg-card hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
