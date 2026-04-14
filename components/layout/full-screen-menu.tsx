'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Instagram, Linkedin, Facebook, Twitter, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  showCloseButton?: boolean;
}

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/work' },
  { name: 'Industries', href: '/industries' },
  { name: 'About Us', href: '/about' },
];

const secondaryLinks = [
  { name: 'Process', href: '/process' },
  { name: 'Clients', href: '/clients' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blogs', href: '/blog' },
  { name: 'White Papers', href: '/white-papers' },
  { name: 'Contact Us', href: '/contact' },
];

const industries = [
  'Telecom', 'Edtech', 'Fintech', 'Healthcare',
  'Agriculture', 'Enterprise', 'E-Commerce', 'Real Estate'
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export function FullScreenMenu({ isOpen, onClose, showCloseButton = true }: FullScreenMenuProps) {
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-background text-foreground flex flex-col"
        >
          {/* Close Button */}
          {showCloseButton && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors group"
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-foreground group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          )}

          <div className="flex-1 flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
            {/* Left Panel - Primary Navigation */}
            <div 
              className="w-full md:w-1/2 lg:w-3/5 bg-background p-8 md:p-16 flex flex-col justify-between relative overflow-hidden border-r border-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 mt-12 md:mt-0">
                {/* Primary Links */}
                <nav className="flex flex-col gap-6">
                  {primaryLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={onClose}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground hover:text-accent transition-colors inline-block tracking-tight"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Secondary Links & Industries */}
                <div className="flex flex-col gap-10">
                  <div className="space-y-4">
                    {secondaryLinks.map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <Link 
                          href={link.href}
                          onClick={onClose}
                          className="text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors font-medium"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <motion.h4 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground/60 font-bold uppercase tracking-widest text-xs"
                    >
                      Industries
                    </motion.h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {industries.map((industry, idx) => (
                        <motion.span
                          key={industry}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                          className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors font-medium"
                        >
                          {industry}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Footer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12 md:mt-0 flex flex-wrap gap-6 text-muted-foreground"
              >
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="hover:text-foreground transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right Panel - CTA */}
            <div 
              className="w-full md:w-1/2 lg:w-2/5 bg-background p-8 md:p-16 flex flex-col justify-center relative"
            >
              <div className="max-w-md mx-auto w-full">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block"
                >
                  Got An Idea?
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
                >
                  Let&apos;s craft <br />
                  brilliance together.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base h-14 px-10"
                    asChild
                  >
                    <Link href="/contact" onClick={onClose}>
                      Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-20 flex gap-8 text-muted-foreground text-sm font-medium"
                >
                  <span>India</span>
                  <span>USA</span>
                  <span>UAE</span>
                  <span>Vietnam</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
