import * as i from 'types';

import type { Product, Metafield } from '@shopify/hydrogen-react/storefront-api-types';

export type ProductTypes = 'handpomp' | 'creme' | 'zonnebrand' | 'lippenbalsem';

export type ProductOverviewQueryParams = {
  productType: i.ProductTypes;
};

export type ProductBase = Pick<
  Product,
  'id' | 'title' | 'description' | 'handle' | 'priceRange' | 'featuredImage'
>;

export type ProductDetail = i.ProductBase & i.ProductMetaFields & i.ProductVariants;

export type ProductOverviewItem = i.ProductBase &
  i.ProductVariants & {
    productType: i.ProductTypes;
  };

export type Bestseller = Omit<i.ProductOverviewItem, 'productType'>;

export type ProductMetaFields = {
  productIngredients?: Metafield;
};

export type ProductVariants = {
  variants: i.Variant[];
};

export type Variant = {
  id: string;
  title: string;
};
