'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
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

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <Container className="py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="default" className="w-full justify-center" asChild>
                  <Link href="/contact">Book Strategy Call</Link>
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
