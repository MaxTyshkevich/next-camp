import type { Metadata } from 'next';
import { Inter, Acme } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ogImage from './opengraph-image.png';
import ogImageTwitter from './twitter-image.png';
// i18n
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { getTranslations } from 'next-intl/server';
import { locales } from '@/navigation';

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

console.log({ host: process.env.VERCEL_URL });
export const generateMetadata = async ({
  params: { locale },
}: MetadataProps): Promise<Metadata> => {
  const t = await getTranslations('Metadata');
  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    openGraph: {
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: ogImageTwitter.src,
          width: ogImageTwitter.width,
          height: ogImageTwitter.height,
        },
      ],
    },

    metadataBase:
      new URL(`https://${process.env.VERCEL_URL}`) ||
      'https://next-camp.vercel.app/',
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  console.log('Global Layout');
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
