import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { Process } from '@/components/home/process';
import { WhyUs } from '@/components/home/why-us';
import { TechStack } from '@/components/home/tech-stack';
import { CaseStudies } from '@/components/home/case-studies';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <WhyUs />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
