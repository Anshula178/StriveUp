'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary-foreground/80 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Accepting New Projects for Q2 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Empires</span> for the Bold.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            STRIVEUP is a premium IT & Web Development agency. We craft high-conversion websites, scalable software, and pixel-perfect experiences that drive real business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="glow" className="w-full sm:w-auto text-base h-12 px-8" asChild>
              <Link href="/contact">
                Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-white/10 hover:bg-white/5" asChild>
              <Link href="/work">
                View Our Work <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-12"
          >
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Revenue Generated', value: '$50M+' },
              { label: 'Years Experience', value: '10+' },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="font-heading text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
