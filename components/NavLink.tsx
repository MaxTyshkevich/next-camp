'use client';
import { useTranslations } from 'next-intl';
import { NAV_LINKS } from '@/contants';
import Link from 'next-intl/link';
import { usePathname, useRouter } from 'next-intl/client';
import { redirect } from 'next-intl/server';

export const NavLink = () => {
  const pathname = usePathname();
  const t = useTranslations('Hero');
  console.log({ pathname });
  return (
    <ul className="hidden h-full gap-12 lg:flex">
      {NAV_LINKS.map(({ key, href, label }) => (
        <Link
          key={key}
          href={href}
          className={`regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold ${
            href === pathname ? 'text-green-50' : ''
          }`}
        >
          {label}
        </Link>
      ))}
    </ul>
  );
};
