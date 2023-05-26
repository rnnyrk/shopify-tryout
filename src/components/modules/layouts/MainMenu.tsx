import Link from 'next/link';

import { MiniCart } from 'modules/cart/MiniCart';

export const MainMenu = () => {
  return (
    <nav className="w-full flex justify-center p-8 mb-10">
      <ul className="flex flex-[2] justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="/products">Products</Link>
        </li>
      </ul>

      <MiniCart />
    </nav>
  );
};
