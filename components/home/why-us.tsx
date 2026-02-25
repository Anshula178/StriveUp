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
    <Section className="bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
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
              className="relative p-8 rounded-[2rem] bg-card shadow-lg group overflow-hidden"
            >
              {/* Top Right Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-[2px] border-r-[2px] border-primary rounded-tr-[1.5rem] transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:border-primary/50 group-hover:rounded-[2rem]" />
              
              {/* Bottom Left Corner Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[2px] border-l-[2px] border-primary rounded-bl-[1.5rem] transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:border-primary/50 group-hover:rounded-[2rem]" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {reason.description}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 font-bold text-sm text-foreground hover:text-primary transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
