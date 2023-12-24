'use client';
import { useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';

type SideBarProps = {
  setShow: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  links: {
    href: string;
    key: string;
    label: string;
  }[];
};

export const SideBar = ({ setShow, links, isOpen }: SideBarProps) => {
  const translateLinks = useTranslations('Links');
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const handleCloses: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = (event) => {
    if (event.target === event.currentTarget) {
      setShow((isShow) => !isShow);
    }
  };

  return createPortal(
    <Transition.Root show={isOpen}>
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="right-0"
        enterTo="right-0"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/*  <Dialog as="div" className="relative z-40" onClose={handleCloses}> */}
        {/*  <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          > */}
        <div
          className="fixed top-0 left-0 min-h-screen w-screen antialiased bg-gray-200 bg-opacity-50  text-gray-800 z-40"
          onClick={handleCloses}
        >
          <div className="fixed flex flex-col top-0 right-0 w-64 bg-gray-900 h-full shadow-lg">
            <div className="overflow-y-auto overflow-x-hidden flex-grow relative">
              <div className="flex flex-col py-6 space-y-1 px-5">
                <div className="flex flex-row items-center h-8">
                  <h3 className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                    Navigation
                  </h3>
                </div>

                <ul>
                  {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              ></path>
                            </svg>
                          </span>
                          <span
                            className={`ml-2 font-semibold text-sm tracking-wide truncate ${
                              isActive ? 'text-green-50' : ''
                            }`}
                          >
                            {link.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*      </Transition.Child>
        </Dialog>*/}
      </Transition.Child>
    </Transition.Root>,
    document.body
  );
};
