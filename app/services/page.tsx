import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Services } from '@/components/home/services';
import { CTA } from '@/components/home/cta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business goals. From concept to scale, we handle it all.
            </p>
          </div>
        </Container>
      </Section>
      
      <Services />
      
      <CTA />
      <Footer />
    </main>
  );
}
