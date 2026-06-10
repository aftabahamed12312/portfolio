import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aftab Ahamed Bhat | Portfolio',
  description: 'Premium portfolio website for Aftab Ahamed Bhat, Computer Science student and educator from Nepal.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Aftab Ahamed Bhat | Portfolio',
    description: 'Computer Science student and teacher portfolio with animated dark glassmorphism design.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#060b17] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
