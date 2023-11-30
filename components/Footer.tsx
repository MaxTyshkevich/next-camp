import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/hilink-logo.svg';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/contants';
import LocaleSwitcher from './LocaleSwitcher';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col justify-center gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/">
            <Image src={logo} alt={'logo'} className="mb-10" />
          </Link>
          <div className="flex flex-wrap justify-center gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map(({ links, title }) => (
              <FooterLink title={title} key={title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterLink>
            ))}

            <div>
              <FooterLink title={FOOTER_CONTACT_INFO.title}>
                <ul>
                  {FOOTER_CONTACT_INFO.links.map(({ label, value }) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="flex gap-4 md:flex-col lg:flex-row"
                      >
                        <p className="whitespace-nowrap">{label}</p>
                        <p className="medium-14 whitespace-nowrap text-blue-70">
                          {value}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterLink>
            </div>

            <div>
              <FooterLink title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <li key={link}>
                      <Link href="#">
                        <Image
                          src={link}
                          alt="Social logo"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterLink>
            </div>

            <LocaleSwitcher />
          </div>
        </div>

        <div className="border bg-gray-20 " />

        <p className="regular-14 w-full text-center text-gray-30">
          {new Date().getFullYear()} Hilink | All right reserved
        </p>
      </div>
    </footer>
  );
};

type PropsFooterLink = {
  title: string;
  children: React.ReactNode;
};

const FooterLink = ({ title, children }: PropsFooterLink) => (
  <div className="flex flex-col gap-5">
    <h4 className="bold-18 whitespace-nowrap">{title}</h4>
    {children}
  </div>
);

export default Footer;
