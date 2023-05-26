import * as i from 'types';
import type { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { GetProductDetailQuery } from './queries';
import { graphQLQuery } from '../';

export const getProduct = async (slug: string): Promise<i.ClientProduct | null> => {
  return graphQLQuery(GetProductDetailQuery, { handle: slug })
    .then((data: { product: Product }) => {
      return {
        id: data.product.id,
        title: data.product.title,
        handle: data.product.handle,
        description: data.product.description,
        priceRange: data.product.priceRange,
        featuredImage: data.product.featuredImage,
        variants: data.product.variants.edges.map((edge) => ({
          id: edge.node.id,
          title: edge.node.title,
        })),
      };
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
