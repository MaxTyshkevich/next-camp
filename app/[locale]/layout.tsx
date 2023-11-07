import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// i18n
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const locales = ['en', 'ru'];

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
