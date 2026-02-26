'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Briefcase, Heart, Zap, Users, Globe, Clock,
  BookOpen, TrendingUp, CheckCircle, AlertCircle,
  MapPin, ArrowRight, Laptop, Code, Palette, Server, Smartphone,
} from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const values = [
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'We ship quickly, iterate often, and value results over process.',
  },
  {
    icon: Heart,
    title: 'Care Deeply',
    description: 'We care about the products we build, the clients we serve, and each other.',
  },
  {
    icon: Users,
    title: 'Grow Together',
    description: 'Everyone on the team has a voice. We learn from each other every day.',
  },
  {
    icon: Briefcase,
    title: 'Own Your Work',
    description: 'No micromanagement. You own your scope from start to finish.',
  },
];

const perks = [
  { icon: Globe, title: 'Remote First', description: 'Work from anywhere in the world. We are fully remote.' },
  { icon: Clock, title: 'Flexible Hours', description: 'We care about output, not when you clock in or out.' },
  { icon: BookOpen, title: 'Learning Budget', description: 'Annual budget for courses, books, and conferences.' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Mentorship, clear growth paths, and regular reviews.' },
  { icon: Laptop, title: 'Equipment Budget', description: 'Get the tools you need to do your best work.' },
  { icon: Heart, title: 'Health & Wellness', description: 'We invest in the health and wellbeing of our team.' },
];

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    type: 'Remote',
    location: 'Worldwide',
    icon: Code,
    description: 'Build scalable web applications using Next.js, Node.js, and modern cloud infrastructure.',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Remote',
    location: 'Worldwide',
    icon: Palette,
    description: 'Craft beautiful, intuitive interfaces that delight users and drive real business results.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    title: 'React Native Developer',
    department: 'Mobile',
    type: 'Remote',
    location: 'Worldwide',
    icon: Smartphone,
    description: 'Build high-performance cross-platform mobile applications for iOS and Android.',
    tags: ['React Native', 'TypeScript', 'iOS', 'Android'],
  },
  {
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    type: 'Remote',
    location: 'Worldwide',
    icon: Server,
    description: 'Own our cloud infrastructure, CI/CD pipelines, and ensure 99.9% uptime.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];

export default function CareersPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedRole, setSelectedRole] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const role = (form.elements.namedItem('role') as HTMLSelectElement).value;
    const portfolio = (form.elements.namedItem('portfolio') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name.split(' ')[0],
          lastName: name.split(' ').slice(1).join(' ') || '',
          email,
          projectType: `Career Application — ${role}`,
          message: `Portfolio / LinkedIn: ${portfolio || 'Not provided'}\n\n${message}`,
        }),
      });

      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      form.reset();
      setSelectedRole('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              We&apos;re Hiring
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Build the Future{' '}
              <span className="text-primary">With Us</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re a small, focused team building ambitious digital products for bold companies.
              If you&apos;re sharp, self-driven, and care about craft — we want to hear from you.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button variant="glow" size="lg" className="gap-2" asChild>
                <a href="#open-roles">
                  View Open Roles <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#apply">Apply Now</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 relative z-10"
          >
            {[
              { value: '100%', label: 'Remote' },
              { value: '12+', label: 'Projects Shipped' },
              { value: '4', label: 'Countries' },
              { value: '∞', label: 'Growth Potential' },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <div className="font-heading text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Perks & Benefits */}
      <Section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest">Why Join Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Perks & Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We take care of the people who take care of our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 space-y-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <perk.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Company Values */}
      <Section className="py-20 bg-primary/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest">Our DNA</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Roles */}
      <Section id="open-roles" className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest">Join the Team</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Open Roles</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We&apos;re always looking for exceptional people. Here are our current openings.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <role.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-xl font-bold text-foreground">{role.title}</h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {role.department}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{role.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted-foreground border border-border rounded-md px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4" /> {role.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {role.location}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 hover:border-primary hover:text-primary transition-colors"
                      onClick={() => {
                        setSelectedRole(role.title);
                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section id="apply" className="py-20 bg-primary/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-3"
            >
              <p className="text-primary font-medium text-sm uppercase tracking-widest">Get In Touch</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Apply Now</h2>
              <p className="text-muted-foreground text-lg">
                Send us your details and we&apos;ll get back to you within 48 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                  <CheckCircle className="w-16 h-16 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">Application Sent!</h2>
                  <p className="text-muted-foreground">
                    Thanks for applying. We&apos;ll review your application and get back to you within 48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <input
                        name="name"
                        required
                        type="text"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Role You&apos;re Applying For</label>
                    <select
                      name="role"
                      required
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    >
                      <option value="">Select a role...</option>
                      {openRoles.map((r) => (
                        <option key={r.title} value={r.title}>{r.title}</option>
                      ))}
                      <option value="Other / General Application">Other / General Application</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Portfolio / LinkedIn URL</label>
                    <input
                      name="portfolio"
                      type="url"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tell Us About Yourself</label>
                    <textarea
                      name="message"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors min-h-[140px]"
                      placeholder="Share your experience, what you're passionate about, and why you want to join STRIVEUP..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again or email us at striveup.solutions@gmail.com
                    </div>
                  )}

                  <Button size="lg" className="w-full text-lg" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting…' : 'Submit Application'}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Or email us directly at{' '}
                    <a
                      href="mailto:striveup.solutions@gmail.com"
                      className="text-primary underline underline-offset-2"
                    >
                      striveup.solutions@gmail.com
                    </a>
                  </p>
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
