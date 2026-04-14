'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      projectType: (form.elements.namedItem('projectType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

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
                Let&apos;s Build Something <span className="text-primary">Extraordinary</span>.
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to scale? Schedule a free strategy call or drop us a message. We usually respond within 2 hours.
              </p>

              <div className="space-y-6 pt-8">
                {[
                  { icon: Mail, label: 'Email Us', value: 'striveup.solutions@gmail.com' },
                  { icon: Phone, label: 'Call Us', value: '+1 (555) 000-0000' },
                  { icon: MapPin, label: 'Visit Us', value: '123 Tech District, Innovation City' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <CheckCircle className="w-16 h-16 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">Message Sent!</h2>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you within 2 hours.
                  </p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <input
                        name="firstName"
                        required
                        type="text"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <input
                        name="lastName"
                        type="text"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Type</label>
                    <select
                      name="projectType"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    >
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Custom Software</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      name="message"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors min-h-[120px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <Button size="lg" className="w-full text-lg" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
