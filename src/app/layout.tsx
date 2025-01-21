import type { Metadata } from 'next';
import '../styles/globals.css';
import { Montserrat, Gabarito } from 'next/font/google';
import { Suspense } from 'react';
import { FacebookPixel } from '@/components/FacebookPixel/FacebookPixel';
import Header from '@/components/Header/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font_mons',
  adjustFontFallback: false,
});

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font_gab',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Mustage Team - all Services',
  description: 'Mustage Team - all Services',
  icons: {
    icon: [
      { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
      { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/assets/site.webmanifest',
  openGraph: {
    title: 'Mustage Team - all Services',
    description: 'Mustage Team - all Services',
    type: 'website',
    images: [
      {
        url: '/assets/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Mustage Team - all Services',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${gabarito.variable}`}>
        <Header />
        <main>{children}</main>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
      </body>
    </html>
  );
}
