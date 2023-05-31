'use client';
import * as i from 'types';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { formatPrice, useStoreContext } from 'services';
import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';

import { ProductImage } from './ProductImage';

export const ProductItem = ({ product }: ProductItemProps) => {
  const t = useTranslations('Cart');
  const { addVariantToCart, isLoading } = useStoreContext();

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
        disabled={isLoading}
      >
        {t('add_to_cart')}
      </Button>
    </div>
  );
};

type ProductItemProps = {
  product: i.ClientProduct;
};
