'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope, but as a rough guide: a marketing website takes 3–6 weeks, a web app or SaaS product takes 8–16 weeks, and a mobile app takes 10–18 weeks. We give a detailed timeline after the discovery call.',
  },
  {
    question: 'What does your process look like?',
    answer:
      'Every project goes through four stages: Brief & Research → Sitemap & Wireframing → Design & Content → Build & Launch. You\'re involved at every stage with regular check-ins, not just at the end.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Every project is scoped individually — we don\'t do fixed packages because cookie-cutter work produces cookie-cutter results. Book a free strategy call and we\'ll give you a clear estimate based on your actual requirements.',
  },
  {
    question: 'Do you work with early-stage startups or only established companies?',
    answer:
      'Both. We work with founders who are pre-launch and need their first product built right, and with established companies that need to scale or modernise their tech. What matters is that you\'re serious about building something great.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'We default to Next.js, React, TypeScript, and Tailwind CSS on the frontend, with Node.js and PostgreSQL on the backend. We\'re also experienced with React Native, AWS, Docker, and a range of headless CMS platforms. We choose tools based on what\'s right for the project, not just what\'s trendy.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. We offer retainer-based maintenance and support packages. Whether you need bug fixes, feature development, or someone on call — we can structure an arrangement that fits your needs.',
  },
  {
    question: 'Will I own the code?',
    answer:
      'Absolutely. You own 100% of the code, design files, and all other deliverables from day one. No lock-in, no licencing fees.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base md:text-lg font-semibold text-foreground">{question}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Still have questions? Email us at{' '}
              <a href="mailto:striveup.solutions@gmail.com" className="text-primary underline underline-offset-2">
                striveup.solutions@gmail.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl px-6 md:px-8"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
