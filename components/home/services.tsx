'use client';

import { Section, Container } from '@/components/ui/layout';
import { Code, Smartphone, Palette, Database, Layout, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites built with Next.js and React. SEO-optimized and scalable.',
    icon: Layout,
    href: '/services/web-development',
  },
  {
    title: 'Custom Software',
    description: 'Tailor-made software solutions to automate workflows and solve complex business problems.',
    icon: Code,
    href: '/services/custom-software',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    icon: Smartphone,
    href: '/services/mobile-apps',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that converts. We craft beautiful, intuitive interfaces.',
    icon: Palette,
    href: '/services/ui-ux-design',
  },
  {
    title: 'Headless CMS',
    description: 'Flexible content management systems that give you full control without the bloat.',
    icon: Database,
    href: '/services/headless-cms',
  },
  {
    title: 'Performance Tuning',
    description: 'Speed matters. We optimize your digital assets for maximum speed and conversion.',
    icon: Zap,
    href: '/services/performance',
  },
];

export function Services() {
  return (
    <Section className="bg-background relative overflow-hidden py-24">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We don&apos;t just write code. We build business solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 tracking-tight">{service.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <Link href={service.href} className="inline-flex items-center gap-2 font-medium text-sm text-foreground group-hover:text-accent transition-colors mt-auto">
                Explore Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
