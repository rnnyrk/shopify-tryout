import { getProducts } from 'services/api/products';
import { Heading } from 'common/typography/Heading';
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
    </Container>
  );
};

export default Products;
