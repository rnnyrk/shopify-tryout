import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getBestsellers } from 'services/api/products';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import { ProductItem } from 'modules/products/ProductItem';
import { Skeleton } from 'common/layout/Skeleton';

export const Bestsellers = async () => {
  const locale = useLocale() as i.Locale;
  const bestsellers = await getBestsellers(locale);

  return (
    <Container isCentered>
      <div className="flex justify-center">
        <Heading
          className=""
          size="6xl"
        >
          Bestsellers
        </Heading>
      </div>
      <div className="flex flex-col mt-12 lg:grid lg:gap-16 lg:grid-cols-3">
        <Suspense fallback={<Skeleton className="w-[341px] h-[364px] rounded-md" />}>
          {bestsellers &&
            bestsellers.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
        </Suspense>
      </div>
    </Container>
  );
};
