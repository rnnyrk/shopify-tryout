'use client';
import Link from 'next-intl/link';
import { Language } from '@shopify/hydrogen-react/storefront-api-types';
import { usePathname } from 'next/navigation';

import { DropdownMenuContent, DropdownMenuItem } from 'common/interaction/DropdownMenu';

import { FlagImage } from './FlagImage';

export const LanguageDropdown = ({ locales, flags }: LanguageDropdownProps) => {
  const pathname = usePathname();

  const replaceLocaleInUrl = (newLocale: string) => {
    const urlParts = pathname.split('/');
    const localeIndex = urlParts.findIndex((part) => /^[\w]{2}(-[\w]{2})?$/.test(part));

    if (localeIndex !== -1) {
      urlParts.splice(localeIndex, 1, newLocale);
      const newUrl = urlParts.join('/');
      if (newUrl.includes('/nl')) {
        return newUrl.replace('nl', '');
      }

      return urlParts.join('/');
    }

    return pathname;
  };

  return (
    <DropdownMenuContent className="bg-white">
      {locales.map((locale) => {
        const isoCode = locale.isoCode.toLowerCase();
        const flag = flags[isoCode];

        return (
          <DropdownMenuItem key={locale.isoCode}>
            <Link
              href={replaceLocaleInUrl(locale.isoCode.toLowerCase())}
              locale={isoCode}
              className="flex items-center"
            >
              <FlagImage src={flag} />
              {locale.endonymName}
            </Link>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  );
};

type LanguageDropdownProps = {
  flags: Record<string, string>;
  locales: Language[];
};
