import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Todo app',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}