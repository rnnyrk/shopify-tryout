'use client';
import * as i from 'types';
import { useState } from 'react';

import { VariantSelect } from './VariantSelect';
import { Button } from 'common/interaction/Button';
import { useStoreContext } from 'services/storeContext';
import { InputCounter } from 'common/form/InputCounter';

export const ProductSelect = ({ product }: ProductSelectProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const { addVariantToCart, isLoading } = useStoreContext();

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

      <div className="mt-6">
        <InputCounter
          onChange={(quantity) => setQuantity(quantity)}
          disabled={isLoading}
          defaultValue={quantity}
          className="w-full mb-4"
        />

        <Button
          type="button"
          onClick={onAddToCart}
          className="w-full mt-2"
          disabled={isLoading}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

type ProductSelectProps = {
  product: i.ClientProduct;
};
