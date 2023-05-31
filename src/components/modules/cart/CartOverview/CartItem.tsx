'use client';
import * as i from 'types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { formatPrice, useStoreContext } from 'services';
import { Button } from 'common/interaction/Button';
import { InputCounter } from 'common/form/InputCounter';

export const CartItem = ({ item }: CartItemProps) => {
  const t = useTranslations('Cart');
  const { removeLineItems, updateLineItem, isLoading } = useStoreContext();

  const onRemoveItem = async () => {
    await removeLineItems([item.id]);
  };

  const onUpdateItem = async (quantity: number) => {
    await updateLineItem(item.id, item.merchandiseId, quantity);
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
        <InputCounter
          onChange={(quantity) => onUpdateItem(quantity)}
          disabled={isLoading}
          defaultValue={item.quantity}
          className="mr-4"
        />
        <p className="text-sm font-medium">{formatPrice({ value: item.price })}</p>
      </div>

      <div className="flex items-center">
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={onRemoveItem}
          disabled={isLoading}
        >
          {t('delete_from_cart')}
        </Button>
      </div>
    </div>
  );
};

type CartItemProps = {
  item: i.ClientCartLineItem;
};
