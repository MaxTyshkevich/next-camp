import type { Metadata } from 'next';
import { Inter, Acme } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// i18n
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/middleware';
import { getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const acme = Acme({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-secondary',
});

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

type MetadataProps = Pick<LayoutProps, 'params'>;

export const generateMetadata = async ({
  params: { locale },
}: MetadataProps) => {
  const t = await getTranslations('Metadata');
  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${inter.variable} ${acme.variable} font-myInter`}>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
