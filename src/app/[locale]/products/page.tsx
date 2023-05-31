import * as i from 'types';
import { useLocale } from 'next-intl';

import { getProducts } from 'services/api/products';
import { ProductItem } from 'modules/products/ProductItem';
import { Container } from 'common/layout/Container';

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

  return (
    <Container>
      <div className="mt-8 lg:grid lg:gap-16 lg:grid-cols-3">
        {products &&
          products.length > 0 &&
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
