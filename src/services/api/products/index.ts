import * as i from 'types';
import type { ProductConnection, Collection } from '@shopify/hydrogen-react/storefront-api-types';

import { GetBestsellersQuery, GetProductsQuery, GetProductTypesQuery } from './queries';
import { formatProductOverview } from './selectors';
import { graphQLQuery } from '../';

export const getProducts = async (
  locale: i.Locale,
  query?: string,
): Promise<i.ProductOverviewItem[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductsQuery, { language, query })
    .then((data: { products: ProductConnection }) => {
      const products = formatProductOverview({ products: data.products.edges });
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
      const productsTypes = data.products.edges.map((item) => {
        return item.node.productType as i.ProductTypes;
      });

      const uniqueProductsTypes = [...new Set(productsTypes)];
      return uniqueProductsTypes;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export const getBestsellers = async (locale: i.Locale): Promise<i.Bestseller[] | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetBestsellersQuery, { language })
    .then((data: { collection: Collection }) => {
      const products = formatProductOverview({ products: data.collection.products.edges });
      return products;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
