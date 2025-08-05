import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'StriveUp',
  description: 'StriveUp is a modern digital studio offering UI/UX design, web and app development, and custom CMS solutions to help brands grow with technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
