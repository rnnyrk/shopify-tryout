'use client';
import { useTranslations } from 'next-intl';

import CartIcon from 'vectors/cart.svg';
import { useStoreContext } from 'services/storeContext';
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
      <SheetTrigger className="relative flex items-center py-2 px-4 w-full mt-2 lg:mt-0 rounded-lg bg-background-primary lg:bg-transparent">
        <CartIcon />
        {cartQuantity > 0 && (
          <div className="absolute flex items-center justify-center top-[calc(50%-12px)] right-[12px] lg:top-[-4px] lg:right-[-4px] rounded-full w-[24px] h-[24px] text-white text-sm bg-primary-400">
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
