import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind STRIVEUP — a focused group of engineers, designers, and strategists building high-performance digital products.',
  openGraph: {
    title: 'About Us — STRIVEUP',
    description: 'Meet the team behind STRIVEUP — engineers, designers, and strategists building digital products that drive real business growth.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
