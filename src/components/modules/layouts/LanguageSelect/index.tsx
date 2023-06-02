import * as i from 'types';
import clsx from 'clsx';

import { getLocales } from 'services/api/locales';
import { DropdownMenu, DropdownMenuTrigger } from 'common/interaction/DropdownMenu';

import { FlagImage } from './FlagImage';
import { LanguageDropdown } from './LanguageDropdown';

const flags: Record<string, string> = {
  en: '/vectors/flags/en.svg',
  nl: '/vectors/flags/nl.svg',
  de: '/vectors/flags/de.svg',
};

export const LanguageSelect = async ({ className, locale }: LanguageSelectProps) => {
  const locales = await getLocales();

  // @TODO add Suspense
  if (!locales) return null;

  const activeLocale = locales.find((l) => {
    return l.isoCode === locale.toUpperCase();
  });

  const isoCode = activeLocale!.isoCode.toLowerCase();
  const flag = flags[isoCode];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={clsx(
          'flex items-center py-2 px-4 w-full min-w-full lg:min-w-[140px] lg:w-[140px] rounded-lg transition-colors bg-background-main hover:bg-background-hover',
          className,
        )}
      >
        <FlagImage src={flag} />
        {activeLocale?.endonymName}
      </DropdownMenuTrigger>
      <LanguageDropdown {...{ flags, locales }} />
    </DropdownMenu>
  );
};

type LanguageSelectProps = {
  className?: string;
  locale: i.Locale;
};
