'use client';
import { useStoreContext } from 'services/storeContext';
import { Button } from 'common/interaction/Button';

import { CartItem } from './CartItem';
import { CartPrices } from './CartPrices';

export const CartOverview = () => {
  const { cart } = useStoreContext();

  return (
    <div className="flex flex-wrap">
      <div className="w-full my-8">
        {cart.lineItems.length > 0 &&
          cart.lineItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
              />
            );
          })}
      </div>

      <CartPrices />

      <div className="w-full flex justify-end mt-8">
        <Button
          type="link"
          href={cart.checkoutUrl}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
