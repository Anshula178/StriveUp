import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { CTA } from '@/components/home/cta';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const services: Record<string, {
  title: string;
  tagline: string;
  description: string;
  whatWeDeliver: string[];
  ourApproach: { step: string; detail: string }[];
  stack: string[];
}> = {
  'web-development': {
    title: 'Web Development',
    tagline: 'Fast, scalable websites that convert visitors into customers.',
    description:
      'We build high-performance web applications using Next.js and React. Every site we ship is SEO-optimised, fully responsive, and designed to load fast — because a slow website costs you revenue.',
    whatWeDeliver: [
      'Next.js / React web applications',
      'SEO-optimised page structure and metadata',
      'Responsive design across all devices',
      'CMS integration (Contentful, Sanity, Payload)',
      'Authentication, dashboards, and portals',
      'Deployment to Vercel or your own infrastructure',
    ],
    ourApproach: [
      { step: 'Discovery', detail: 'We understand your business goals, target audience, and success metrics before writing a single line of code.' },
      { step: 'Architecture', detail: 'We plan the tech stack, routing structure, and data flow to ensure the site scales as your business grows.' },
      { step: 'Build & Review', detail: 'Iterative development with regular check-ins. You see progress weekly, not just at the end.' },
      { step: 'Launch & Handoff', detail: 'We handle deployment, set up monitoring, and make sure your team can manage the site going forward.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Prisma'],
  },
  'custom-software': {
    title: 'Custom Software',
    tagline: 'Software built for your exact workflow — not the other way around.',
    description:
      'Off-the-shelf tools have their limits. We build tailor-made software solutions that automate your business processes, eliminate bottlenecks, and give you a genuine competitive edge.',
    whatWeDeliver: [
      'Web-based internal tools and admin dashboards',
      'Workflow automation and process management systems',
      'API design and third-party integrations',
      'Data pipelines and reporting systems',
      'Role-based access control and permissions',
      'Ongoing support and feature development',
    ],
    ourApproach: [
      { step: 'Process Audit', detail: 'We map out your current workflows to identify where custom software will save the most time and money.' },
      { step: 'Spec & Design', detail: 'We document exactly what we\'ll build and get your sign-off before development starts.' },
      { step: 'Iterative Development', detail: 'We ship in increments so you can use the software as it\'s built and give feedback early.' },
      { step: 'Deployment & Training', detail: 'We deploy to your environment and train your team on how to use and maintain the system.' },
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
  },
  'mobile-apps': {
    title: 'Mobile Apps',
    tagline: 'Native-quality apps that work on every device.',
    description:
      'We design and build mobile applications that feel fast, polished, and intuitive. Whether you need iOS, Android, or both — we deliver apps your users will actually enjoy using.',
    whatWeDeliver: [
      'Cross-platform apps with React Native',
      'Native iOS and Android development',
      'Push notifications and offline support',
      'App Store and Google Play submission',
      'Integration with your existing backend or APIs',
      'Analytics and crash reporting setup',
    ],
    ourApproach: [
      { step: 'UX Research', detail: 'We study how your target users interact with mobile apps and design flows that feel natural.' },
      { step: 'Prototype', detail: 'A clickable prototype before a single line of code is written — so you can feel the app before we build it.' },
      { step: 'Development', detail: 'Modular, testable code built for performance on real devices, not just simulators.' },
      { step: 'Store Launch', detail: 'We handle the full submission process and ensure your app meets all platform guidelines.' },
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Node.js'],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    tagline: 'Design that looks great and converts.',
    description:
      'Good design is not decoration — it\'s a business tool. We create interfaces that guide users toward action, reduce friction, and reflect your brand at its best.',
    whatWeDeliver: [
      'User research and persona development',
      'Information architecture and user flows',
      'Wireframes and interactive prototypes',
      'High-fidelity UI design in Figma',
      'Design system and component library',
      'Handoff-ready specs for engineering',
    ],
    ourApproach: [
      { step: 'Research', detail: 'We talk to your users, review analytics, and study competitors to understand where the design opportunities lie.' },
      { step: 'Wireframing', detail: 'Structure before style. We map out every screen and user journey before adding visual design.' },
      { step: 'Visual Design', detail: 'High-fidelity designs that reflect your brand and pass scrutiny at every viewport.' },
      { step: 'Prototype & Test', detail: 'Interactive prototypes tested with real users before handoff to engineering.' },
    ],
    stack: ['Figma', 'FigJam', 'Maze', 'Storybook'],
  },
  'headless-cms': {
    title: 'Headless CMS',
    tagline: 'Content management that fits your workflow.',
    description:
      'Headless CMS gives your team full control over content without depending on developers for every update. We set up flexible, structured content systems that your editors will actually enjoy using.',
    whatWeDeliver: [
      'CMS setup and configuration (Sanity, Contentful, Payload)',
      'Custom content schemas and structured data',
      'Frontend integration with Next.js',
      'Editorial workflow and role-based access',
      'Content migration from legacy systems',
      'Training for your content team',
    ],
    ourApproach: [
      { step: 'Content Audit', detail: 'We map all the content types your site needs and how editors will manage them day-to-day.' },
      { step: 'CMS Selection', detail: 'We recommend the right headless CMS for your team size, technical ability, and content complexity.' },
      { step: 'Schema Design', detail: 'We build structured content models that keep your data clean and reusable across channels.' },
      { step: 'Integration & Training', detail: 'We connect the CMS to your frontend and train your team to be self-sufficient.' },
    ],
    stack: ['Sanity', 'Contentful', 'Payload CMS', 'Next.js', 'GraphQL'],
  },
  'performance': {
    title: 'Performance Tuning',
    tagline: 'Every 100ms of load time costs you conversions.',
    description:
      'A slow website is an expensive problem. We audit, diagnose, and fix performance bottlenecks across your frontend, backend, and infrastructure — measurable improvements, every time.',
    whatWeDeliver: [
      'Lighthouse and Core Web Vitals audit',
      'Image and asset optimisation',
      'Bundle analysis and code splitting',
      'Server response time and TTFB improvements',
      'Caching strategy (CDN, browser, server-side)',
      'Database query optimisation',
    ],
    ourApproach: [
      { step: 'Audit', detail: 'Full performance audit using Lighthouse, WebPageTest, and profiling tools to identify every bottleneck.' },
      { step: 'Prioritise', detail: 'We rank issues by impact so the highest-value fixes happen first.' },
      { step: 'Implement', detail: 'Targeted fixes with before/after metrics for every change we make.' },
      { step: 'Monitor', detail: 'Set up real-user monitoring so performance regressions are caught early.' },
    ],
    stack: ['Next.js', 'Vercel', 'Cloudflare', 'Lighthouse', 'WebPageTest'],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} — STRIVEUP`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <Section className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Service</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              {service.title}
            </h1>
            <p className="text-2xl text-muted-foreground">{service.tagline}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* What We Deliver */}
      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">What We Deliver</h2>
              <ul className="space-y-3">
                {service.whatWeDeliver.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section className="py-16 bg-card/50">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.ourApproach.map((item, i) => (
              <div key={item.step} className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.step}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
