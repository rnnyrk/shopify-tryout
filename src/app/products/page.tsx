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

  console.log({ price: products[0].priceRange });

  return (
    <article>
      <Heading>Products</Heading>
      <div className="mt-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </article>
  );
};

export default Products;
