'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 perspective-1000">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20, translateZ: -50 }}
              animate={{ opacity: 1, x: 0, translateZ: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 preserve-3d"
            >
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
                Let&apos;s Build Something <span className="text-accent">Extraordinary</span>.
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to scale? Schedule a free strategy call or drop us a message. We usually respond within 2 hours.
              </p>
              
              <div className="space-y-6 pt-8">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@striveup.com" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000" },
                  { icon: MapPin, label: "Visit Us", value: "123 Tech District, Innovation City" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-lg font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20, translateZ: -50 }}
              animate={{ opacity: 1, x: 0, translateZ: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-2xl preserve-3d"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors">
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Custom Software</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors min-h-[120px]" placeholder="Tell us about your project..." />
                </div>

                <Button size="lg" className="w-full text-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
