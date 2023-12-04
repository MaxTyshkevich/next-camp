'use client';
import { useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog as="div" className="relative z-40" onClose={setShow}>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className="fixed top-0 left-0 min-h-screen w-screen antialiased bg-gray-200 bg-opacity-50  text-gray-800 z-40 "
              onClick={handleCloses}
            >
              <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
                <div className="overflow-y-auto overflow-x-hidden flex-grow relative">
                  <button
                    className="absolute top-3 right-5  text-white"
                    onClick={handleCloses}
                  >
                    X
                  </button>
                  <div className="flex flex-col py-6 space-y-1 px-5">
                    <div className="flex flex-row items-center h-8">
                      <h3 className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                        Dashboard
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

                    <li></li>
                    <li>
                      <a
                        href="#"
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
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                          Inbox
                        </span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-blue-100 rounded-full">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="px-5">
                      <div className="flex flex-row items-center h-8">
                        <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                          Settings
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                          Profile
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
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
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                          Settings
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4 text-red-400">
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
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                          Logout
                        </span>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Child>
    </Transition.Root>
  );
};
