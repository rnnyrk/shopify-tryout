'use client';
import { StoreProvider } from 'services/storeContext';

import { MainMenu } from './MainMenu';
import { Hero } from './Hero';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <body className="min-h-full min-w-full">
        <Hero>
          <MainMenu />
        </Hero>
        <main className="max-w-4xl mx-auto">{children}</main>
      </body>
    </StoreProvider>
  );
};
