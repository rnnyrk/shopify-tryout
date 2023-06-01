'use client';
import { useTranslations } from 'next-intl';

import { useStoreContext } from 'services';
import { Heading } from 'common/typography/Heading';
import { Button } from 'common/interaction/Button';

import { CartItem } from './CartItem';
import { CartPrices } from './CartPrices';

const CartOverviewContent = ({ children }: { children?: React.ReactNode }) => {
  const t = useTranslations('Cart');
  const { cart } = useStoreContext();

  return (
    <>
      <Heading>{t('title')}</Heading>
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
        {children ?? null}
      </div>
    </>
  );
};

const CartCheckout = () => {
  const t = useTranslations('Cart');
  const { cart } = useStoreContext();

  return (
    <div className="w-full flex justify-end mt-8">
      <Button
        type="link"
        href={cart.checkoutUrl}
      >
        {t('checkout')}
      </Button>
    </div>
  );
};

export const CartOverview = {
  Content: CartOverviewContent,
  Prices: CartPrices,
  Checkout: CartCheckout,
};
