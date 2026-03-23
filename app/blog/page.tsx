'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import { posts } from './data';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Section className="pt-32 pb-12">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20, translateZ: -50 }}
            animate={{ opacity: 1, y: 0, translateZ: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6 perspective-1000"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on technology, design, and business growth.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20, translateZ: -50 }}
                whileInView={{ opacity: 1, y: 0, translateZ: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="preserve-3d"
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full bg-card border-border hover:border-accent/50 transition-all duration-300 preserve-3d">
                    <CardHeader className="preserve-3d">
                      <div className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                        {post.category}
                      </div>
                      <CardTitle className="group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="preserve-3d">
                      <CardDescription className="text-base mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="text-sm text-muted-foreground">
                        {post.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      
      <Footer />
    </main>
  );
}
