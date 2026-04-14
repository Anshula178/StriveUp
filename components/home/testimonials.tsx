'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const trustSignals = [
  'Founder-led product thinking',
  'Senior engineers only',
  'Fast-moving delivery cycles',
];

const testimonials = [
  {
    quote:
      'STRIVEUP transformed our outdated platform into a modern, high-speed application. Our conversion rates doubled within a month of launch.',
    author: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinTech Solutions',
    accent: 'from-cyan-500/20 to-blue-500/5',
  },
  {
    quote:
      "The team's attention to detail and engineering standards are world-class. They didn't just build what we asked for; they built what we needed.",
    author: 'David Chen',
    role: 'Founder',
    company: 'E-Comm Ventures',
    accent: 'from-violet-500/20 to-fuchsia-500/5',
  },
  {
    quote:
      'Reliable, transparent, and incredibly skilled. STRIVEUP is the partner you want when the stakes are high.',
    author: 'Michael Ross',
    role: 'VP of Engineering',
    company: 'HealthPlus',
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
  {
    quote:
      'Their team moved fast without sacrificing quality. We shipped a polished MVP in weeks and impressed investors immediately.',
    author: 'Priya Kapoor',
    role: 'Co-Founder',
    company: 'LaunchBridge',
    accent: 'from-amber-500/20 to-orange-500/5',
  },
  {
    quote:
      'From product strategy to engineering execution, STRIVEUP felt like an extension of our internal leadership team.',
    author: 'James Walker',
    role: 'Head of Product',
    company: 'ScaleForge',
    accent: 'from-rose-500/20 to-pink-500/5',
  },
  {
    quote:
      'Communication was clear, deadlines were met, and the final product exceeded every benchmark we had set internally.',
    author: 'Elena Martinez',
    role: 'Director of Digital',
    company: 'Nova Retail',
    accent: 'from-sky-500/20 to-indigo-500/5',
  },
];

const AUTOPLAY_DELAY = 4000;

function getCardsPerView(width: number) {
  return 1;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (testimonials.length <= cardsPerView) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [cardsPerView]);

  const visibleTestimonials = useMemo(() => {
    const count = Math.min(cardsPerView, testimonials.length);

    return Array.from({ length: count }, (_, offset) => {
      const idx = (currentIndex + offset) % testimonials.length;
      const testimonial = testimonials[idx];
      return { ...testimonial, displayIndex: offset, stableKey: testimonial.author };
    });
  }, [cardsPerView, currentIndex]);

  const totalPages = testimonials.length;
  const canNavigate = testimonials.length > cardsPerView;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Section className="relative overflow-hidden bg-background py-24">
      <Container>
        {/* items-center vertically aligns left content with the card */}
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.35fr]">

          {/* LEFT */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Trusted by Industry Leaders
            </div>

            <h2 className="mt-6 max-w-lg font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Not generic praise.
              <span className="block text-muted-foreground">
                Real confidence from teams shipping serious products.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              STRIVEUP partners with ambitious companies that need speed,
              clarity, and product execution that feels senior from day one.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground shadow-sm backdrop-blur"
                >
                  {signal}
                </div>
              ))}
            </div>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  95%
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  of clients continue into long-term product work.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  50+
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  launches, redesigns, and platform rebuilds delivered.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="pointer-events-none absolute -left-10 top-8 hidden h-[80%] w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.stableKey}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  // Removed all tilt classes — card is perfectly straight
                  // Removed ml offsets — card is full width and centered
                  className="group relative overflow-hidden rounded-[28px] border border-border bg-card p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 will-change-transform md:p-8"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[27px] bg-card/92" />

                  <div className="relative">
                    <div className="mb-6">
                      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        {testimonial.company}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground/70">
                        {testimonial.role}
                      </div>
                    </div>

                    <Quote className="h-9 w-9 text-accent/30" />

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/90">
                      "{testimonial.quote}"
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-bold text-foreground">
                        {testimonial.author
                          .split(' ')
                          .map((part) => part[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>

            {canNavigate && (
              <div className="mt-8 flex items-center justify-end gap-4">
                {/* <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentIndex(page)}
                      aria-label={`Go to testimonial ${page + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === page
                          ? 'w-8 bg-accent'
                          : 'w-2.5 bg-border hover:bg-muted-foreground/40'
                      }`}
                    />
                  ))}
                </div> */}

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-x-0.5 hover:border-accent hover:text-accent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:translate-x-0.5 hover:border-accent hover:text-accent"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
}