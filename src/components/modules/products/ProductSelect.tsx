'use client';
import * as i from 'types';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from 'common/interaction/Button';
import { useStoreContext } from 'services/storeContext';
import { InputCounter } from 'common/form/InputCounter';

import { VariantSelect } from './VariantSelect';

export const ProductSelect = ({ product }: ProductSelectProps) => {
  const t = useTranslations('Cart');
  const { addVariantToCart, isLoading } = useStoreContext();

  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);

  const onAddToCart = async () => {
    await addVariantToCart([
      {
        merchandiseId: selectedVariantId,
        quantity,
      },
    ]);
  };

  return (
    <div className="w-full flex flex-wrap items-center mt-2 mb-8">
      <VariantSelect
        onChange={(variantId) => setSelectedVariantId(variantId)}
        variants={product.variants}
        selectedVariantId={selectedVariantId}
      />

      <div className="mt-6 lg:flex lg:items-center">
        <InputCounter
          onChange={(quantity) => setQuantity(quantity)}
          disabled={isLoading}
          defaultValue={quantity}
          className="w-full mb-4 lg:mb-0"
        />

        <Button
          type="button"
          onClick={onAddToCart}
          className="w-full mt-2 lg:mt-0 lg:ml-2"
          disabled={isLoading}
        >
          {t('add_to_cart')}
        </Button>
      </div>
    </div>
  );
};

type ProductSelectProps = {
  product: i.ProductDetail;
};
