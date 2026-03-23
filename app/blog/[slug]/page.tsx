'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Section, Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug } from '../data';
import Markdown from 'react-markdown';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const post = getPostBySlug(slug);

  if (!post) {
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
            className="max-w-3xl mx-auto space-y-6"
          >
            <Button variant="ghost" size="sm" className="mb-4 -ml-4 text-muted-foreground hover:text-foreground" asChild>
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-accent uppercase tracking-wider">{post.category}</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="py-16 bg-background">
        <Container>
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto prose dark:prose-invert prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80 prose-img:rounded-2xl"
          >
            <div className="markdown-body">
              <Markdown>{post.content}</Markdown>
            </div>
          </motion.article>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
