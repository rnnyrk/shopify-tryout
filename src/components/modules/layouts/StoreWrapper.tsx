'use client';
import { StoreProvider } from 'services/storeContext';

export const StoreWrapper = ({ children }: StoreWrapperProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

type StoreWrapperProps = {
  children: React.ReactNode;
};
