'use client';
import * as i from 'types';
import { StoreProvider } from 'services/storeContext';

import { Hero } from './Hero';
import { Navigation } from './Navigation';

export const RootLayout = ({ children, locale }: RootLayoutProps) => {
  return (
    <StoreProvider>
      <body className="min-h-full min-w-full">
        <Hero>
          <Navigation locale={locale} />
        </Hero>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </StoreProvider>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
  locale: i.Language;
};
