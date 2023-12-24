'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/hilink-logo.svg';
import { NAV_LINKS } from '@/contants';
import Button from './Button';
import { NavLink } from './NavLink';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SideBar } from './SideBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src={logo} alt={'logo'} />
        </Link>
        <NavLink links={NAV_LINKS} />
        <div className="lg:flexCenter hidden">
          <Button
            type={'button'}
            title={'login'}
            icon={'/user.svg'}
            variant={'btn_dark_green'}
          />
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image src={'/menu.svg'} height={32} width={32} alt="menu" />
        </button>
        <SideBar setShow={setIsOpen} links={NAV_LINKS} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
