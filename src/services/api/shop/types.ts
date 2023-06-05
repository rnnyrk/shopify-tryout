import type { Shop as ShopifyShop } from '@shopify/hydrogen-react/storefront-api-types';

export type Shop = Pick<ShopifyShop, 'name'>;
