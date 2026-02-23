'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discover',
    description: 'We dive deep into your business goals, audience, and challenges to build a roadmap for success.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Design',
    description: 'We craft intuitive, high-fidelity prototypes that align with your brand and user needs.',
    icon: PenTool,
  },
  {
    id: '03',
    title: 'Develop',
    description: 'Our engineers build scalable, clean, and secure code using the latest technologies.',
    icon: Code2,
  },
  {
    id: '04',
    title: 'Deploy',
    description: 'We launch your product with zero downtime and ensure everything runs smoothly.',
    icon: Rocket,
  },
  {
    id: '05',
    title: 'Scale',
    description: 'We monitor performance and iterate to help you grow and dominate your market.',
    icon: TrendingUp,
  },
];

export function Process() {
  return (
    <Section className="bg-secondary/30 border-y border-white/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven process that delivers predictable results, every time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-white/10 p-6 rounded-xl h-full hover:border-primary/50 transition-colors duration-300 flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg z-20">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs text-primary/50 mb-2">{step.id}</div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
