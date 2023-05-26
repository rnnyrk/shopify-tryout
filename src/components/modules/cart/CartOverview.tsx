'use client';
import * as i from 'types';

import { useStoreContext } from 'services/storeContext';

const CartItem = ({ item }: { item: i.ClientCartLineItem }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <p className="text-sm font-medium">{item.productTitle}</p>
          <p className="text-sm text-gray-500">{item.title}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <p className="text-sm font-medium mr-4">{item.quantity}</p>
        <p className="text-sm font-medium">&euro;{item.price}</p>
      </div>
    </div>
  );
};

export const CartOverview = () => {
  const { cart } = useStoreContext();

  return (
    <div className="mt-8">
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
  );
};
