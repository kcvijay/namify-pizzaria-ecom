import type { Metadata } from 'next';
import Header from './ui/home/Header';
import { manrope } from './lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Namify Pizza & Pasta',
  description: 'Nami Nami foods at your service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
