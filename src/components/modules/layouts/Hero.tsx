'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import CowImg from 'images/cow.jpg';
import YakImg from 'images/yak.jpg';
import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className="w-full h-[50vh] relative">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <Heading className="text-6xl mb-2 font-bold text-center text-white">{t('title')}</Heading>
        <p className="text-xl text-center text-white">{t('subtitle')}</p>
        <div className="flex mt-8">
          <Button
            type="link"
            href="/products"
            className="mr-2"
          >
            {t('button')}
          </Button>
          <Button
            type="link"
            href="/why-tallow"
            variant="secondary"
            className="ml-2"
          >
            {t('button_alt')}
          </Button>
        </div>
      </div>
      <figure className="absolute inset-0 z-0 w-full h-full m-0 p-0">
        <Image
          src={CowImg}
          alt="Hero image"
          fill
          priority
          className="object-cover object-center w-full opacity-80"
        />
      </figure>
    </div>
  );
};
