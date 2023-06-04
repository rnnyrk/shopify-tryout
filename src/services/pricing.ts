import * as i from 'types';
import currency from 'currency.js';

const priceFormatOptions = {
  en: {
    separator: ',',
    decimal: '.',
    symbol: '€',
    // symbol: '$',
  },
  nl: {
    separator: '.',
    decimal: ',',
    symbol: '€',
  },
} as const;

type FormatOptions = {
  value: currency.Any;
  precision?: number;
  withSymbol?: boolean;
  locale?: i.Locale;
};

export const formatPrice = ({
  value,
  precision = 2,
  withSymbol = true,
  locale = 'en',
}: FormatOptions) => {
  // @TODO working changing values with the locale
  const temporaryLocale = 'en';

  const price = currency(value, {
    ...priceFormatOptions[temporaryLocale],
    symbol: withSymbol ? priceFormatOptions[temporaryLocale].symbol : '',
    precision,
  }).format();

  return price;
};
