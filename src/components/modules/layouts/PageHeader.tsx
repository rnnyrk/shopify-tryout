'use client';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { Heading } from 'common/typography/Heading';

export const SectionHeader = ({ align, description, title }: SectionHeaderProps) => {
  const t = useTranslations();

  return (
    <div className={clsx(`w-full flex flex-col`, align)}>
      <Heading
        size="4xl"
        className="font-semibold mb-2"
      >
        {t(title)}
      </Heading>
      <p>{t(description)}</p>
    </div>
  );
};

type SectionHeaderProps = {
  align?: 'items-start' | 'items-center' | 'items-end';
  description: string;
  title: string;
};
