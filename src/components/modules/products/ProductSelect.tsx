'use client';
import * as i from 'types';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useToast } from 'hooks/useToast';
import { formatPrice, useStoreContext } from 'services';
import { Button } from 'common/interaction/Button';
import { InputCounter } from 'common/form/InputCounter';

import { VariantSelect } from './VariantSelect';

export const ProductSelect = ({ product }: ProductSelectProps) => {
  const locale = useLocale() as i.Locale;
  const t = useTranslations();
  const { toast } = useToast();
  const { addVariantToCart, isLoading } = useStoreContext();

  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const activeVariant = product.variants.find((variant) => variant.id === selectedVariantId)!;

  const onAddToCart = async () => {
    await addVariantToCart([
      {
        merchandiseId: selectedVariantId,
        quantity,
      },
    ]);
  };

  const onMaxQuantityError = () => {
    if (!activeVariant) return;
    toast({
      title: t('Products.notifications.max_amount.title'),
      description: t('Products.notifications.max_amount.text', {
        AMOUNT: String(activeVariant?.quantityAvailable || 0),
        TITLE: activeVariant?.title || '',
      }),
    });
  };

  return (
    <div className="w-full flex flex-wrap items-center mt-2 mb-8">
      <strong>{t('Products.variants')}</strong>
      <VariantSelect
        onChange={(variantId) => setSelectedVariantId(variantId)}
        variants={product.variants}
        selectedVariantId={selectedVariantId}
      />

      <div className="w-full mt-8">
        <strong className="text-3xl">
          {formatPrice({ value: activeVariant?.price.amount || product.price, locale })}
        </strong>
      </div>

      <div className="mt-8 lg:flex flex-col items-center">
        <InputCounter
          onChange={(quantity) => setQuantity(quantity)}
          disabled={isLoading}
          defaultValue={quantity}
          maxAmount={activeVariant?.quantityAvailable ?? undefined}
          onMaxAmountError={onMaxQuantityError}
          className="w-full mt-2"
        />

        <Button
          type="button"
          onClick={onAddToCart}
          className="w-full mt-2"
          disabled={isLoading}
        >
          {t('Cart.add_to_cart')}
        </Button>
      </div>
    </div>
  );
};

type ProductSelectProps = {
  product: i.ProductDetail;
};
