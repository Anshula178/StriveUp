import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ChatWidget } from '@/components/chat-widget';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'STRIVEUP | High-Performance IT & Web Development',
    template: '%s — STRIVEUP',
  },
  description: 'STRIVEUP builds business-ready, high-conversion digital products — web apps, mobile apps, custom software, and UI/UX design for ambitious companies.',
  keywords: ['web development', 'custom software', 'mobile app development', 'UI/UX design', 'Next.js', 'IT services'],
  authors: [{ name: 'STRIVEUP', url: 'https://striveup.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://striveup.com',
    siteName: 'STRIVEUP',
    title: 'STRIVEUP | High-Performance IT & Web Development',
    description: 'STRIVEUP builds business-ready, high-conversion digital products for ambitious companies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STRIVEUP | High-Performance IT & Web Development',
    description: 'STRIVEUP builds business-ready, high-conversion digital products for ambitious companies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
