'use client';
import * as i from 'types';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import useQueryParams from 'hooks/useQueryParams';

export const ProductFilter = ({ productTypes }: ProductFilterProps) => {
  const t = useTranslations('Products');
  const { queryParams, setQueryParams } = useQueryParams<i.ProductOverviewQueryParams>();

  return (
    <div className="w-full flex flex-wrap">
      {productTypes.map((productType) => {
        const isActive = queryParams.productType === productType;

        return (
          <button
            key={`productType_${productType}`}
            className={clsx(
              'w-full py-2 px-4 mb-2 lg:w-auto lg:mr-2 lg:my-2 font-semibold rounded-md',
              {
                'text-white bg-primary-400': isActive,
                'bg-slate-200': !isActive,
              },
            )}
            onClick={() => setQueryParams({ productType })}
          >
            {t(`filter.${productType}`)}
          </button>
        );
      })}
    </div>
  );
};

type ProductFilterProps = {
  productTypes: i.ProductTypes[];
};
