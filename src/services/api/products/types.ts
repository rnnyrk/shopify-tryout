import * as i from 'types';

import type {
  Metafield,
  Product,
  ProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types';

export type ProductTypes = 'handpomp' | 'creme' | 'zonnebrand' | 'lippenbalsem';

export type ProductOverviewQueryParams = {
  productType: i.ProductTypes;
};

export type ProductBase = Pick<Product, 'id' | 'title' | 'handle' | 'featuredImage'> & {
  price: string;
};

export type ProductDetail = i.ProductBase &
  i.ProductMetaFields &
  i.ProductVariants &
  Pick<Product, 'description'>;

export type ProductOverviewItem = i.ProductBase &
  i.ProductVariants & {
    productType: i.ProductTypes;
  };

export type Bestseller = Omit<i.ProductOverviewItem, 'productType'>;

export type ProductMetaFields = {
  productIngredients?: Metafield;
  productUsage?: Metafield;
};

export type ProductVariants = {
  variants: i.Variant[];
};

export type Variant = Pick<ProductVariant, 'id' | 'price' | 'title' | 'quantityAvailable'>;
