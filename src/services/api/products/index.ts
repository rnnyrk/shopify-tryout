import * as i from 'types';
import type { ProductConnection } from '@shopify/hydrogen-react/storefront-api-types';

import { GetProductsQuery } from './queries';
import { graphQLQuery } from '../';

export const getProducts = async (locale: i.Locale): Promise<i.ClientProduct[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductsQuery, { language })
    .then((data: { products: ProductConnection }) => {
      const products: i.ClientProduct[] = data.products.edges.map((item) => ({
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
