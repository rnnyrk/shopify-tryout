import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getBestsellers } from 'services/api/products';
import { SectionHeader } from 'modules/layouts/PageHeader';
import { ProductsLoader } from 'modules/products/ProductsLoader';
import { ProductItem } from 'modules/products/ProductItem';
import { ProductsGrid } from 'modules/products/ProductsGrid';
import { Container } from 'common/layout/Container';

export const Bestsellers = async () => {
  const locale = useLocale() as i.Locale;
  const bestsellers = await getBestsellers(locale);

  return (
    <Container isCentered>
      <SectionHeader
        title="Bestsellers"
        description="Our best products according to sold quantities and your reviews."
      />
      <ProductsGrid>
        <Suspense fallback={<ProductsLoader />}>
          {bestsellers &&
            bestsellers.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
        </Suspense>
      </ProductsGrid>
    </Container>
  );
};
