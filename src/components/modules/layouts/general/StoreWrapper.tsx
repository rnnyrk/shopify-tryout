'use client';
import { StoreProvider } from 'services';

export const StoreWrapper = ({ children }: StoreWrapperProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

type StoreWrapperProps = {
  children: React.ReactNode;
};
