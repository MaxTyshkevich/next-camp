'use client';
import { Link, usePathname } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

export const NavLink = ({
  links,
}: {
  links: {
    href: string;
    key: string;
    label: string;
  }[];
}) => {
  const translateLinks = useTranslations('Links');
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  console.log({ selectedLayoutSegment });
  return (
    <ul className="hidden h-full gap-12 lg:flex">
      {links.map(({ key, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={key}
            href={href}
            className={`regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold ${
              isActive ? 'text-green-50' : ''
            }`}
          >
            {translateLinks(key)}
          </Link>
        );
      })}
    </ul>
  );
};
