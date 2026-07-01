import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aftab Ahamed Bhat | Computer Teacher, CSIT Student & Tech Educator',
  description:
    'Portfolio of Aftab Ahamed Bhat — experienced computer teacher at Tinau English Boarding School and Shree Nawaratna Secondary School. CSIT student specializing in computer fundamentals, digital communication, and technology education in Nepal. Professional teaching experience with strong technical and soft skills.',
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'msvalidate.01': ['verification-code-if-needed'],
    },
  },
  keywords: [
    'Aftab Ahamed Bhat',
    'Computer Teacher',
    'CSIT Student',
    'Nepal',
    'Tinau English Boarding School',
    'Shree Nawaratna Secondary School',
    'computer science',
    'technology educator',
    'digital skills trainer',
    'computer education',
    'teaching portfolio',
    'student profile',
    'computer fundamentals',
    'programming basics',
    'digital communication',
    'Butwal',
    'Rupandehi',
    'Nepal-based teacher',
    'computer lab management',
    'IT educator',
    'lesson planning',
    'student mentoring',
  ],
  authors: [{ name: 'Aftab Ahamed Bhat' }],
  creator: 'Aftab Ahamed Bhat',
  publisher: 'Aftab Ahamed Bhat',
  openGraph: {
    title: 'Aftab Ahamed Bhat | Computer Teacher & CSIT Student Portfolio',
    description:
      'Explore the teaching experience, technical skills, and education profile of Aftab Ahamed Bhat, computer teacher at Tinau English Boarding School. Specializing in computer science, digital education, and student mentoring.',
    url: 'https://your-domain.com',
    siteName: 'Aftab Ahamed Bhat - Computer Teacher Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://your-domain.com/aftabaha.jpg',
        width: 1200,
        height: 630,
        alt: 'Aftab Ahamed Bhat - Computer Teacher',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aftab Ahamed Bhat | Computer Teacher & CSIT Student',
    description:
      'Computer science educator and CSIT student from Nepal with 15+ months teaching experience at secondary schools.',
    creator: '@aftabahamed',
    images: ['https://your-domain.com/aftabaha.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Aftab Ahamed Bhat Portfolio',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

// Fixed modern configuration for viewport properties in Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1120',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aftab Ahamed Bhat',
  alternateName: 'Aftab Ahamed',
  url: 'https://your-domain.com',
  description:
    'Computer teacher and CSIT student from Nepal with professional teaching experience in secondary schools. Specializing in computer science education, programming fundamentals, and digital communication.',
  image: 'https://your-domain.com/aftabaha.jpg',
  jobTitle: ['Computer Teacher', 'CSIT Student', 'Technology Educator'],
  nationality: 'Nepali',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Butwal',
    addressRegion: 'Rupandehi',
    postalCode: 'Butwal-7',
    addressCountry: 'Nepal',
  },
  email: 'aftabahamed12312@gmail.com',
  telephone: ['+977-9765310667', '+977-9811570273'],
  workLocation: [
    {
      '@type': 'EducationalOrganization',
      name: 'Tinau English Boarding School',
      addressLocality: 'Tinau',
      addressCountry: 'Nepal',
      jobTitle: 'Computer Teacher',
      employmentStatus: 'active',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Shree Nawaratna Secondary School',
      addressCountry: 'Nepal',
      jobTitle: 'Computer Teacher',
      employmentStatus: 'completed',
    },
  ],
  educationDetails: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Degree',
      name: 'BSc. CSIT',
      issuingOrganization: {
        '@type': 'EducationalOrganization',
        name: 'Tribhuvan University',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Diploma',
      name: '+2 Science',
      issuingOrganization: {
        '@type': 'EducationalOrganization',
        name: 'Oxford Secondary School',
      },
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/aftab-ahamed',
    'https://github.com/aftab-ahamed',
  ],
  knowsLanguage: ['en', 'ne', 'hi'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#060b17] text-slate-100 antialiased">
        <script 
          id="structured-data" 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
        />
        {children}
      </body>
    </html>
  );
}