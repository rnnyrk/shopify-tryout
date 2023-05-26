import currency from 'currency.js';

const priceFormatOptions = {
  en: {
    separator: ',',
    decimal: '.',
    symbol: '',
  },
  nl: {
    separator: '.',
    decimal: ',',
    symbol: '',
  },
} as const;

type FormatOptions = {
  value: currency.Any;
  precision?: number;
  withSymbol?: boolean;
};

export const formatPrice = ({ value, precision = 2, withSymbol = true }: FormatOptions) => {
  const lang = 'en';

  const price = currency(value, {
    ...priceFormatOptions[lang],
    symbol: withSymbol ? '€' : '',
    precision,
  }).format();

  return price;
};
