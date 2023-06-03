'use client';
import * as i from 'types';
import clsx from 'clsx';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { formatPrice } from 'services';
import { Heading } from 'common/typography/Heading';
import useQueryParams from 'hooks/useQueryParams';

import { ProductImage } from './ProductImage';

export const ProductItem = ({ product }: ProductItemProps) => {
  const t = useTranslations('Products');
  const { queryParams } = useQueryParams<i.ProductOverviewQueryParams>();

  return (
    <Link
      key={product.id}
      href={`/products/${product.handle}`}
      className={clsx(
        'w-full flex flex-col mb-16 shadow-md rounded-md overflow-hidden transition-transform hover:-translate-y-2 lg:mb-0',
        {
          hidden:
            queryParams.productType && 'productType' in product
              ? !queryParams.productType.includes(product.productType)
              : false,
        },
      )}
    >
      <ProductImage
        src={product?.featuredImage?.url}
        alt={product?.featuredImage?.altText || ''}
      />

      <div className="flex flex-col flex-[2] p-6 bg-white">
        <Heading
          as="h2"
          className="flex-[2]"
        >
          {product.title}
        </Heading>
        <p className="mt-4 mb-0 text-lg">
          <span>{t('from')}</span>{' '}
          <strong>{formatPrice({ value: product.priceRange.minVariantPrice.amount })}</strong>
        </p>
      </div>
    </Link>
  );
};

type ProductItemProps = {
  product: i.ProductOverviewItem | i.Bestseller;
};
