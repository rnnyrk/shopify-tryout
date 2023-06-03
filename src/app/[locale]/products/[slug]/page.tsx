import * as i from 'types';
import { useLocale } from 'next-intl';

import { getProduct } from 'services/api/products/detail';
import { ProductSelect } from 'modules/products/ProductSelect';
import { Heading } from 'common/typography/Heading';
import { Container } from 'common/layout/Container';
import { ProductImage } from 'modules/products/ProductImage';

const Product = async ({ params }: ProductParams) => {
  const locale = useLocale() as i.Locale;
  const { slug } = params;

  // @TODO use Suspense
  const product = await getProduct({ locale, slug });
  if (!product) return null;

  return (
    <Container noPadding>
      <article className="w-full h-[75vh] flex flex-wrap rounded-lg overflow-hidden bg-background-main lg:justify-between">
        <div className="flex flex-col p-4 lg:w-2/4 lg:p-24">
          <Heading className="font-bold text-4xl my-2 lg:my-0">{product.title}</Heading>
          <p className="my-4">{product.description}</p>
          <ProductSelect product={product} />
        </div>

        <div className="w-full h-[75vh] lg:w-2/4">
          <ProductImage
            src={product?.featuredImage?.url}
            alt={product?.featuredImage?.altText || ''}
            size="large"
          />
        </div>
      </article>
    </Container>
  );
};

type ProductParams = {
  params: {
    slug: string;
  };
};

export default Product;
