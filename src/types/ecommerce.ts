import type { CartLine } from '@shopify/hydrogen-react/storefront-api-types';

export type ClientCart = {
  lineItems: CartLine[];
  id: string;
  checkoutUrl: string;
  totalPrice: string;
  priceBeforeDiscount?: string;
  createdAt: string;
  discountCodes: string[];
};
