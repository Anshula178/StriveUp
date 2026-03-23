'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';
import { ThemeToggle } from '@/components/theme-toggle';
import { FullScreenMenu } from './full-screen-menu';
import { ScrollProgressButton } from '@/components/ui/scroll-progress-button';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = 10;
    if (latest > threshold && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= threshold && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <>
      {/* Full Navbar (Visible at top) */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border"
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.1, ease: 'linear' }}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Ascending slanted bars representing growth and tech */}
                  <path d="M1 30 L7 18 H11 L5 30 Z" fill="currentColor" className="text-foreground/60 transition-colors group-hover:text-foreground/80" />
                  <path d="M9 26 L17 10 H21 L13 26 Z" fill="currentColor" className="text-foreground/80 transition-colors group-hover:text-foreground" />
                  <path d="M17 22 L27 2 H31 L21 22 Z" fill="currentColor" className="text-accent" />
                </svg>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground transition-colors">
                STRIVE<span className="text-accent">UP</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button asChild>
                <Link href="/contact">Book Strategy Call</Link>
              </Button>
            </div>

            {/* Mobile Toggle (Visible only on mobile when at top) */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                className="text-foreground p-2 hover:text-accent transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Floating Hamburger Button (Visible when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-[70]"
          >
            <ScrollProgressButton 
              isOpen={isOpen} 
              onClick={() => setIsOpen(!isOpen)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Menu Overlay */}
      <FullScreenMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        showCloseButton={!isScrolled}
      />
    </>
  );
}
