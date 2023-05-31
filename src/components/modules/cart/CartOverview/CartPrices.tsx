'use client';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { formatPrice } from 'services';
import { useStoreContext } from 'services/storeContext';

const CartPriceItem = ({ title, price, variant }: CartPriceItemProps) => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <p className="text-sm font-medium">{title}</p>
      <p
        className={clsx('text-sm', {
          'text-slate-800 italic': variant === 'secondary',
          'font-medium': variant !== 'secondary',
        })}
      >
        {price}
      </p>
    </div>
  );
};

export const CartPrices = () => {
  const t = useTranslations('Cart');
  const { cart } = useStoreContext();

  return (
    <div className="w-full flex flex-wrap mt-8">
      <CartPriceItem
        title={t('subtotal')}
        price={formatPrice({ value: cart.subtotalAmount })}
      />
      <CartPriceItem
        title={t('shipping')}
        price={t('shipping_checkout')}
        variant="secondary"
      />
      <div className="w-full flex justify-between items-center py-4 border-t-2 border-slate-100">
        <p className="text-lg font-medium">{t('total')}</p>
        <p className="text-lg font-medium">{formatPrice({ value: cart.totalAmount })}</p>
      </div>
    </div>
  );
};

type CartPriceItemProps = {
  title: string;
  price: string;
  variant?: 'secondary';
};
