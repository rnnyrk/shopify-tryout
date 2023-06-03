import clsx from 'clsx';

import { Heading } from 'common/typography/Heading';

export const SectionHeader = ({ align, description, title }: SectionHeaderProps) => {
  return (
    <div className={clsx(`w-full flex flex-col`, align)}>
      <Heading
        size="4xl"
        className="font-semibold mb-2"
      >
        {title}
      </Heading>
      <p>{description}</p>
    </div>
  );
};

type SectionHeaderProps = {
  align?: 'items-start' | 'items-center' | 'items-end';
  description: string;
  title: string;
};
