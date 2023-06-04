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
      className={clsx(
        'py-8 border-b-2 border-slate-300 last:border-b-0 font-bold text-xl lg:text-lg lg:mx-4 lg:py-0 lg:border-b-0 transition-colors hover:text-primary-600',
        {
          'text-primary-400': isActive,
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
      <MenuItem href="/about">{t('about')}</MenuItem>
      <MenuItem href="/faq">FAQ</MenuItem>
    </ul>
  );
};
