'use client';

import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <Section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-card border border-border rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-20 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle inner grid */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(var(--foreground) 1px, transparent 1px),
                linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop settling for average. Partner with STRIVEUP to build digital products that dominate your market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-10" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-10" asChild>
                <Link href="/work">
                  View Case Studies
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Free Strategy Session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>100% Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Enterprise-Grade Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
