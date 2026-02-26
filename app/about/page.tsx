'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { WhyUs } from '@/components/home/why-us';
import { CTA } from '@/components/home/cta';
import { Team } from '@/components/about/team';
import { motion } from 'motion/react';

export default function AboutPage() {
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
              About STRIVEUP
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a team of engineers, designers, and strategists dedicated to building the future of the web.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower ambitious companies with world-class digital products that drive real business growth. We believe in quality over quantity, and long-term partnerships over quick fixes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We&apos;re a new company — but our team brings years of hands-on experience building products for startups and enterprises alike. Every project gets our full attention and senior-level execution.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Team />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
