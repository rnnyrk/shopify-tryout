import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getBestsellers } from 'services/api/products';
import { SectionHeader } from 'modules/layouts/SectionHeader';
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
        title="Home.bestsellers.title"
        description="Home.bestsellers.description"
      />
      <ProductsGrid>
        <Suspense fallback={<ProductsLoader isBestsellers />}>
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
