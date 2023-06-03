import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getBestsellers } from 'services/api/products';
import { Container } from 'common/layout/Container';
import { ProductItem } from 'modules/products/ProductItem';
import { ProductOverviewLoader } from 'modules/products/ProductOverviewLoader';
import { SectionHeader } from 'modules/layouts/general/PageHeader';

export const Bestsellers = async () => {
  const locale = useLocale() as i.Locale;
  const bestsellers = await getBestsellers(locale);

  return (
    <Container isCentered>
      <SectionHeader
        title="Bestsellers"
        description="Our best products according to sold quantities and your reviews."
      />
      <div className="flex flex-col mt-16 lg:grid lg:gap-16 lg:grid-cols-3">
        <Suspense fallback={<ProductOverviewLoader />}>
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
