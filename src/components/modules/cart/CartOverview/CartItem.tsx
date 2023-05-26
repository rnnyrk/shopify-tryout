'use client';
import * as i from 'types';
import Image from 'next/image';
import { useState } from 'react';

import { formatPrice } from 'services';
import { useStoreContext } from 'services/storeContext';
import { Button } from 'common/interaction/Button';

export const CartItem = ({ item }: { item: i.ClientCartLineItem }) => {
  const [isRemoving, setRemoving] = useState(false);
  const { removeLineItems } = useStoreContext();

  const onRemoveItem = async (itemId: string) => {
    setRemoving(true);
    await removeLineItems([itemId]);
    setRemoving(false);
  };

  return (
    <div className="flex flex-wrap justify-between items-center mb-4 pb-8 border-b-2 border-slate-200 last:border-b-0">
      <div className="flex items-center w-full lg:w-auto">
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

      <div className="flex items-center w-full my-4 lg:w-auto lg:flex-[2] lg:px-4 lg:justify-end">
        <p className="text-sm font-medium mr-4">{item.quantity}</p>
        <p className="text-sm font-medium">{formatPrice({ value: item.price })}</p>
      </div>

      <div className="flex items-center">
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={() => onRemoveItem(item.id)}
          disabled={isRemoving}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
