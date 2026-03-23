export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  slug: string;
  author: string;
  readTime: string;
}

const rawPosts = [
  {
    title: 'The Future of Web Development: Server Components Explained',
    excerpt: 'Why React Server Components are changing the game for performance and SEO.',
    content: `React Server Components (RSC) represent a fundamental shift in how we build React applications. By moving the rendering of components to the server, we can significantly reduce the amount of JavaScript sent to the client, leading to faster load times and better SEO.

## What are Server Components?

Unlike traditional React components that render on the client, Server Components render exclusively on the server. This means they can access backend resources directly, such as databases or file systems, without needing an API layer.

## Key Benefits

1. **Zero Bundle Size:** Server Components don't add to the JavaScript bundle size.
2. **Direct Backend Access:** Fetch data directly from your database.
3. **Automatic Code Splitting:** Client components are automatically code-split.

As we move forward, adopting Server Components will become essential for building high-performance web applications.`,
    date: 'Oct 12, 2025',
    category: 'Technology',
    author: 'Sarah Jenkins',
    readTime: '5 min read'
  },
  {
    title: 'Scaling Your SaaS from 0 to 10k Users',
    excerpt: 'Lessons learned from scaling high-traffic applications on AWS and Vercel.',
    content: `Scaling a SaaS application is a journey fraught with technical challenges. Going from zero to 10,000 users requires a solid architectural foundation and a proactive approach to performance tuning.

## The Early Days

When you're just starting, a monolithic architecture is often sufficient. However, as traffic grows, you'll start noticing bottlenecks.

## Strategies for Scaling

- **Database Optimization:** Indexing, query optimization, and read replicas are crucial.
- **Caching:** Implement caching layers using Redis or Memcached to reduce database load.
- **Microservices:** Break down your monolith into smaller, manageable services.
- **CDN:** Use a Content Delivery Network to serve static assets globally.

Scaling is an iterative process. Monitor your application closely and address bottlenecks as they arise.`,
    date: 'Sep 28, 2025',
    category: 'Business',
    author: 'David Chen',
    readTime: '7 min read'
  },
  {
    title: 'Why Design Systems Matter for Enterprise Growth',
    excerpt: 'How a consistent design system can speed up development velocity by 50%.',
    content: `A design system is more than just a UI kit; it's a comprehensive guide that dictates how your product looks and feels. For enterprise companies, a robust design system is essential for maintaining consistency and accelerating development.

## The Cost of Inconsistency

Without a design system, teams often duplicate effort, leading to inconsistent user experiences and bloated codebases.

## Building a Design System

1. **Audit Existing UI:** Identify common patterns and components.
2. **Establish Foundations:** Define colors, typography, and spacing.
3. **Create Components:** Build reusable UI components.
4. **Document Everything:** Ensure teams know how to use the system.

Investing in a design system pays dividends in the long run, enabling teams to build faster and better.`,
    date: 'Sep 15, 2025',
    category: 'Design',
    author: 'Michael Ross',
    readTime: '6 min read'
  }
];

// Generate slugs dynamically based on the title
export const posts: BlogPost[] = rawPosts.map(post => ({
  ...post,
  slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}
