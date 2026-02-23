'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "STRIVEUP transformed our outdated platform into a modern, high-speed application. Our conversion rates doubled within a month of launch.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Solutions",
    company: "FinTech Solutions"
  },
  {
    quote: "The team's attention to detail and engineering standards are world-class. They didn't just build what we asked for; they built what we needed.",
    author: "David Chen",
    role: "Founder, E-Comm Ventures",
    company: "E-Comm Ventures"
  },
  {
    quote: "Reliable, transparent, and incredibly skilled. STRIVEUP is the partner you want when the stakes are high.",
    author: "Michael Ross",
    role: "VP of Engineering, HealthPlus",
    company: "HealthPlus"
  }
];

export function Testimonials() {
  return (
    <Section className="bg-secondary/10 border-t border-white/5">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-white/5 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <p className="text-muted-foreground text-lg italic mb-6 relative z-10 pt-8">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
