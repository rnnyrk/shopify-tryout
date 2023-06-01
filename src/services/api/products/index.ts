import * as i from 'types';
import type { ProductConnection, Collection } from '@shopify/hydrogen-react/storefront-api-types';

import { GetBestsellersQuery, GetProductsQuery } from './queries';
import { graphQLQuery } from '../';

export const getProducts = async (locale: i.Locale): Promise<i.ClientProduct[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductsQuery, { language })
    .then((data: { products: ProductConnection }) => {
      const products: i.ClientProduct[] = data.products.edges.map((item) => ({
        ...item.node,
        // productType: item.node.productType as i.ClientProduct['productType'],
        variants: item.node.variants.edges.map((variant) => variant.node),
      }));
      // @TODO productType
      // console.log({ products });

      return products;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export const getBestsellers = async (locale: i.Locale): Promise<i.ClientProduct[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetBestsellersQuery, { language })
    .then((data: { collection: Collection }) => {
      const products: i.ClientProduct[] = data.collection.products.edges.map((item) => ({
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
