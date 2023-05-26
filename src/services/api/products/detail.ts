import type { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { GetProductDetailQuery } from './queries';
import { graphQLQuery } from '../';

export const getProduct = async (slug: string): Promise<Product | null> => {
  return graphQLQuery(GetProductDetailQuery, { handle: slug })
    .then((data: { product: Product }) => {
      return data.product;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
