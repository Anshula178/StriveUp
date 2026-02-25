'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Process } from '@/components/home/process';
import { CTA } from '@/components/home/cta';
import { motion } from 'motion/react';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32 pb-12">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20, translateZ: -50 }}
            animate={{ opacity: 1, y: 0, translateZ: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6 perspective-1000"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              Our Process
            </h1>
            <p className="text-xl text-muted-foreground">
              We follow a rigorous, agile methodology to ensure predictable results and timely delivery.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Process />
      
      <CTA />
      <Footer />
    </main>
  );
}
