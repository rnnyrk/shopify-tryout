'use client';
import Link from 'next-intl/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import { cn } from 'services';

const MenuItem = ({ href, children }) => {
  const pathname = usePathname();
  const locale = useLocale();

  let isActive = false;
  if ((href === '/' && pathname === href) || (pathname === `/${locale}` && href === '/')) {
    isActive = true;
  } else if (href !== '/' && pathname?.includes(href)) {
    isActive = true;
  }
  return (
    <li
      className={cn(
        'py-8 lg:py-0 px-4 border-b-1 border-slate-300 lg:border-b-0 last:border-b-0 font-bold text-xl lg:text-lg lg:mx-4 transition-colors hover:text-primary-600',
        {
          'text-primary-500': isActive,
          'text-black': !isActive,
        },
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const MainMenu = () => {
  const t = useTranslations('MainMenu');

  return (
    <ul className="flex-[2] lg:flex lg:justify-center lg:flex-row">
      <MenuItem href="/">{t('home')}</MenuItem>
      <MenuItem href="/products">{t('products')}</MenuItem>
      <MenuItem href="/faq">FAQ</MenuItem>
    </ul>
  );
};
