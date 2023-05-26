'use client';
import Link from 'next/link';

import { useStoreContext } from 'services/storeContext';

export const MainMenu = () => {
  const { cart } = useStoreContext();

  return (
    <ul className="w-full flex justify-center py-8 mb-10">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li className="mx-4">
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/cart">
          Cart {cart.lineItems.length > 0 ? `(${cart.lineItems.length})` : null}
        </Link>
      </li>
    </ul>
  );
};
