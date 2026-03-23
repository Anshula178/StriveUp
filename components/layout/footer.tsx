'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M1 30 L7 18 H11 L5 30 Z" fill="currentColor" className="text-foreground/60 transition-colors group-hover:text-foreground/80" />
                  <path d="M9 26 L17 10 H21 L13 26 Z" fill="currentColor" className="text-foreground/80 transition-colors group-hover:text-foreground" />
                  <path d="M17 22 L27 2 H31 L21 22 Z" fill="currentColor" className="text-accent" />
                </svg>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground transition-colors">
                STRIVE<span className="text-accent">UP</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building business-ready, high-conversion digital products for ambitious companies. Technical excellence meets modern design.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <Link href={social.href} className="text-muted-foreground hover:text-accent transition-colors block p-2 bg-secondary rounded-lg border border-border hover:border-accent/30">
                    <social.icon className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 tracking-tight">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'App Development', 'UI/UX Design', 'Headless CMS', 'Custom Software', 'Performance Tuning'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 tracking-tight">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Process', 'Case Studies', 'Careers', 'Blog', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 tracking-tight">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Tech District,<br />Innovation City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:hello@striveup.com" className="hover:text-foreground transition-colors">hello@striveup.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+15550000000" className="hover:text-foreground transition-colors">+1 (555) 000-0000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} STRIVEUP. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            Designed & Built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
