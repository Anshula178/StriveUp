import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const posts = [
  {
    title: 'The Future of Web Development: Server Components Explained',
    excerpt: 'Why React Server Components are changing the game for performance and SEO.',
    date: 'Oct 12, 2025',
    category: 'Technology',
    slug: 'future-of-web-dev'
  },
  {
    title: 'Scaling Your SaaS from 0 to 10k Users',
    excerpt: 'Lessons learned from scaling high-traffic applications on AWS and Vercel.',
    date: 'Sep 28, 2025',
    category: 'Business',
    slug: 'scaling-saas'
  },
  {
    title: 'Why Design Systems Matter for Enterprise Growth',
    excerpt: 'How a consistent design system can speed up development velocity by 50%.',
    date: 'Sep 15, 2025',
    category: 'Design',
    slug: 'design-systems'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on technology, design, and business growth.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full bg-card border-white/10 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                      {post.category}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="text-sm text-muted-foreground">
                      {post.date}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      
      <Footer />
    </main>
  );
}
