import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aftab Ahamed Bhat | Computer Science Student & Computer Teacher',
  description:
    'Portfolio of Aftab Ahamed Bhat — Nepali computer teacher, CSIT student, and technology education specialist with experience in teaching computer fundamentals and digital skills.',
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0b1120',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'Aftab Ahamed Bhat',
    'Computer Teacher',
    'CSIT Student',
    'Nepal portfolio',
    'technology educator',
    'computer science student',
    'digital skills trainer',
    'computer education',
    'teaching portfolio',
    'student profile',
  ],
  authors: [{ name: 'Aftab Ahamed Bhat' }],
  creator: 'Aftab Ahamed Bhat',
  publisher: 'Aftab Ahamed Bhat',
  openGraph: {
    title: 'Aftab Ahamed Bhat | Computer Science Student & Computer Teacher',
    description:
      'Portfolio of a Nepali computer teacher and CSIT student specializing in computer fundamentals, digital communication, and technology education.',
    url: 'https://your-domain.com',
    siteName: 'Aftab Ahamed Bhat Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aftab Ahamed Bhat | Portfolio',
    description:
      'Discover the teaching experience, skills, and contact profile of Nepali computer educator Aftab Ahamed Bhat.',
    creator: '@yourTwitterHandle',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aftab Ahamed Bhat',
  alternateName: 'Aftab Ahamed',
  url: 'https://your-domain.com',
  description:
    'Portfolio site for a Nepali computer teacher and CSIT student with strong technical and teaching experience in computer applications, programming fundamentals, and digital communication.',
  jobTitle: 'Computer Teacher',
  nationality: 'Nepali',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Butwal-7',
    addressRegion: 'Rupandehi',
    addressCountry: 'Nepal',
  },
  email: 'aftabahamed12312@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/your-profile',
    'https://github.com/your-profile',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#060b17] text-slate-100 antialiased">
        <script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
