import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getProduct } from 'services/api/products/detail';
import { ProductSelect } from 'modules/products/ProductSelect';
import { Heading } from 'common/typography/Heading';
import { ProductImage } from 'modules/products/ProductImage';
import { ProductMetaFields } from 'modules/products/ProductMetaFields';

import Loading from './loading';

const Product = async ({ params }: ProductParams) => {
  const locale = useLocale() as i.Locale;
  const { slug } = params;

  const product = await getProduct({ locale, slug });

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col p-4 lg:w-2/4 lg:p-24">
        <Heading className="font-bold text-4xl my-2 lg:my-0">{product?.title}</Heading>
        <p className="my-8 max-w-[30em] leading-6">{product?.description}</p>

        <ProductSelect product={product!} />
        <ProductMetaFields productIngredients={product?.productIngredients} />
      </div>

      <div className="w-full min-h-[75vh] lg:w-2/4">
        <ProductImage
          src={product?.featuredImage?.url}
          alt={product?.featuredImage?.altText || ''}
          size="large"
        />
      </div>
    </Suspense>
  );
};

type ProductParams = {
  params: {
    slug: string;
  };
};

export default Product;
