import type { Metadata } from 'next';
import './globals.css';
import { Jost } from 'next/font/google';

const font = Jost({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HedCode',
  description: 'HedCode is an awesome development team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
