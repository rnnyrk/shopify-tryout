'use client';
import { useEffect, useState } from 'react';

import { isServer } from 'services';

import { useMediaQuery } from './useMediaQuery';

export const sizes = {
  large: 1280,
  desktop: 1024,
  tablet: 768,
} as const;

export const useDevice = (debounce = 0) => {
  const [determined, setDetermined] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [mediaActive] = useMediaQuery(
    {
      tablet: `(max-width: ${sizes.desktop - 1}px)`,
      mobile: `(max-width: ${sizes.tablet - 1}px)`,
      desktop: `(min-width: ${sizes.desktop}px)`,
    },
    debounce,
  );

  useEffect(() => {
    setDetermined(true);
    setIsMobile(!isServer && mediaActive === 'mobile');
    setIsTablet(!isServer && mediaActive === 'tablet');
    setIsDesktop(!isServer && mediaActive === 'desktop');
  }, [mediaActive]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    determined,
  };
};
