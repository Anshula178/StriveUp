'use client';

import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard Redesign',
    category: 'SaaS / UI/UX',
    image: 'https://picsum.photos/id/1/800/600',
    description: 'Complete overhaul of a financial analytics platform, resulting in a 40% increase in user engagement.',
  },
  {
    id: 2,
    title: 'E-Commerce Scale-Up',
    category: 'Web Development',
    image: 'https://picsum.photos/id/2/800/600',
    description: 'Migrating a legacy store to a headless Shopify + Next.js architecture, boosting load speeds by 300%.',
  },
  {
    id: 3,
    title: 'HealthTech Mobile App',
    category: 'Mobile App',
    image: 'https://picsum.photos/id/3/800/600',
    description: 'A HIPAA-compliant telemedicine app connecting patients with specialists in under 5 minutes.',
  },
];

export function CaseStudies() {
  return (
    <Section className="bg-background py-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Selected Work
            </h2>
            <p className="text-muted-foreground text-lg">
              We let our results speak for themselves. Here are a few projects we&apos;re proud of.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-border shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Button variant="secondary" className="bg-background/90 text-foreground hover:bg-background">
                    View Case Study
                  </Button>
                </div>
              </div>
              <div className="space-y-3 flex-grow">
                <div className="text-xs font-bold text-accent uppercase tracking-widest">
                  {project.category}
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
