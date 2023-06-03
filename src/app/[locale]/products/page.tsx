import * as i from 'types';
import { useLocale } from 'next-intl';

import { getProducts, getProductTypes } from 'services/api/products';
import { ProductItem } from 'modules/products/ProductItem';
import { Container } from 'common/layout/Container';
import { ProductFilter } from 'modules/products/ProductFilter';

export const metadata = {
  title: {
    default: 'Products',
    template: '%s | Products',
  },
};

const Products = async () => {
  const locale = useLocale() as i.Locale;

  // @TODO use Suspense
  const products = await getProducts(locale);
  const productTypes = await getProductTypes(locale);

  if (!products || !productTypes) return null;

  return (
    <Container isCentered>
      <ProductFilter productTypes={productTypes} />
      <div className="flex flex-col mt-8 lg:grid lg:gap-16 lg:grid-cols-3">
        {products?.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </Container>
  );
};

export default Products;
