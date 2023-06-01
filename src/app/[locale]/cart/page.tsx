import { CartOverview } from 'modules/cart/CartOverview';
import { Container } from 'common/layout/Container';

export const metadata = {
  title: {
    default: 'Cart',
    template: '%s | Cart',
  },
};

const Cart = () => {
  return (
    <Container>
      <CartOverview.Content />
    </Container>
  );
};

export default Cart;
