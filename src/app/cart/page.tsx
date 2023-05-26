import { CartOverview } from 'modules/cart/CartOverview';
import { Heading } from 'common/typography/Heading';
import { Container } from 'common/layout/Container';

export const metadata = {
  title: {
    default: 'Cart',
  },
};

const Cart = () => {
  return (
    <Container>
      <Heading>Cart</Heading>
      <CartOverview />
    </Container>
  );
};

export default Cart;
