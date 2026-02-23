import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Process } from '@/components/home/process';
import { CTA } from '@/components/home/cta';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Our Process
            </h1>
            <p className="text-xl text-muted-foreground">
              We follow a rigorous, agile methodology to ensure predictable results and timely delivery.
            </p>
          </div>
        </Container>
      </Section>

      <Process />
      
      <CTA />
      <Footer />
    </main>
  );
}
