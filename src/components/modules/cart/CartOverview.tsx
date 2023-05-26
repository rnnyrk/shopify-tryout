'use client';
import * as i from 'types';

import { useStoreContext } from 'services/storeContext';
import { Button } from 'common/interaction/Button';
import Image from 'next/image';

const CartItem = ({ item }: { item: i.ClientCartLineItem }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <figure className="w-16 h-16 bg-gray-200 rounded-full m-0 mr-4 overflow-hidden">
          <Image
            width={100}
            height={100}
            src={item?.featuredImage?.url || ''}
            alt={item?.featuredImage?.altText || ''}
            unoptimized
          />
        </figure>
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

      <Button
        type="link"
        href={cart.checkoutUrl}
      >
        Checkout
      </Button>
    </div>
  );
};
