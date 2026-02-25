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
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <img 
                  src="/logo-light.png" 
                  alt="STRIVEUP" 
                  className="absolute inset-0 w-full h-full object-contain dark:hidden"
                />
                <img 
                  src="/logo-dark.png" 
                  alt="STRIVEUP" 
                  className="absolute inset-0 w-full h-full object-contain hidden dark:block"
                />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                STRIVEUP
              </span>
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button variant="glow" asChild>
                <Link href="/contact">Book Strategy Call</Link>
              </Button>
            </div>

            {/* Mobile Toggle (Visible only on mobile when at top) */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                className="text-foreground p-2"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Floating Hamburger Button (Visible when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-6 right-6 z-50"
          >
            <ScrollProgressButton 
              isOpen={isOpen} 
              onClick={() => setIsOpen(!isOpen)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Menu Overlay */}
      <FullScreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
