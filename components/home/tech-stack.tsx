'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS',
  'GraphQL', 'AWS', 'Docker', 'Kubernetes', 'Figma', 'Prisma', 'Vercel', 'Stripe'
];

export function TechStack() {
  return (
    <Section className="py-12 border-y border-border bg-secondary/20 overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Powered by Modern Technologies
          </p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {technologies.map((tech) => (
              <span key={tech} className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
             {/* Duplicate for seamless loop */}
             {technologies.map((tech) => (
              <span key={`${tech}-duplicate`} className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 ml-12">
             {technologies.map((tech) => (
              <span key={`${tech}-2`} className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
             {/* Duplicate for seamless loop */}
             {technologies.map((tech) => (
              <span key={`${tech}-duplicate-2`} className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </Section>
  );
}
