import { CartOverview } from 'modules/cart/CartOverview';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: {
    default: 'Cart',
  },
};

const Cart = () => {
  return (
    <section>
      <Heading>Cart</Heading>
      <CartOverview />
    </section>
  );
};

export default Cart;
