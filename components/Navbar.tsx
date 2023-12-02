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
  const [isShow, setIsShow] = useState(false);
  console.log({ isShow });
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
        <button className="lg:hidden" onClick={() => setIsShow(!isShow)}>
          <Image src={'/menu.svg'} height={32} width={32} alt="menu" />
        </button>
        {isShow && <SideBar setShow={setIsShow} links={NAV_LINKS} />}
        {/*  {isShow && (
          <div className="absolute">
            {' '}
            <ul>
              {NAV_LINKS.map((navLink) => (
                <li>{navLink.label}</li>
              ))}
            </ul>{' '}
          </div>
        )} */}
      </nav>
    </header>
  );
};

export default Navbar;
