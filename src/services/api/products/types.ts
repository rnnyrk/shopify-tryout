import * as i from 'types';

import type { Product } from '@shopify/hydrogen-react/storefront-api-types';

export type ProductMetaFields = {
  productIngredients: string;
  productType: 'handpomp' | 'creme' | 'zonnebrand' | 'lippenbalsem';
};

export type ClientProduct = Pick<
  Product,
  'id' | 'title' | 'description' | 'handle' | 'priceRange' | 'featuredImage'
> &
  Partial<i.ProductMetaFields> & {
    variants: i.ClientVariant[];
  };

export type ClientVariant = {
  id: string;
  title: string;
};
