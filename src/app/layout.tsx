import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Machida Earth',
  description: 'Machida Earth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow">
          <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
