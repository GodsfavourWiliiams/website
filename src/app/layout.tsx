import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

const inter = Inter({ subsets: ['latin'] });

const meta = {
  title: 'Hi Stranger, I`m Godsfavour',
  description: 'Official website',
  cardImage: '/logo.svg',
  robots: 'follow, index',
  favicon: '/logo.svg',
  url: 'https://godsfavourwilliams.netlify.app/',
  type: 'website',
  keywords: ['portfolio', 'website', 'frontend'],
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: meta.title,
  keywords: meta.keywords,
  creator: 'Godsfavour Williams',
  robots: meta.robots,
  metadataBase: new URL('https://godsfavourwilliams.netlify.app/'),
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    type: meta.type,
    site_name: meta.title,
  } as OpenGraph,
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      url: '/logo.svg',
      href: '/logo.svg',
    },
    {
      media: '(prefers-color-scheme: dark)',
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
