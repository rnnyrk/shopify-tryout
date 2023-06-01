'use client';
import { useTranslations } from 'next-intl';

import CartIcon from 'vectors/cart.svg';
import { useStoreContext } from 'services';
import { CartOverview } from 'modules/cart/CartOverview';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'common/interaction/DialogSheet';

export const CartSheet = () => {
  const t = useTranslations('Cart');
  const { getTotalQuantity } = useStoreContext();
  const cartQuantity = getTotalQuantity();

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <CartIcon />
        {cartQuantity > 0 && (
          <div className="absolute flex items-center justify-center top-[-16px] right-[-16px] rounded-full w-[24px] h-[24px] text-white text-sm bg-secondary-700">
            {cartQuantity}
          </div>
        )}
      </SheetTrigger>
      <SheetContent
        position="right"
        size="sm"
        className="bg-white"
      >
        <SheetHeader>
          <SheetTitle>{t('title')}</SheetTitle>
        </SheetHeader>

        <CartOverview.Content>
          <CartOverview.Prices />
        </CartOverview.Content>

        <SheetFooter>
          <SheetClose asChild>
            <CartOverview.Checkout />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
