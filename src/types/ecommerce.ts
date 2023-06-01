import * as i from 'types';

import type { Attribute, Product } from '@shopify/hydrogen-react/storefront-api-types';

export type Locale = 'nl' | 'en';

export type ClientCart = {
  lineItems: ClientCartLineItem[];
  id: string;
  checkoutUrl: string;
  totalAmount: string;
  totalTaxAmount: string;
  subtotalAmount: string;
  priceBeforeDiscount?: string;
  createdAt: string;
  discountCodes: string[];
};

export type ClientCartLineItem = {
  id: string;
  quantity: number;
  merchandiseId: string;
  title: string;
  price: string;
  productTitle: string;
  attributes: Attribute[];
  featuredImage: Product['featuredImage'];
};

export type ClientProduct = Pick<
  Product,
  'id' | 'title' | 'description' | 'handle' | 'priceRange' | 'featuredImage'
> & {
  variants: i.ClientVariant[];
  productType?: 'handpomp' | 'creme' | 'zonnebrand' | 'lippenbalsem';
};

export type ClientVariant = {
  id: string;
  title: string;
};
