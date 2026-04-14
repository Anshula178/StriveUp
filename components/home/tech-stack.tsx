'use client';

import { Section, Container } from '@/components/ui/layout';

const technologies = [
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'GraphQL', slug: 'graphql' },
  { name: 'Webflow', slug: 'webflow' },    // Added
  { name: 'WordPress', slug: 'wordpress' }, // Added
 
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Prisma', slug: 'prisma' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Stripe', slug: 'stripe' }
];

export function TechStack() {
  return (
    <Section className="py-20  bg-background overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
            Powered by Modern Technologies
          </p>
        </div>
        
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          
          <div className="animate-marquee whitespace-nowrap flex items-center gap-10 md:gap-20 py-4 w-max hover:[animation-play-state:paused]">
            {technologies.map((tech, i) => (
              <div key={`${tech.slug}-${i}`} className="flex flex-col items-center justify-center gap-4 group shrink-0">
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.slug}`} 
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors uppercase tracking-widest text-center">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, i) => (
              <div key={`${tech.slug}-dup-${i}`} className="flex flex-col items-center justify-center gap-4 group shrink-0">
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.slug}`} 
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors uppercase tracking-widest text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}