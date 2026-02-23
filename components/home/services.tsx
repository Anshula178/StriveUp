'use client';

import { Section, Container } from '@/components/ui/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
    <Section className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
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
            >
              <Link href={service.href} className="block h-full group">
                <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
