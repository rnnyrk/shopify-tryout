'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import AdventureImg from 'images/adventure.png';
import GearImg from 'images/gear.png';
import NatureImg from 'images/nature.png';
import { cn } from 'services';
import { SectionHeader } from 'modules/layouts/SectionHeader';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

const items = [
  {
    id: 1,
    name: 'usps.items.natural.title',
    description: 'usps.items.natural.description',
    image: AdventureImg,
  },
  {
    id: 2,
    name: 'usps.items.shipping.title',
    description: 'usps.items.shipping.description',
    image: GearImg,
  },
  {
    id: 3,
    name: 'usps.items.quality.title',
    description: 'usps.items.quality.description',
    image: NatureImg,
  },
];

export const Usps = () => {
  const t = useTranslations('Home');

  return (
    <Container>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        <SectionHeader
          align="items-center"
          title="Home.usps.title"
          description="Home.usps.description"
        />
        <div className="flex flex-col flex-wrap mt-12 lg:mt-20 lg:flex-row">
          {items.map((item) => {
            const isOdd = item.id % 2 === 0;

            return (
              <div
                className={cn('w-full flex flex-col mb-12 lg:mb-16 lg:flex-row lg:items-center', {
                  'lg:flex-row-reverse': isOdd,
                })}
                key={item.id}
              >
                <div className="relative w-full h-[275px] lg:w-1/3 bg-slate-200 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(item.name)}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className={cn('w-full lg:w-2/3', {
                    'lg:pr-24': isOdd,
                    'lg:pl-24': !isOdd,
                  })}
                >
                  <Heading
                    as="h2"
                    size="2xl"
                    className="my-4"
                  >
                    {t(item.name)}
                  </Heading>
                  <p className="leading-6">{t(item.description)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
