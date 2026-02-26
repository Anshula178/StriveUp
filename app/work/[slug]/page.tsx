import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { CTA } from '@/components/home/cta';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const caseStudies: Record<string, {
  title: string;
  category: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  stack: string[];
}> = {
  'fintech-dashboard': {
    title: 'FinTech Dashboard Redesign',
    category: 'SaaS / UI/UX',
    image: 'https://picsum.photos/id/1/1200/600',
    summary: 'Complete overhaul of a financial analytics platform, resulting in a 40% increase in user engagement.',
    challenge:
      'The client had a powerful analytics platform that users found difficult to navigate. High churn in the first 30 days was costing them MRR, and support tickets about "how to use" features were overwhelming their team.',
    solution:
      'We conducted user interviews, mapped the existing pain points, and redesigned the entire dashboard experience from scratch. The new information architecture made key metrics immediately visible. We replaced complex tables with visual charts, added contextual tooltips, and reduced the number of steps to complete common tasks by 60%.',
    results: [
      { metric: '40%', label: 'Increase in user engagement' },
      { metric: '60%', label: 'Fewer support tickets' },
      { metric: '25%', label: 'Reduction in 30-day churn' },
      { metric: '2 weeks', label: 'From audit to first prototype' },
    ],
    stack: ['Figma', 'React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
  },
  'ecommerce-scale-up': {
    title: 'E-Commerce Scale-Up',
    category: 'Web Development',
    image: 'https://picsum.photos/id/2/1200/600',
    summary: 'Migrating a legacy store to a headless Shopify + Next.js architecture, boosting load speeds by 300%.',
    challenge:
      'A fast-growing e-commerce brand was running on a heavily customised legacy platform that couldn\'t keep up. Page load times averaged 8 seconds, the mobile experience was broken, and the team couldn\'t make content updates without developer help.',
    solution:
      'We migrated the store to a headless architecture — Shopify as the commerce backend, Next.js for the storefront. We rebuilt every page with performance as the primary constraint, integrated a headless CMS for content management, and implemented edge caching via Vercel.',
    results: [
      { metric: '300%', label: 'Improvement in load speed' },
      { metric: '1.2s', label: 'Average page load time (down from 8s)' },
      { metric: '18%', label: 'Increase in conversion rate' },
      { metric: '100', label: 'Lighthouse performance score' },
    ],
    stack: ['Next.js', 'Shopify', 'Sanity CMS', 'Vercel', 'TypeScript', 'Tailwind CSS'],
  },
  'healthtech-mobile': {
    title: 'HealthTech Mobile App',
    category: 'Mobile App',
    image: 'https://picsum.photos/id/3/1200/600',
    summary: 'A HIPAA-compliant telemedicine app connecting patients with specialists in under 5 minutes.',
    challenge:
      'A healthcare startup needed a mobile app that could handle real-time video consultations, patient records, and appointment scheduling — all while meeting strict HIPAA compliance requirements. The previous vendor had spent 8 months without shipping a working prototype.',
    solution:
      'We took over the project, rebuilt the architecture from scratch with compliance built in at every layer, and shipped the first working version in 10 weeks. We implemented end-to-end encrypted video calls, a secure document vault for patient records, and an intelligent scheduling system that matches patients to available specialists.',
    results: [
      { metric: '<5 min', label: 'Average time to connect with a specialist' },
      { metric: '10 weeks', label: 'From kickoff to App Store launch' },
      { metric: '4.8★', label: 'App Store rating at launch' },
      { metric: '100%', label: 'HIPAA compliance on day one' },
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'AWS', 'WebRTC'],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: `${study.title} — STRIVEUP`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Back link + Header */}
      <Section className="pt-32 pb-12">
        <Container>
          <Button variant="ghost" className="mb-8 -ml-2 text-muted-foreground" asChild>
            <Link href="/work">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
            </Link>
          </Button>

          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">{study.category}</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground">{study.summary}</p>
          </div>
        </Container>
      </Section>

      {/* Hero image */}
      <Section className="pb-12 pt-0">
        <Container>
          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-border">
            <Image src={study.image} alt={study.title} fill className="object-cover" />
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section className="py-12 bg-card/50">
        <Container>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((r) => (
              <div key={r.label} className="bg-card border border-border rounded-2xl p-6 text-center space-y-2">
                <div className="font-heading text-3xl font-bold text-primary">{r.metric}</div>
                <div className="text-sm text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Challenge + Solution */}
      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{study.challenge}</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{study.solution}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stack */}
      <Section className="py-12 pb-16">
        <Container>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
