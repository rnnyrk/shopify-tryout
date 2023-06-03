import * as i from 'types';
import type { ProductConnection, Collection } from '@shopify/hydrogen-react/storefront-api-types';

import { GetBestsellersQuery, GetProductsQuery, GetProductTypesQuery } from './queries';
import { graphQLQuery } from '../';

export const getProducts = async (
  locale: i.Locale,
  query?: string,
): Promise<i.ClientProduct[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductsQuery, { language, query })
    .then((data: { products: ProductConnection }) => {
      const products: i.ClientProduct[] = data.products.edges.map((item) => ({
        ...item.node,
        productType: item.node.productType as i.ClientProduct['productType'],
        variants: item.node.variants.edges.map((variant) => variant.node),
      }));

      return products;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export const getProductTypes = async (locale: i.Locale): Promise<i.ProductTypes[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductTypesQuery, { language })
    .then((data: { products: ProductConnection }) => {
      const productsTypes = data.products.edges.map(
        (item) => item.node.productType as i.ProductTypes,
      );
      const uniqueProductsTypes = [...new Set(productsTypes)];

      return uniqueProductsTypes;
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
      const products: Omit<i.ClientProduct, 'productType'>[] = data.collection.products.edges.map(
        (item) => ({
          ...item.node,
          variants: item.node.variants.edges.map((variant) => variant.node),
        }),
      );

      return products;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
