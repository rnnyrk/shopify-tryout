import * as i from 'types';
import type { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { GetProductDetailQuery } from './queries';
import { formatProductDetail } from './selectors';
import { graphQLQuery } from '../';

export const getProduct = async ({
  locale,
  slug,
}: GetProductProps): Promise<i.ProductDetail | null> => {
  const language = locale.toUpperCase();

  return graphQLQuery(GetProductDetailQuery, {
    handle: slug,
    language,
  })
    .then((data: { product: Product & i.ProductMetaFields }) => {
      const product = formatProductDetail({ product: data.product });
      return product;
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
