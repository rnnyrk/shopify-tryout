import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getProducts, getProductTypes } from 'services/api/products';
import { ProductItem } from 'modules/products/ProductItem';
import { ProductFilter } from 'modules/products/ProductFilter';
import { SectionHeader } from 'modules/layouts/SectionHeader';
import { Container } from 'common/layout/Container';

import Loading from './loading';

export const metadata = {
  title: {
    default: 'Products',
    template: '%s | Products',
  },
};

const Products = async () => {
  const locale = useLocale() as i.Locale;
  const products = await getProducts(locale);
  const productTypes = await getProductTypes(locale);

  return (
    <Container isCentered>
      <Suspense fallback={<Loading />}>
        <SectionHeader
          title="Products.title"
          description="Products.description"
          className="mb-12"
        />

        {productTypes && <ProductFilter productTypes={productTypes} />}

        <div className="flex flex-col mt-12 lg:grid lg:gap-16 lg:grid-cols-3">
          {products &&
            products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </Suspense>
    </Container>
  );
};

export default Products;
