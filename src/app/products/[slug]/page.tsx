import Image from 'next/image';

import { getProduct } from 'services/api/products/detail';
import { ProductSelect } from 'modules/products/ProductSelect';
import { Heading } from 'common/typography/Heading';
import { Container } from 'common/layout/Container';

const Product = async ({ params }: ProductParams) => {
  const { slug } = params;

  const product = await getProduct(slug);
  if (!product) return null;

  return (
    <Container>
      <Image
        width={200}
        height={200}
        src={product?.featuredImage?.url || ''}
        alt={product?.featuredImage?.altText || ''}
        unoptimized
      />
      <Heading className="my-4">{product.title}</Heading>
      <p>{product.description}</p>
      <ProductSelect product={product} />
    </Container>
  );
};

type ProductParams = {
  params: {
    slug: string;
  };
};

export default Product;
