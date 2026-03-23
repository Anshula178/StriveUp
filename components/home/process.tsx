'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { Search, Map, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Brief & Research',
    description: 'Deep dive into client vision, target audience psychology, and competitive landscape analysis.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Sitemap & Wireframing',
    description: 'Architect the user journey with strategic information hierarchy and intuitive navigation flows.',
    icon: Map,
  },
  {
    id: '03',
    title: 'Design & Content',
    description: 'Synthesize brand identity with compelling visuals and persuasive copy that converts.',
    icon: Palette,
  },
  {
    id: '04',
    title: 'Launch & Scale',
    description: 'Deploy with precision monitoring, analytics integration, and continuous optimization.',
    icon: Rocket,
  },
];

export function Process() {
  return (
    <Section className="bg-background relative overflow-hidden py-24">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground border border-border"
            >
              Our Methodology
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Engineered for <br className="hidden lg:block" />
              <span className="text-accent">Predictable Success.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              From concept to launch, every step is meticulously crafted to deliver exceptional results without the guesswork.
            </motion.p>
          </div>

          {/* Right Content - Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-border md:left-8" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-24 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 md:left-2 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center z-10 group-hover:border-accent group-hover:bg-accent/5 transition-colors duration-300">
                    <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent/50 hover:shadow-md transition-all duration-300">
                    <span className="text-sm font-bold text-accent mb-2 block tracking-wider">
                      STEP {step.id}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
