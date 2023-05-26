'use client';
import Link from 'next/link';

import CartIcon from 'vectors/cart.svg';

import { useStoreContext } from 'services/storeContext';

export const MiniCart = () => {
  const { getTotalQuantityInCart } = useStoreContext();
  const cartQuantity = getTotalQuantityInCart();

  return (
    <Link
      href="/cart"
      className="flex items-center relative"
    >
      <CartIcon />
      {cartQuantity > 0 && (
        <div className="absolute flex items-center justify-center top-[-16px] right-[-16px] rounded-full w-[24px] h-[24px] text-white text-sm bg-secondary-700">
          {cartQuantity}
        </div>
      )}
    </Link>
  );
};
