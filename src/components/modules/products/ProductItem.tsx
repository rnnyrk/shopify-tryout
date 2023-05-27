'use client';
import * as i from 'types';
import Image from 'next/image';
import Link from 'next/link';

import { formatPrice } from 'services';
import { useStoreContext } from 'services/storeContext';
import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';
import { ProductImage } from './ProductImage';

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
      className="w-full mb-16 lg:mb-0"
    >
      <Link href={`/products/${product.handle}`}>
        <ProductImage
          src={product?.featuredImage?.url}
          alt={product?.featuredImage?.altText || ''}
        />
        <Heading as="h2">{product.title}</Heading>
        <p>{formatPrice({ value: product.priceRange.minVariantPrice.amount })}</p>
      </Link>

      <Button
        type="button"
        onClick={onAddToCart}
        className="w-full mt-2"
      >
        Add to cart
      </Button>
    </div>
  );
};

type ProductItemProps = {
  product: i.ClientProduct;
};
