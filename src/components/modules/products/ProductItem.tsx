'use client';
import Image from 'next/image';

import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';

export const ProductItem = ({ product }: ProductItemProps) => {
  const onAddToCart = () => {};

  return (
    <div
      key={product.id}
      className="mt-8"
    >
      <Heading as="h2">{product.title}</Heading>
      <Image
        width={200}
        height={200}
        src={product.featuredImage.url}
        alt={product.featuredImage.alt}
        unoptimized
      />

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
  product: any;
};
