import * as i from 'types';
import type { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { GetProductDetailQuery } from './queries';
import { graphQLQuery } from '../';

export const getProduct = async ({
  locale,
  slug,
}: GetProductProps): Promise<i.ClientProduct | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductDetailQuery, {
    handle: slug,
    language,
  })
    .then((data: { product: Product }) => {
      console.log({ product: data.product });

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
        // metafields: data.product.metafields.edges.map((edge) => ({
        //   key: edge.node.key,
        //   value: edge.node.value,
        // })),
      };
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

type GetProductProps = {
  locale: i.Locale;
  slug: string;
};
