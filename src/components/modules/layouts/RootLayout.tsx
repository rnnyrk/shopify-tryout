'use client';
import { StoreProvider } from 'services/storeContext';

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <StoreProvider>
      <body className="min-h-full min-w-full">{children}</body>
    </StoreProvider>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
};
