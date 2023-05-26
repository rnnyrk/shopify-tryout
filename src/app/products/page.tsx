import { getProducts } from 'services/api/products';
import { ProductItem } from 'modules/products/ProductItem';
import { Container } from 'common/layout/Container';

export const metadata = {
  title: {
    default: 'Products',
  },
};

const Products = async () => {
  const products = await getProducts();

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
