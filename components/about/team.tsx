'use client';

import { Section, Container } from '@/components/ui/layout';
import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Full-stack engineer turned founder. Obsessed with building products that actually move the needle for businesses.',
    avatar: 'AR',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Maya Patel',
    role: 'Head of Design',
    bio: 'Pixel-perfect UI/UX designer with a background in conversion-focused design. She turns complex problems into clean interfaces.',
    avatar: 'MP',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'James Okafor',
    role: 'Lead Engineer',
    bio: 'Backend and infrastructure specialist. Builds systems that scale from day one and don\'t break at 3am.',
    avatar: 'JO',
    linkedin: '#',
    twitter: '#',
  },
];

export function Team() {
  return (
    <Section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Small team, big output. Every person at STRIVEUP is senior-level and hands-on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 space-y-4 text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto text-primary font-heading font-bold text-2xl">
                {member.avatar}
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 pt-1">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={`${member.name} on Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
