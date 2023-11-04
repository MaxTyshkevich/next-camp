import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/hilink-logo.svg';
import { NAV_LINKS } from '@/contants';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={logo} alt={'logo'} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(({ key, href, label }) => (
          <Link
            key={key}
            href={href}
            className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type={'button'}
          title={'login'}
          icon={'/user.svg'}
          variant={'btn_dark_green'}
        />
      </div>

      <button className="lg:hidden">
        <Image src={'/menu.svg'} height={32} width={32} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
