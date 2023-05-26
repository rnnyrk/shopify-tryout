import * as i from 'types';
import type { ProductConnection } from '@shopify/hydrogen-react/storefront-api-types';

import { GetProductsQuery } from './queries';
import { graphQLQuery } from '../';

export const getProducts = async (): Promise<i.ClientProduct[] | null> => {
  return graphQLQuery(GetProductsQuery)
    .then((data: { products: ProductConnection }) => {
      const productEdges = data.products.edges;
      const products: i.ClientProduct[] = productEdges.map((item) => ({
        ...item.node,
        variants: item.node.variants.edges.map((variant) => variant.node),
      }));

      return products;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
