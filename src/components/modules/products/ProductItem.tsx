'use client';
import * as i from 'types';
import Link from 'next-intl/link';
import { useLocale, useTranslations } from 'next-intl';

import { cn, formatPrice } from 'services';
import { Heading } from 'common/typography/Heading';
import useQueryParams from 'hooks/useQueryParams';

import { ProductImage } from './ProductImage';

export const ProductItem = ({ product }: ProductItemProps) => {
  const locale = useLocale() as i.Locale;
  const t = useTranslations('Products');
  const { queryParams } = useQueryParams<i.ProductOverviewQueryParams>();

  return (
    <Link
      key={product.id}
      href={`/products/${product.handle}`}
      className={cn('w-full flex flex-col mb-4 lg:mb-0 transition-transform hover:-translate-y-2', {
        hidden:
          queryParams.productType && 'productType' in product
            ? !queryParams.productType.includes(product.productType)
            : false,
      })}
    >
      <ProductImage
        src={product?.featuredImage?.url}
        alt={product?.featuredImage?.altText || ''}
        className="shadow-lg rounded-md overflow-hidden"
      />

      <div className="flex flex-col flex-[2] py-6">
        <Heading
          as="h2"
          className="flex-[2] font-bold"
        >
          {product.title}
        </Heading>
        <p className="mt-2 mb-0 text-lg">
          <span>{t('from')}</span> <strong>{formatPrice({ value: product.price, locale })}</strong>
        </p>
      </div>
    </Link>
  );
};

type ProductItemProps = {
  product: i.ProductOverviewItem | i.Bestseller;
};
