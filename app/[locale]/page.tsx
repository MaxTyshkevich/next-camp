import { unstable_setRequestLocale } from 'next-intl/server';
import Camp from '@/components/Camp';
import Features from '@/components/Features';
import GetApp from '@/components/GetApp';
import Guide from '@/components/Guide';
import Hero from '@/components/Hero';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
