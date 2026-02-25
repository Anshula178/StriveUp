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
    <Section className="bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We don&apos;t just write code. We build business solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link href={service.href} className="inline-flex items-center gap-2 font-bold text-sm text-foreground hover:text-primary transition-colors mt-auto">
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
