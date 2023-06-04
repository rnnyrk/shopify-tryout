'use client';
import { useTranslations } from 'next-intl';

import { cn } from 'services';
import { Heading } from 'common/typography/Heading';

export const SectionHeader = ({ align, className, description, title }: SectionHeaderProps) => {
  const t = useTranslations();

  return (
    <div className={cn(`w-full flex flex-col`, align, className)}>
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
  className?: string;
  description: string;
  title: string;
};
