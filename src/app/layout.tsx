import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
});

const lucidaSans = localFont({
  src: [
    {
      path: './fonts/LucidaSans-Demibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-lucida-sans',
  display: 'swap',
  fallback: ['Segoe UI', 'system-ui', 'sans-serif'],
});

const interstate = localFont({
  src: [
    { path: './fonts/Interstate-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Interstate-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-interstate',
  display: 'swap',
  fallback: ['Segoe UI', 'system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | KQ Health',
    default: 'KQ Health - Medical Excellence',
  },
  description: 'Professional medical services and patient care by Kenya Airways',
  keywords: ['Kenya Airways', 'medical', 'healthcare', 'professional services'],
  authors: [{ name: 'Kenya Airways Health Division' }],
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${robotoFlex.variable} ${lucidaSans.variable} ${interstate.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        {/* Skip link for screen readers */}

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[10001] bg-primary text-white px-4 py-2 rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 relative" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
