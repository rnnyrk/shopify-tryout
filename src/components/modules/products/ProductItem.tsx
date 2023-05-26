'use client';
import * as i from 'types';
import Image from 'next/image';
import Link from 'next/link';

import { formatPrice } from 'services';
import { useStoreContext } from 'services/storeContext';
import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';

export const ProductItem = ({ product }: ProductItemProps) => {
  const { addVariantToCart } = useStoreContext();

  const onAddToCart = async () => {
    await addVariantToCart([
      {
        merchandiseId: product.variants[0].id,
        quantity: 1,
      },
    ]);
  };

  return (
    <div
      key={product.id}
      className="mt-8"
    >
      <Link href={`/products/${product.handle}`}>
        <Image
          width={200}
          height={200}
          src={product?.featuredImage?.url || ''}
          alt={product?.featuredImage?.altText || ''}
          unoptimized
        />

        <Heading as="h2">{product.title}</Heading>
        <p>{formatPrice({ value: product.priceRange.minVariantPrice.amount })}</p>
      </Link>

      <Button
        type="button"
        onClick={onAddToCart}
        className="mt-2"
      >
        Add to cart
      </Button>
    </div>
  );
};

type ProductItemProps = {
  product: i.ClientProduct;
};
