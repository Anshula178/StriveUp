import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the STRIVEUP team. We\'re a small, focused team building ambitious digital products. Always looking for sharp engineers, designers, and strategists.',
  openGraph: {
    title: 'Careers — STRIVEUP',
    description: 'Join a small, focused team building ambitious digital products. Always looking for sharp engineers and designers.',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
