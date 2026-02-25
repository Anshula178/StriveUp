'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { Search, Map, Palette, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    id: '01',
    title: 'Brief & Research',
    description: 'Deep dive into client vision, target audience psychology, and competitive landscape analysis.',
    icon: Search,
    rotation: '-rotate-2',
    top: 'top-0',
    left: 'left-[50%] md:left-[60%]',
  },
  {
    id: '02',
    title: 'Sitemap & Wireframing',
    description: 'Architect the user journey with strategic information hierarchy and intuitive navigation flows.',
    icon: Map,
    rotation: 'rotate-3',
    top: 'top-[180px] md:top-[120px]',
    left: 'left-[5%] md:left-[15%]',
  },
  {
    id: '03',
    title: 'Design & Content',
    description: 'Synthesize brand identity with compelling visuals and persuasive copy that converts.',
    icon: Palette,
    rotation: '-rotate-1',
    top: 'top-[380px] md:top-[350px]',
    left: 'left-[45%] md:left-[55%]',
  },
  {
    id: '04',
    title: 'Launch',
    description: 'Deploy with precision monitoring, analytics integration, and continuous optimization.',
    icon: Rocket,
    rotation: 'rotate-2',
    top: 'top-[580px] md:top-[550px]',
    left: 'left-[0%] md:left-[10%]',
  },
];

function PinnedCard({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: step.rotation === '-rotate-2' ? -2 : step.rotation === 'rotate-3' ? 3 : step.rotation === '-rotate-1' ? -1 : 2 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`absolute w-[280px] md:w-[320px] bg-card text-card-foreground p-6 rounded-[2rem] shadow-xl border border-border ${step.top} ${step.left} z-10`}
    >
      {/* Pin/Hole Visual */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-muted-foreground/20 shadow-inner" />
      
      <div className="mt-4">
        <span className="text-4xl font-heading font-bold text-muted-foreground/20 mb-2 block">
          {step.id}
        </span>
        <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <Section className="bg-background relative overflow-hidden min-h-[1100px] md:min-h-[900px]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="max-w-xl pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
            >
              Our Creative Process
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
            >
              From concept to launch, every step is meticulously crafted to deliver exceptional results
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block ml-20 mt-10"
            >
               {/* Curly Arrow SVG */}
               <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground/80 rotate-12">
                <path d="M10 10 C 30 50, 70 0, 90 40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Right Content - Cards Area */}
          <div className="relative h-[800px] w-full hidden md:block">
             {/* Dashed Path Line SVG */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none text-border" style={{ overflow: 'visible' }}>
               <path 
                 d="M 400 60 C 400 150, 100 100, 100 240 S 350 300, 350 460 S 50 500, 50 660" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2" 
                 strokeDasharray="8 8"
                 className="opacity-50"
               />
             </svg>

            {steps.map((step, index) => (
              <PinnedCard key={step.id} step={step} index={index} />
            ))}

             {/* "Ready to be delivered" Text */}
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-[40%] text-muted-foreground font-handwriting rotate-[-5deg] text-lg"
            >
              Ready to be delivered!
            </motion.div>
          </div>

          {/* Mobile Layout (Stacked) */}
          <div className="md:hidden flex flex-col gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm"
              >
                <span className="text-4xl font-heading font-bold text-muted-foreground/20 mb-2 block">
                  {step.id}
                </span>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
