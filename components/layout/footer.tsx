import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                STRIVEUP
              </span>
              <div className="h-2 w-2 rounded-full bg-primary" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building business-ready, high-conversion digital products for ambitious companies. Technical excellence meets modern design.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'App Development', 'UI/UX Design', 'Headless CMS', 'Custom Software', 'Performance Tuning'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Process', 'Case Studies', 'Careers', 'Blog', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Tech District,<br />Innovation City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:hello@striveup.com" className="hover:text-white transition-colors">hello@striveup.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+15550000000" className="hover:text-white transition-colors">+1 (555) 000-0000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} STRIVEUP. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & Built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
