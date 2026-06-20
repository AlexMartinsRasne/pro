import type { Metadata } from 'next';
import '@/globals.css';
import ScrollState from '@/components/ScrollState';

export const metadata: Metadata = {
  title: 'Falcon - Digital Solutions',
  description: 'I build digital solutions that make impact. Software developer specializing in mobile, web, and real-time systems.',
  keywords: ['portfolio', 'developer', 'web development', 'mobile development','falcon', 'software engineer', 'real-time systems'],
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gradient-to-br from-secondary via-dark to-secondary">
        <ScrollState />
        {children}
      </body>
    </html>
  );
}
