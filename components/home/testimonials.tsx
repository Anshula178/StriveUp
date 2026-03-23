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
    <Section className="bg-background py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-accent/20" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10 pt-8 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground tracking-tight">{testimonial.author}</div>
                  <div className="text-xs font-medium text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
