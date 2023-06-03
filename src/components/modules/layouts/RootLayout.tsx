'use client';
import { StoreProvider } from 'services';

export const RootLayout = ({ children }: RootLayoutProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

type RootLayoutProps = {
  children: React.ReactNode;
};
