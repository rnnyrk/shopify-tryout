'use client';
import { useEffect, useCallback, useRef, useState } from 'react';
import debounce from 'just-debounce';

import { isServer } from 'services';

export const useMediaQuery = <T extends Record<string, any> = Record<string, any>>(
  queries: T,
  debounceValue = 500,
): [keyof T, Record<keyof T, boolean> | undefined] => {
  const mediaQueries =
    !isServer && Object.values(queries).map((query: string) => window.matchMedia(query));

  const matchMediaQueries = useCallback(() => {
    if (isServer) return;
    const newObj = {} as Record<keyof T, boolean>;

    (Object.keys(queries) as (keyof T)[]).forEach((query, index) => {
      newObj[query] = mediaQueries[index].matches;
    });

    return newObj;
  }, [mediaQueries, queries, isServer]);

  const [media, setMedia] = useState(matchMediaQueries());
  const resizeDebounce = useRef(debounceValue);

  useEffect(() => {
    if (isServer) return;
    const updateMedia = () => setMedia(matchMediaQueries());
    const resizeListener = debounce(updateMedia, resizeDebounce.current);

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [matchMediaQueries, isServer]);

  const active = (Object.keys(media || {}) as (keyof T)[])
    .reverse()
    .find((size) => media && media[size]);

  return [active!, media];
};
