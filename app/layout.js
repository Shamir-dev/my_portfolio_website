import './globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display-family' });
const body = Inter({ subsets: ['latin'], variable: '--font-body-family' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-family' });

export const metadata = {
  title: 'Shamir Aryal | Portfolio',
  description:
    'Full-Stack Developer Intern and BSc CSIT student building responsive web applications with React, Next.js, Tailwind, Python, Flask, SQL, and MongoDB.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8fafc" />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
