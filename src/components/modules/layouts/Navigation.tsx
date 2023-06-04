'use client';
import { useEffect, useState } from 'react';

import MenuIcon from 'vectors/menu.svg';
import { cn } from 'services';
import { CartSheet } from 'modules/cart/CartSheet';

import { MainMenu } from './MainMenu';

export const Navigation = ({ children }: NavigationProps) => {
  const [isOpen, setOpen] = useState(false);
  // @TODO lock position on scroll

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <nav className="relative w-full h-20 px-4 flex flex-col justify-center bg-white lg:flex-row lg:px-8 lg:items-center lg:justify-between">
      <div
        className={cn('relative z-30 flex justify-between w-full lg:w-auto', {
          'fixed top-0 left-0 right-0 h-20 items-center px-4 lg:static lg:px-0': isOpen,
        })}
      >
        <a
          href="/"
          className="uppercase text-xl font-bold tracking-widest"
        >
          Mellow Tallow
        </a>

        <button
          className="appearance-none lg:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>

      <div
        className={cn(
          'fixed top-20 left-0 right-0 h-[calc(100vh-80px)] z-20 flex-col px-4 pb-8 bg-white lg:static lg:h-auto lg:pb-0 lg:flex lg:flex-row lg:items-center lg:pt-0 lg:px-0 lg:flex-[2]',
          {
            flex: isOpen,
            hidden: !isOpen,
          },
        )}
      >
        <MainMenu />

        <div className="flex flex-col items-center pb-8 lg:pb-0 lg:flex-row">
          {children}
          <CartSheet />
        </div>
      </div>
    </nav>
  );
};

type NavigationProps = {
  children: React.ReactNode;
};
