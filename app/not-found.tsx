import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section, Container } from '@/components/ui/layout';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Section className="flex-grow flex items-center justify-center pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-6">
            404
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
