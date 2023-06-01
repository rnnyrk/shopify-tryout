import * as i from 'types';
import clsx from 'clsx';
import Link from 'next-intl/link';

import { getLocales } from 'services/api/locales';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'common/interaction/DropdownMenu';

export const LanguageSelect = async ({ className, locale }: LanguageSelectProps) => {
  const locales = await getLocales();

  // @TODO add Suspense
  if (!locales) return null;

  const activeLocale = locales.find((l) => {
    return l.isoCode === locale.toUpperCase();
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={clsx(
          'py-2 min-w-[120px] w-[120px] transition-colors bg-background-main hover:bg-background-hover rounded-lg',
          className,
        )}
      >
        {activeLocale?.endonymName}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {locales.map((locale) => {
          return (
            <DropdownMenuItem key={locale.isoCode}>
              <Link
                href="/"
                locale={locale.isoCode.toLowerCase()}
              >
                {locale.endonymName}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type LanguageSelectProps = {
  className?: string;
  locale: i.Locale;
};
