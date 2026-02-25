'use client';

import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />

      <Container className="relative z-10">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Stop settling for average. Partner with STRIVEUP to build digital products that dominate your market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" variant="glow" className="w-full sm:w-auto text-lg h-14 px-10" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-10 border-border hover:bg-foreground/5" asChild>
                <Link href="/work">
                  View Case Studies
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Free Strategy Session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>100% Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Enterprise-Grade Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
