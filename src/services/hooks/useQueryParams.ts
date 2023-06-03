'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useQueryParams<T = Record<string, string>>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const urlSearchParams = new URLSearchParams(searchParams.toString());

  function getQueryParams() {
    const params = Object.fromEntries(urlSearchParams.entries()) as unknown as Partial<T>;
    return params;
  }

  function setQueryParams(params: Partial<T>) {
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.set(key, String(value));
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  }

  return {
    queryParams: getQueryParams(),
    setQueryParams,
  };
}
