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
    <Container>
      <article className="w-full flex flex-wrap rounded-lg overflow-hidden bg-white lg:justify-between">
        <div className="w-full lg:w-2/4">
          <ProductImage
            src={product?.featuredImage?.url}
            alt={product?.featuredImage?.altText || ''}
            size="large"
          />
        </div>

        <div className="flex flex-col p-4 lg:w-2/4 lg:p-12">
          <Heading className="my-2 lg:my-0">{product.title}</Heading>
          <p className="my-4">{product.description}</p>
          <ProductSelect product={product} />
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
