import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with STRIVEUP. Book a free strategy call or send us a message about your project — we usually respond within 2 hours.',
  openGraph: {
    title: 'Contact Us — STRIVEUP',
    description: 'Book a free strategy call or send us a message. We usually respond within 2 hours.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
