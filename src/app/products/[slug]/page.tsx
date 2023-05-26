import Image from 'next/image';

import { getProduct } from 'services/api/products/detail';
import { ProductSelect } from 'modules/products/ProductSelect';
import { Heading } from 'common/typography/Heading';

const Product = async ({ params }: ProductParams) => {
  const { slug } = params;

  const product = await getProduct(slug);
  if (!product) return null;

  return (
    <div>
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
    </div>
  );
};

type ProductParams = {
  params: {
    slug: string;
  };
};

export default Product;
