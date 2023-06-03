import * as i from 'types';
import { Suspense } from 'react';
import { useLocale } from 'next-intl';

import { getProducts, getProductTypes } from 'services/api/products';
import { ProductItem } from 'modules/products/ProductItem';
import { Container } from 'common/layout/Container';
import { ProductFilter } from 'modules/products/ProductFilter';

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
      <Suspense>{productTypes && <ProductFilter productTypes={productTypes} />}</Suspense>

      <div className="flex flex-col mt-8 lg:grid lg:gap-16 lg:grid-cols-3">
        <Suspense fallback={<Loading />}>
          {products &&
            products.map((product) => (
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

export default Products;
