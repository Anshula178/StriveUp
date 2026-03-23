'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layout, 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Zap,
  Search,
  Globe,
  BarChart
} from 'lucide-react';

const servicesData: Record<string, any> = {
  'web-development': {
    title: 'Web Development',
    description: 'High-performance websites built with Next.js and React. SEO-optimized and scalable.',
    content: 'Our web development services focus on building fast, secure, and scalable applications. We leverage modern frameworks like Next.js and React to deliver exceptional digital experiences that drive business growth.',
    features: [
      { title: 'Responsive Design', description: 'Flawless experience across all devices.', icon: Layout },
      { title: 'SEO Optimized', description: 'Built with search engines in mind.', icon: Search },
      { title: 'Lightning Fast', description: 'Optimized for speed and performance.', icon: Zap },
    ],
    benefits: ['Increased Conversion Rates', 'Better Search Rankings', 'Enhanced User Experience', 'Scalable Architecture']
  },
  'custom-software': {
    title: 'Custom Software',
    description: 'Tailor-made software solutions to automate workflows and solve complex business problems.',
    content: 'We build custom software that perfectly aligns with your business processes. From internal tools to complex enterprise systems, our solutions are designed to improve efficiency and scalability.',
    features: [
      { title: 'Workflow Automation', description: 'Streamline your business processes.', icon: Code },
      { title: 'API Integration', description: 'Seamlessly connect your tools.', icon: Database },
      { title: 'Secure Architecture', description: 'Enterprise-grade security built-in.', icon: CheckCircle2 },
    ],
    benefits: ['Improved Efficiency', 'Reduced Operational Costs', 'Competitive Advantage', 'Data-Driven Insights']
  },
  'mobile-apps': {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    content: 'Reach your customers wherever they are with our custom mobile app development. We build intuitive, high-performance apps for iOS and Android that users love.',
    features: [
      { title: 'Cross-Platform', description: 'React Native for iOS and Android.', icon: Smartphone },
      { title: 'Native Performance', description: 'Smooth animations and fast load times.', icon: Zap },
      { title: 'Offline Support', description: 'Keep working without an internet connection.', icon: Database },
    ],
    benefits: ['Increased Customer Engagement', 'Brand Loyalty', 'New Revenue Streams', 'Direct Marketing Channel']
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'User-centric design that converts. We craft beautiful, intuitive interfaces.',
    content: 'Our design process puts your users first. We create visually stunning and highly intuitive interfaces that not only look great but also drive conversions and user satisfaction.',
    features: [
      { title: 'User Research', description: 'Data-driven design decisions.', icon: Search },
      { title: 'Prototyping', description: 'Interactive models of your product.', icon: Layout },
      { title: 'Design Systems', description: 'Consistent and scalable UI components.', icon: Palette },
    ],
    benefits: ['Higher User Retention', 'Reduced Development Costs', 'Stronger Brand Identity', 'Improved Accessibility']
  },
  'headless-cms': {
    title: 'Headless CMS',
    description: 'Flexible content management systems that give you full control without the bloat.',
    content: 'Decouple your content from your presentation layer with a Headless CMS. We implement scalable content architectures that allow your team to publish anywhere, instantly.',
    features: [
      { title: 'Omnichannel Publishing', description: 'Publish once, display everywhere.', icon: Globe },
      { title: 'Flexible Architecture', description: 'Choose your own frontend stack.', icon: Layout },
      { title: 'Scalable Content', description: 'Manage thousands of pages easily.', icon: Database },
    ],
    benefits: ['Faster Time to Market', 'Future-Proof Technology', 'Enhanced Security', 'Better Developer Experience']
  },
  'performance': {
    title: 'Performance Tuning',
    description: 'Speed matters. We optimize your digital assets for maximum speed and conversion.',
    content: 'A slow website costs you customers. Our performance tuning services identify bottlenecks and implement optimizations to ensure your digital products load instantly and perform flawlessly.',
    features: [
      { title: 'Core Web Vitals', description: 'Optimize for Google\'s performance metrics.', icon: BarChart },
      { title: 'Asset Optimization', description: 'Compress images and minify code.', icon: Zap },
      { title: 'Caching Strategies', description: 'Implement advanced caching layers.', icon: Database },
    ],
    benefits: ['Lower Bounce Rates', 'Higher Search Rankings', 'Improved Conversion Rates', 'Better User Experience']
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground border border-border">
              Service Details
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Content & Features */}
      <Section className="py-16 bg-secondary/20 border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.content}
              </p>
              
              <div className="pt-6 space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {service.features.map((feature: any, index: number) => (
                <div 
                  key={index}
                  className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-foreground">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 relative overflow-hidden">
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-[2.5rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-xl"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Ready to start your {service.title} project?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your business goals with our expert team.
            </p>
            <Button size="lg" className="h-14 px-10 text-base" asChild>
              <Link href="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
