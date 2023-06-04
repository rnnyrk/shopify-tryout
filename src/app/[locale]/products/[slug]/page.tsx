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
      <div className="p-4 lg:p-24 lg:w-2/4">
        <div className="flex flex-col w-full lg:max-w-[34em]">
          <Heading className="font-bold text-4xl my-2 lg:my-0">{product?.title}</Heading>
          <div
            className="my-8 [&>p]:my-4 [&>p]:leading-6"
            dangerouslySetInnerHTML={{ __html: product?.description || '' }}
          />

          <ProductSelect product={product!} />
          <ProductMetaFields
            productIngredients={product?.productIngredients}
            productUsage={product?.productUsage}
          />
        </div>
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
