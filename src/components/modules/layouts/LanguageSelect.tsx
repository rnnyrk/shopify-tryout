import * as i from 'types';
import clsx from 'clsx';
import Link from 'next-intl/link';
import Image from 'next/image';

import { getLocales } from 'services/api/locales';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'common/interaction/DropdownMenu';

const flags: Record<string, string> = {
  en: 'vectors/flags/en.svg',
  nl: 'vectors/flags/nl.svg',
};

const FlagImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      width="20"
      height="9"
      className="mr-2"
      alt="Flag of the Netherlands"
      unoptimized
    />
  );
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
          'flex items-center py-2 px-4 min-w-[140px] w-[140px] transition-colors bg-background-main hover:bg-background-hover rounded-lg',
          className,
        )}
      >
        <FlagImage src={flag} />
        {activeLocale?.endonymName}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {locales.map((locale) => {
          const currentIsoCode = locale.isoCode.toLowerCase();
          const currentFlag = flags[currentIsoCode];

          return (
            <DropdownMenuItem key={locale.isoCode}>
              <Link
                href="/"
                locale={currentIsoCode}
                className="flex items-center"
              >
                <FlagImage src={currentFlag} />
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
