import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { WhyUs } from '@/components/home/why-us';
import { CTA } from '@/components/home/cta';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              About STRIVEUP
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a team of engineers, designers, and strategists dedicated to building the future of the web.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower ambitious companies with world-class digital products that drive real business growth. We believe in quality over quantity, and long-term partnerships over quick fixes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2020, STRIVEUP has grown from a small studio to a full-service agency, delivering over 150 projects for clients ranging from YC-backed startups to Fortune 500 companies.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
               {/* Placeholder for team image */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
               <div className="absolute inset-0 flex items-center justify-center text-white/20 font-heading text-4xl font-bold">
                 TEAM PHOTO
               </div>
            </div>
          </div>
        </Container>
      </Section>

      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
