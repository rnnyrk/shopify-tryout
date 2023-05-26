import { Heading } from 'common/typography/Heading';
import Image from 'next/image';
import { getProduct } from 'services/api/products/detail';

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
    </div>
  );
};

type ProductParams = {
  params: {
    slug: string;
  };
};

export default Product;
