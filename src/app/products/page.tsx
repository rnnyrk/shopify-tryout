import { Heading } from 'common/typography/Heading';
import { ProductItem } from 'modules/products/ProductItem';

import { getProducts } from 'services/shopify';

export const metadata = {
  title: {
    default: 'Products',
  },
};

const Products = async () => {
  const products = await getProducts();

  return (
    <section>
      <Heading>Products</Heading>
      <div className="mt-8">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </section>
  );
};

export default Products;
