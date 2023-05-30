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

  return (
    <div className={clsx('min-w-[120px] w-[120px]', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>{locale}</DropdownMenuTrigger>
        <DropdownMenuContent>
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
    </div>
  );
};

type LanguageSelectProps = {
  className?: string;
  locale: i.Language;
};
