'use client';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname } from 'next/navigation';

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
      className={clsx('mx-4 font-bold text-md transition-colors hover:text-primary-600', {
        'text-primary-400': isActive,
        'text-black': !isActive,
      })}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const MainMenu = () => {
  const t = useTranslations('MainMenu');

  return (
    <ul className="flex flex-[2] justify-center ml-8">
      <MenuItem href="/">{t('home')}</MenuItem>
      <MenuItem href="/products">{t('products')}</MenuItem>
      <MenuItem href="/about">{t('about')}</MenuItem>
    </ul>
  );
};
