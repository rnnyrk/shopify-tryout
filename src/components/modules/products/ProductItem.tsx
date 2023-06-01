'use client';
import * as i from 'types';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { formatPrice } from 'services';
import { Heading } from 'common/typography/Heading';

import { ProductImage } from './ProductImage';

export const ProductItem = ({ product }: ProductItemProps) => {
  const t = useTranslations('Products');

  return (
    <Link
      key={product.id}
      href={`/products/${product.handle}`}
      className="w-full mb-16 shadow-md rounded-md overflow-hidden transition-transform hover:-translate-y-2 lg:mb-0"
    >
      <ProductImage
        src={product?.featuredImage?.url}
        alt={product?.featuredImage?.altText || ''}
      />

      <div className="p-4 bg-white">
        <Heading as="h2">{product.title}</Heading>
        <p className="m-0">
          <span>{t('from')}</span>{' '}
          {formatPrice({ value: product.priceRange.minVariantPrice.amount })}
        </p>
      </div>
    </Link>
  );
};

type ProductItemProps = {
  product: i.ClientProduct;
};
