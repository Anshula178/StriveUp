'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background perspective-1000 transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 102, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 102, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'
          }}
        />

        {/* Blue Glow / Nebula Effect */}
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px]" 
        />
        
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" 
        />

        {/* Floating Particles/Digital Dust */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          

          <div className="perspective-1000">
            <h1
              className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] drop-shadow-xl dark:drop-shadow-2xl"
            >
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-purple-500 animate-gradient-x">Digital Empires</span> for the Bold.
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Ready to Scale Your Business? STRIVEUP is a premium IT & Web Development agency. We craft high-conversion websites, scalable software, and pixel-perfect experiences that drive real business growth.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,102,255,0.3)] border-0" asChild>
              <Link href="/contact">
                Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-border hover:bg-accent hover:text-accent-foreground backdrop-blur-sm" asChild>
              <Link href="/work">
                View Our Work <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust Metrics */}
          <div
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border mt-12"
          >
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Revenue Generated', value: '$50M+' },
              { label: 'Years Experience', value: '10+' },
            ].map((metric) => (
              <div key={metric.label} className="group">
                <div className="font-heading text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{metric.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors duration-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
