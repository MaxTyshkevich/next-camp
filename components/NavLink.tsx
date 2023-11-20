'use client';
import { useTranslations } from 'next-intl';

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';

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
  const pathname = usePathname();
  console.log(`Component NavLink`);
  console.log({ translateLinks });
  return (
    <ul className="hidden h-full gap-12 lg:flex">
      {links.map(({ key, href }) => (
        <Link
          key={key}
          href={href}
          className={`regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold ${
            href === pathname ? 'text-green-50' : ''
          }`}
        >
          {translateLinks(key)}
        </Link>
      ))}
    </ul>
  );
};
