'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from 'common/interaction/DialogSheet';
import { CartOverview } from 'modules/cart/CartOverview';

const CartModal = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    return () => {
      setOpen(true);
    };
  }, []);

  return (
    <Sheet
      open={open}
      onOpenChange={() => router.back()}
    >
      <SheetContent
        position="right"
        size="sm"
        className="bg-white"
      >
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
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

export default CartModal;
