import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// i18n
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/middleware';

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

  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
