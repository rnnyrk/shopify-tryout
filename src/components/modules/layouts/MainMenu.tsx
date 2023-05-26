'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MiniCart } from 'modules/cart/MiniCart';

const MenuItem = ({ href, children }) => {
  const pathname = usePathname();

  let isActive = false;
  if (href === '/' && pathname === href) {
    isActive = true;
  } else if (href !== '/' && pathname?.includes(href)) {
    isActive = true;
  }

  return (
    <li
      className={clsx(
        'mx-4 font-semibold text-lg transition-colors hover:text-primary-600 hover:border-b-2 hover:border-primary-700',
        {
          'text-primary-600': isActive,
          'text-white': !isActive,
        },
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const MainMenu = () => {
  return (
    <nav className="w-full flex justify-center p-8 mb-10">
      <ul className="flex flex-[2] justify-center">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/products">Products</MenuItem>
      </ul>

      <MiniCart />
    </nav>
  );
};
