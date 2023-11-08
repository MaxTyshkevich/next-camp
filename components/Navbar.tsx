import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/hilink-logo.svg';
import Button from './Button';
import { NavLink } from './NavLink';

const Navbar = () => {
  return (
    <header>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src={logo} alt={'logo'} />
        </Link>

        <NavLink />

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
    </header>
  );
};

export default Navbar;
