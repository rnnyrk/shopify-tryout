'use client';
import * as i from 'types';

import { RootLayout } from 'modules/layouts/RootLayout';

import { Hero } from './Hero';
import { Navigation } from './Navigation';

export const RootContent = ({ children, locale }: RootContentProps) => {
  return (
    <RootLayout>
      <Navigation locale={locale} />
      <Hero />
      <main>{children}</main>
    </RootLayout>
  );
};

type RootContentProps = {
  children: React.ReactNode;
  locale: i.Locale;
};
