'use client';

import { useStoreContext } from 'services/storeContext';

export const CartOverview = () => {
  const { cart } = useStoreContext();
  console.log({ cart });

  return (
    <div className="mt-4">
      <pre>
        <code>{JSON.stringify(cart, null, 2)}</code>
      </pre>
    </div>
  );
};
