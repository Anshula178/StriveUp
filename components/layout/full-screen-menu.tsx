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

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
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
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-background text-foreground flex flex-col"
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors group"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 text-foreground group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex-1 flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
            {/* Left Panel - Primary Navigation */}
            <div 
              className="w-full md:w-1/2 lg:w-3/5 bg-primary p-8 md:p-16 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {/* Primary Links */}
                <nav className="flex flex-col gap-4">
                  {primaryLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={onClose}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground hover:text-white/80 transition-colors inline-block"
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
                        transition={{ delay: 0.4 + idx * 0.05 }}
                      >
                        <Link 
                          href={link.href}
                          onClick={onClose}
                          className="text-lg md:text-xl text-primary-foreground/90 hover:text-white transition-colors"
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
                      transition={{ delay: 0.6 }}
                      className="text-primary-foreground/60 font-medium uppercase tracking-wider text-sm"
                    >
                      Industries
                    </motion.h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {industries.map((industry, idx) => (
                        <motion.span
                          key={industry}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + idx * 0.05 }}
                          className="text-primary-foreground/80 text-sm hover:text-white cursor-pointer transition-colors"
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
                transition={{ delay: 0.8 }}
                className="mt-12 md:mt-0 flex flex-wrap gap-6 text-primary-foreground/80"
              >
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="hover:text-white transition-colors text-sm font-medium"
                  >
                    {social.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right Panel - CTA (Dark Background) */}
            <div 
              className="w-full md:w-1/2 lg:w-2/5 bg-[#0B1120] p-8 md:p-16 flex flex-col justify-center relative"
            >
              <div className="max-w-md mx-auto w-full">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-blue-400 font-medium mb-4 block"
                >
                  Got An Idea?
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
                >
                  Let&apos;s craft <br />
                  brilliance together!
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 py-6 text-lg bg-transparent border border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                    asChild
                  >
                    <Link href="/contact">
                      Get In Touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-20 flex gap-8 text-white/40 text-sm"
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
