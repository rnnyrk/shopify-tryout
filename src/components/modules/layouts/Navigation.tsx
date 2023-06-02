'use client';
import * as i from 'types';
import clsx from 'clsx';
import { useState } from 'react';

import MenuIcon from 'vectors/menu.svg';
import { CartSheet } from 'modules/cart/CartSheet';

import { LanguageSelect } from './LanguageSelect';
import { MainMenu } from './MainMenu';

export const Navigation = ({ locale }: NavigationProps) => {
  const [isOpen, setOpen] = useState(false);

  console.info({ isOpen });

  // @TODO lock position on scroll

  return (
    <nav className="w-full h-20 px-4 flex flex-col justify-center bg-white lg:flex-row lg:px-8 lg:items-center lg:justify-between">
      <div className="relative z-30 flex justify-between w-full lg:w-auto">
        <a
          href="/"
          className="uppercase text-xl font-bold tracking-widest"
        >
          Mellow Tallow
        </a>

        <button
          className="appearance-none lg:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>

      <div
        className={clsx(
          'inset-0 z-20 flex-col pt-20 px-4 bg-white lg:flex lg:flex-row lg:items-center lg:pt-0 lg:px-0 lg:flex-[2]',
          {
            flex: isOpen,
            hidden: !isOpen,
          },
        )}
      >
        <MainMenu />

        <div className="flex flex-col items-center lg:flex-row">
          <LanguageSelect
            className="lg:mr-6"
            locale={locale}
          />
          <CartSheet />
        </div>
      </div>
    </nav>
  );
};

type NavigationProps = {
  locale: i.Locale;
};
