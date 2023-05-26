import type {
  Attribute,
  Product,
  ProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types';

export type ClientCart = {
  lineItems: ClientCartLineItem[];
  id: string;
  checkoutUrl: string;
  totalPrice: string;
  priceBeforeDiscount?: string;
  createdAt: string;
  discountCodes: string[];
};

export type ClientCartLineItem = {
  id: string;
  quantity: number;
  merchandiseId: string;
  title: string;
  price: number;
  productTitle: string;
  attributes: Attribute[];
};

export type ClientProduct = Pick<
  Product,
  'id' | 'title' | 'handle' | 'priceRange' | 'featuredImage'
> & {
  variants: ProductVariant[];
};
